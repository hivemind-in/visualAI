import React from 'react'
import { ic_drag_handle } from 'react-icons-kit/md/ic_drag_handle'
import Icon from 'react-icons-kit'
import Draggable from 'react-draggable'
function FloatingConf(props) {
    return (
        <Draggable 
        bounds={"parent"}
        handle={".dragger"} 
        axis={"x"}>
            <div className={"floating-conf-menu"}>
                <div className={"dragger"}>
                    <Icon size={30} icon={ic_drag_handle} />
                </div>
            </div>
        </Draggable>
    )
}

export default FloatingConf;