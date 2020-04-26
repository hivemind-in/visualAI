import React from 'react'
import { connect } from "react-redux";

import { openNewProjectPage, openProjectPage } from "../redux/actions/open";

function OverlayPage(props) {
    return (
        <div
            style={{
                display: (props.open || props.new) ? "block" : "none"
            }}
            className={"overlay-page-main"}>
                

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