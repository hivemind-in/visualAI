import React, { useRef, useState } from "react";
import { search } from 'react-icons-kit/fa/search'
import { Icon } from "react-icons-kit";
import { setSearch } from "../redux/actions/states";
import { connect } from "react-redux";
import { ic_close } from 'react-icons-kit/md/ic_close'
function Search(props) {
    const [input, setInput] = useState("")
    const inputRef = useRef()
    const handleFocus = () => {
        if (props.search)
            inputRef.current.focus()
    }
    handleFocus()
    return (
        <div
            style={{
                // visibility: (props.search)?"":"hidden"
                transform: (props.search) ? "translateY(120px)" : "translateY(0px)",
                transition: "transform ease-out .2s, height ease-out .2s",
                height: (input !== "") ? "100px":"40px",
            }}
            className={"search-div"}>
            <div className={"search-main"}>
                <div id={"search-icon"}>
                    <Icon icon={search} size={30} />
                </div>
                <div id={"input"}>
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        ref={inputRef} placeholder={"Search"} />
                </div>
                <div
                    onClick={() => {
                        setInput("")
                        props.setSearch(false)}}
                    id={"cancel"}>
                    <Icon icon={ic_close} size={30} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        "search": state.state.payload.search
    }
}
const mapDispathToProps = dispatch => {
    return {
        "setSearch": (val) => dispatch(setSearch(val))
    }
}
export default connect
    (mapStateToProps, mapDispathToProps)(Search);