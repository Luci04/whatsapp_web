import React from 'react'

function InboxItem(props) {

    const { id, name, dp, lastMsg, stamp, status } = props.meta;

    return (
        <div className="item flex rel aic">
            <div className="udp rel">
                <img src={dp} className="b1" />
            </div>
            <div className="meta rel flex flex-col">
                <h2 className="s15 fontb c333 uname">{name}</h2>
                <h2 className="s14 fontn c777 lastMsg">{lastMsg}</h2>
                <h3 className="s12 fontn c777 abs stamp">{stamp}</h3>
            </div>
        </div>
    )

}

export default InboxItem;