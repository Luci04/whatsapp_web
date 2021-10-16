import React, { useState, useEffect } from "react";

import Sidebar from "./sidebar";
import Chatbox from "./chatbox";

function Messenger() {
    return (
        <div className="messenger fixed absFill">
            <div className="ribbon" />
            <div className="wrapper absFill abs flex">
                <Sidebar />
                <Chatbox />
            </div>

        </div>
    )
}

export default Messenger;