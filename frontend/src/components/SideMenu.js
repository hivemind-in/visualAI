import React from 'react'
import { ic_file_upload } from 'react-icons-kit/md/ic_file_upload'
import { ic_add } from 'react-icons-kit/md/ic_add'
import { ic_play_arrow } from 'react-icons-kit/md/ic_play_arrow'
import { userCircle } from 'react-icons-kit/fa/userCircle'
import Icon from 'react-icons-kit'
import { connect } from "react-redux";
import openProjectPage from "../redux/actions/open";
function SideMenu(props) {
    return (
        <div className={"side-menu-main"}>
            <div className={"side-icon"}>
                <Icon size={35} icon={ic_add} />
            </div>
            <div
                onClick={() => {
                    props.setOpen(!props.open);
                }}
                style={{
                    background: (props.open)?"green":""
                }}
                className={"side-icon"}>
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

const mapStateToProps = state => {
    return {
        open: state.payload.open
    }
}

const mapDispatchToProps = dispatch => {
    return {
        "setOpen": (val) => dispatch(openProjectPage(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);