import React, { useState, useEffect } from "react";
import ChatItem from "./chatItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceGrin, faPaperclip, faEllipsisVertical, faMicrophone } from '@fortawesome/free-solid-svg-icons';

function Chatbox(props) {

    const { list } = props;
    const [chat, setChat] = useState([
        {
            ID: 1,
            user: {
                ID: 123,
                name: "John Doe"
            },
            meta: {
                type: "text",
                text: "Hi there!"
            },
            stamp: "1:21 PM",
            status: "sent"
        }, {
            ID: 2,
            user: {
                ID: 123,
                name: "John Doe"
            },
            meta: {
                type: "text",
                text: "Can you help me"
            },
            stamp: "1:21 PM",
            status: "read"
        }, {
            ID: 1,
            user: {
                ID: global.fire.me.ID,
                name: "Avinash Shukla"
            },
            meta: {
                type: "text",
                text: "Hey how can I help ?"
            },
            stamp: "1:21 PM",
            status: "sent"
        }
    ])

    if (chat.length == 0) {
        return (
            <div className="chatbox rel">
                <div key="empty-inbox" className="empty-block abc abs s16 fontn c777">
                    <div className="ico s72 icon-filter_list">
                        Select Conversation from List
                    </div>
                </div>
            </div>
        )
    }
    let chatList = [];

    if (list) {

        for (let i = 0; i < chat.length; i++) {
            chatList.push(<ChatItem meta={chat[i]} />);
        }
    }

    return (
        <div className="chatbox rel">
            {/* Head */}
            <div className="head rel flex flex-row aic">
                <div className="meta flex aic">
                    <button className="udp">
                        <img src="https://placeimg.com/100/100/any" />
                    </button>
                    <div className="usr flex flex-col">
                        <h2 className="s15 fontb name c333">Avinash Shukla</h2>
                        <h2 className="s12 fontn lo c777">Last Online 3 mins ago.</h2>
                    </div>
                </div>
                <div className="actions">
                    <button className="btn s24 c777">
                        <FontAwesomeIcon icon={faPaperclip} />
                    </button>
                    <button className="btn s24 c777">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </div>
            </div>

            {/* Chat */}
            <div className="chat abs">
                {chatList}
            </div>




            {/* Sendbox */}

            <div className="sendbox rel flex flex-row aic">
                <button className="btn s24 c777">
                    <FontAwesomeIcon icon={faFaceGrin} />
                </button>
                <input type="text" placeholder="Type your message..." className="fontn send-txt s15" />
                <button className="btn s24 c777">
                    <FontAwesomeIcon icon={faMicrophone} />
                </button>

            </div>

        </div>
    )
}

export default Chatbox;