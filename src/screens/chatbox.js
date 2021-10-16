import React, { useState, useEffect } from "react";

function Chatbox() {
    return (
        <div className="chatbox rel">
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

            {/* <div className="abs abc">
            </div> */}
        </div>
    )
}

export default Chatbox;