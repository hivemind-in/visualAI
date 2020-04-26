import React from 'react'
import Main from '../pages/Main'
import { connect } from 'react-redux'
import Open from '../pages/Open'
import New from '../pages/New'

function Pages(props) {
    console.log(props.whichpage)
    const whichPage = {
        "default": <Main />,
        "open": <Open />,
        "new": <New />,
        "compile": <Main />
    }

    return (
        whichPage[props.whichpage]
    )
}

const mapStateToProps = state => {
    return {
        "whichpage": state.payload.whatpage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        "defaut": null
    }
}

export default connect
(mapStateToProps, mapDispatchToProps)(Pages);