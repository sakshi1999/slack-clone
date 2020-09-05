import React, { useState, useEffect } from 'react';  
import "./Sidebar.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from "./firebase";
import { useStateValue } from './StateProvider';


function Sidebar() {
    
     const [channels, setChannels] = useState([]);
     const [{user, userImage}] = useStateValue();
     console.log("photo dede yr",userImage);

     useEffect(() => {
         db.collection('rooms').onSnapshot((snapshot) => {
             setChannels(
                 snapshot.docs.map(doc=> ({
                     id: doc.id,
                     name: doc.data().name,
                 }))
             )
         })
     }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                <h2>slack clone</h2>
                <h3>
                    <FiberManualRecordIcon/>
                    {user}
                    {userImage?.photoURL}
                </h3>
            
                </div>
                <CreateIcon/>
            </div>
            <SidebarOption Icon={InsertCommentIcon} title={"Theards"}/>         
            <SidebarOption Icon={InboxIcon} title={"Mentions & reactions"}/>         
            <SidebarOption Icon={DraftsIcon} title={"saved items"}/>         
            <SidebarOption Icon={BookmarkBorderIcon} title={"channel browser"}/>         
            <SidebarOption Icon={PeopleAltIcon} title={"people & user groups"}/>         
            <SidebarOption Icon={AppsIcon} title={"Apps"}/>         
            <SidebarOption Icon={FileCopyIcon} title={"file browser"}/>         
            <SidebarOption Icon={ExpandLessIcon} title={"show less"}/> 
            <hr/>        
            <SidebarOption Icon={ExpandMoreIcon} title={"channel"}/>
            <hr/> 
            <SidebarOption Icon={AddIcon} addChannelOption title={"Add channels"}/> 

            {/* connect to DB and list all channels */}
            {/* <SidebarOption .../> */}
            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id}/>
            ))}
            
        </div>
    )
}

export default Sidebar;
