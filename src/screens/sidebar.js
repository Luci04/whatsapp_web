import React, { useState, useEffect } from "react";
import InboxItem from "./inboxitem";

function Sidebar(props) {

    const [list, setlist] = useState([
        {
            id: 1,
            name: "Avinash Shukla",
            dp: "https://placeimg.com/100/100/people?id=1",
            lastMsg: "Hello there for now...",
            stamp: "12:00AM",
            status: "read"
        }, {
            id: 2,
            name: "Tushar Parte",
            dp: "https://placeimg.com/100/100/people?id=2",
            lastMsg: "Hello there for now...",
            stamp: "12:00AM",
            status: "read"
        }, {
            id: 3,
            name: "Gaurav Mishra",
            dp: "https://placeimg.com/100/100/people?id=3",
            lastMsg: "Hello there for now...",
            stamp: "12:00AM",
            status: "read"
        }
    ]);

    let inboxList = [];

    for (let i = 0; i < list.length; i++) {
        inboxList.push(<InboxItem meta={list[i]} />)
    }

    return (
        <div className="sidebar rel flex flex-col">

            {/* Head */}
            <div className="head rel flex flex-row aic">
                <button className="udp">
                    <img src="https://placeimg.com/100/100/any" />
                </button>
                <div className="actions">
                    <button className="btn s24 c777">
                        <img src="https://img.icons8.com/windows/32/000000/chat--v1.png" />
                    </button>
                    <button className="btn s24 c777">
                        <img src="https://img.icons8.com/ios-filled/50/000000/menu-2.png" />
                    </button>
                </div>
            </div>

            {/* Search */}
            <div className="search rel flex flex-row aic">
                <div className="search-box flex">
                    <button className="btn s15 c777">
                        <img src="https://img.icons8.com/material-rounded/50/000000/search.png" />
                    </button>
                    <input type="text" placeholder="Search or Start New Chat" className="fontb query s15" />
                </div>
            </div>

            {/* Inbox */}
            <div className="inbox rel flex flex-col">
                {inboxList}
            </div>
        </div>
    )
}

export default Sidebar;