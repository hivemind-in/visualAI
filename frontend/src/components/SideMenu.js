import React from 'react'
import { ic_file_upload } from 'react-icons-kit/md/ic_file_upload'
import { ic_add } from 'react-icons-kit/md/ic_add'
import { ic_play_arrow } from 'react-icons-kit/md/ic_play_arrow'
import { userCircle } from 'react-icons-kit/fa/userCircle'
import Icon from 'react-icons-kit'
import { connect } from "react-redux";
import {
    openProjectPage,
    openNewProjectPage,
    openCompilePage,
    openLoginPage,
    defaultPage
} from "../redux/actions/open";
function SideMenu(props) {
    return (
        <div className={"side-menu-main"}>
            <div
                onClick={() => {
                    if (props.compile !== true 
                        && props.open !== true
                        && props.login !== true){
                            props.setNew(!props.new);
                            
                        }

                    if(props.new) props.setDefault()
                        
                    
                }}
                style={{
                    background: (props.new) ? "green" : ""
                }}
                className={"side-icon"}>
                <Icon size={35} icon={ic_add} />
            </div>
            <div
                onClick={() => {
                    if (props.new !== true &&
                        props.compile !== true &&
                        props.login !== true)
                        props.setOpen(!props.open);
                    if(props.open) props.setDefault()
                }}
                style={{
                    background: (props.open) ? "green" : ""
                }}
                className={"side-icon"}>
                <Icon size={35} icon={ic_file_upload} />
            </div>
            <div
                onClick={() => {
                    if (props.new !== true && 
                        props.open !== true &&
                        props.login !== true)
                        props.setCompile(!props.compile);
                    if(props.compile) props.setDefault()
                }}
                style={{
                    background: (props.compile) ? "green" : ""
                }}
                className={"side-icon"}>
                <Icon size={35} icon={ic_play_arrow} />
            </div>
            {/* <div
                onClick={() => {
                    if (props.new !== true && 
                        props.open !== true &&
                        props.compile !== true)
                        props.setLogin(!props.login);
                    if(props.login) props.setDefault()
                }}
                style={{
                    background: (props.login) ? "green" : ""
                }}
                className={"bottom-side-icon"}>
                <Icon size={35} icon={userCircle} />
            </div> */}

        </div>
    )
}

const mapStateToProps = state => {
    return {
        open: state.payload.open,
        new: state.payload.new,
        compile: state.payload.compile,
        login: state.payload.login
    }
}

const mapDispatchToProps = dispatch => {
    return {
        "setOpen": (val) => dispatch(openProjectPage(val)),
        "setNew": (val) => dispatch(openNewProjectPage(val)),
        "setCompile": (val) => dispatch(openCompilePage(val)),
        "setLogin": (val) => dispatch(openLoginPage(val)),
        "setDefault": () => dispatch(defaultPage())
    }
}

export default connect
    (mapStateToProps, mapDispatchToProps)
    (SideMenu);