import React from 'react'
import {ic_search} from 'react-icons-kit/md/ic_search'
import Icon from 'react-icons-kit'
function Search(props) {
    return(
        <div className={props.className}>
            <div className={"search-icon"}>
            <Icon size={35} icon={ic_search} />
            </div>
            <div className={"search-box"}>

            </div>
        </div>
    )
}

export default Search;