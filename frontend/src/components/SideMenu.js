import React from 'react'
import {ic_file_upload} from 'react-icons-kit/md/ic_file_upload'
import {ic_add} from 'react-icons-kit/md/ic_add'
import {ic_play_arrow} from 'react-icons-kit/md/ic_play_arrow'
import {userCircle} from 'react-icons-kit/fa/userCircle'
import Icon from 'react-icons-kit'
function SideMenu(props) {
    return (
        <div className={"side-menu-main"}>
            <div className={"side-icon"}>
            <Icon size={35} icon={ic_add} />
            </div>
            <div className={"side-icon"}>
            <Icon size={35} icon={ic_file_upload} />
            </div>
            <div className={"side-icon"}>
            <Icon size={35} icon={ic_play_arrow} />
            </div>
            <div className={"bottom-side-icon"}>
            <Icon size={35} icon={userCircle} />
            </div>

        </div>
    )
}

export default SideMenu;