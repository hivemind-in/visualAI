import React, { useState } from 'react'
import { Icon } from "react-icons-kit";
import { plus } from 'react-icons-kit/iconic/plus'
import { ic_layers } from 'react-icons-kit/md/ic_layers'
import { search } from 'react-icons-kit/fa/search'
import { setSearch } from '../redux/actions/states';
import { connect } from 'react-redux';
function Floating(props) {
    const [isFloating, setIsFloating] = useState(false)
    return (
        <div>
            <div
                style={{
                    backgroundColor: (isFloating) ? "rgb(224, 44, 12)" : "",
                    transition: "background-color ease-in .2s"
                }}
                onMouseEnter={() => setIsFloating(true)}
                onClick={() => setIsFloating(!isFloating)}
                className={"floating"}>
                {/* {(isFloating) ? <Icon icon={close} size={30} /> : <Icon icon={plus} size={30} />} */}
                <Icon
                    style={{
                        transform: (isFloating) ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform ease-out .3s",
                    }}
                    icon={plus} size={30} />

            </div>
            <div
                style={{
                    transform: (isFloating) ? "rotate(90deg) translateX(-50px)" : "rotate(0deg) translateX(0px)",
                    transition: "transform ease-out .2s"
                }}
                className={"floating-hidden"}>
                <Icon
                    style={{
                        transform: "rotate(-90deg)"
                    }}
                    icon={ic_layers} size={30} />
            </div>
            <div
                onClick={() => {
                    setIsFloating(false)
                    props.setSearch(!props.search)}}
                style={{
                    transform: (isFloating) ? "rotate(90deg) translateX(-100px)" : "rotate(0deg) translateX(0px)",
                    transition: "transform ease-out .2s"
                }}
                className={"floating-hidden"}>
                <Icon
                    style={{
                        transform: "rotate(-90deg)",
                        marginLeft: "-4px"
                    }}
                    icon={search} size={25} />
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        "search": state.state.payload.search
    }
}

const mapDispatchToProps = dispatch => {
    return {
        "setSearch": (val) => dispatch(setSearch(val))
    }
}

export default connect
    (mapStateToProps, mapDispatchToProps)(Floating);