import React, { Component } from 'react'
import Loading from './loding'

function Cover(props) {
    return (
        <div className="cover absFill abs" id={"id" in props ? props.id : "__cover__"} >
            <div className="abs abc">
                {<Loading />}
            </div>
        </div>
    )
}

export default Cover;