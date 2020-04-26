import React from 'react'
import { connect } from "react-redux";
import Icon from 'react-icons-kit';
import { openNewProjectPage, openProjectPage } from "../redux/actions/open";
import {ic_cancel} from 'react-icons-kit/md/ic_cancel'
function OverlayPage(props) {
    return (
        <div
            style={{
                display: (props.open || props.new) ? "block" : "none"
            }}
            className={"overlay-page-main"}>
                <div 
                onClick={ () => {
                    if(props.open)
                    props.setOpen(!props.open)
                    else props.setNew(!props.new)
                }}  
                className={"cancel-btn"}>
                    <Icon size={20} icon={ic_cancel} />   
                </div>

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
    }
}

export default connect
    (mapStateToProps, mapDispatchToProps)
    (OverlayPage);