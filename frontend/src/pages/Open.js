import React from 'react'
import Search from '../components/Search'
import { connect } from 'react-redux'
import { defaultPage } from '../redux/actions/open'
import {ic_cancel} from 'react-icons-kit/md/ic_cancel'
import Icon from 'react-icons-kit';
function Open(props) {
    return (
        <div className={"open-main"}>
            <div className={"open-row-1"}>
                <Search className={"open-search-main"} />
                <div
                    onClick={() => {
                        props.setDefault()
                    }}
                    className={"cancel-btn"}>
                    <Icon size={20} icon={ic_cancel} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        "open": state.payload.open
    }
}

const mapDispatchToprops = dispatch => {
    return {
        "setDefault": () => dispatch(defaultPage())
    }
}

export default connect
    (mapStateToProps, mapDispatchToprops)(Open);