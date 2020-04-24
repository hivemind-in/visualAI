import React from 'react'
import {ic_drag_handle} from 'react-icons-kit/md/ic_drag_handle'
import Icon from 'react-icons-kit'

function FloatingConf(props) {
    return(
        <div className={"floating-conf-menu"}>
            <div className={"dragger"}>
                <Icon size={30} icon={ic_drag_handle} />
            </div>
        </div>
    )
}

export default FloatingConf;