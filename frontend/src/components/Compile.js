import React from 'react'
import { connect } from 'react-redux'

function Compile(props) {
    return (
        <div 
        style={{
            display: (props.compile)?"block":"none"
        }}
        className={"compile-main"}></div>
    )
}

const mapStateToProps = state => {
    return {
        "compile": state.payload.compile
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect
    (mapStateToProps, mapDispatchToProps)(Compile);