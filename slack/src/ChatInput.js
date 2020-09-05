import React, {useState} from 'react';
import "./ChatInput.css";
import db from './firebase';
import { useStateValue } from './StateProvider';  
import firebase from "firebase"; 



function ChatInput({channelName, channelId}) {
    const [input, setInput] = useState('');
    const [{user, userImage}] = useStateValue();


    const sendMessage = e => {
        e.preventDefault();
        console.log('channelId', channelId, input, user);
         
        const item = {
            message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user,
                userimage: userImage,
        }

        console.log(item);

        if(channelId){
            db.collection("rooms").doc(channelId).collection("msg").add(item)
        }
    };
    return (
        <div className="chatInput">
            <form>
                <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={`Message #${channelName?.toLowerCase()}`} 
                />
                <button type="submit" onClick={sendMessage} >SEND</button> 
            </form>
        </div>
    )
}

export default ChatInput;
