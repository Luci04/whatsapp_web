import React, { useState, useEffect } from "react";
import InboxItem from "./inboxitem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

function Sidebar(props) {

    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);


    useEffect(() => {
        loadInbox();
    });

    const loadInbox = async () => {
        console.log("Loading Inbox");
        global.firestore
            .collection("inbox")
            .get()
            .then(docs => {
                if (docs.empty) {
                    setLoading(false);
                    setLoaded(true);
                } else {
                    docs.forEach(doc => {
                        console.log(doc.data());
                    })
                }
            })
    }


    // const [list, setlist] = useState([
    //     {
    //         id: 1,
    //         name: "Avinash Shukla",
    //         dp: "https://placeimg.com/100/100/people?id=1",
    //         lastMsg: "Hello there for now...",
    //         stamp: "12:00AM",
    //         status: "read"
    //     }, {
    //         id: 2,
    //         name: "Tushar Parte",
    //         dp: "https://placeimg.com/100/100/people?id=2",
    //         lastMsg: "Hello there for now...",
    //         stamp: "12:00AM",
    //         status: "read"
    //     }, {
    //         id: 3,
    //         name: "Gaurav Mishra",
    //         dp: "https://placeimg.com/100/100/people?id=3",
    //         lastMsg: "Hello there for now...",
    //         stamp: "12:00AM",
    //         status: "read"
    //     }
    // ]);

    let inboxList = [];
    if (loading == true && loaded == false) {
        for (let i = 0; i < 5; i++) {
            inboxList.push(<InboxItem meta={{ holder: true }} />)
        }
    } else {
        if (list.length > 0) {
            for (let i = 0; i < list.length; i++) {
                inboxList.push(<InboxItem meta={list[i]} />)
            }
        } else {
            inboxList.push(
                <div key="empty-inbox" className="empty-block abs s16 fontn c777">Inbox is Empty</div>
            )
        }
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
                        <FontAwesomeIcon icon={faMessage} />
                    </button>
                    <button className="btn s24 c777">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
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