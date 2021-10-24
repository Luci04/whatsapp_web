import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';


function ChatItem(props) {

    const { ID, user, meta, stamp, status } = props.meta;
    const isme = user.ID == global.fire.me.ID;

    return (
        <div className={"item flex rel aic" + (isme ? " me" : "")}>
            <div className="bubble rel">
                {/* {user.ID == global.fire.me.ID && <h2 className="s15 fontb uname">{user.name}</h2>} */}
                {/* <h2 className="s15 fontb uname">{user.name}</h2> */}
                <p className="meta s15 fontn">
                    {meta.text}
                </p>
                <h2 className="s12 fontn c777 abs stamp">
                    {stamp}
                    {
                        isme &&
                        <FontAwesomeIcon className="tick s15" icon={faCheckDouble} />
                    }
                </h2>

            </div>
        </div>
    )

}

export default ChatItem;