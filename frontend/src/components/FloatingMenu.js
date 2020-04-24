import React from 'react'
import Search from './Search'
import {ic_drag_handle} from 'react-icons-kit/md/ic_drag_handle'
import Icon from 'react-icons-kit'
function FloatingMenu(props) {
    return(
        <div className={"floating-menu-main"}>
            <div className={"dragger"}>
                <Icon size={30} icon={ic_drag_handle} />
            </div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <Search />
        </div>
    )
}

export default FloatingMenu;