import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import db from './firebase';
import './SidebarChat.css'

function SidebarChat({ id, name, addNewChat }) {
    const [seed, setseed] = useState("");
    const [messages, setmessages] = useState("")

    useEffect(() => {
        if (id) {
            db.collection("rooms").doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => setmessages(snapshot.docs.map((doc) => doc.data()))
            );
        }
    }, [])

    useEffect(() => {
        setseed(Math.floor(Math.random() * 5000));
    }, [])

    const createChat = () => {
        const roomName = prompt("Please enter name for chat room");
        if (roomName) {
            //do some clever databse stuff
            db.collection('rooms').add({
                name: roomName
            })
        }
    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat_info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h3 className="add-new-chat-title">Add New Chat</h3>
        </div>
    )
}

export default SidebarChat