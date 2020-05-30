import React, { useState } from 'react'
import { ic_layers } from 'react-icons-kit/md/ic_layers'
import { plus } from 'react-icons-kit/iconic/plus'
import { database } from 'react-icons-kit/fa/database'
import { Icon } from "react-icons-kit";
import Search from './Search';
function Model(props) {
    const [add, setAdd] = useState(false);
    const [search, setSearch] = useState(false);
    return (
        <div className={"model-main"}>
            {/* <p>Click in + to start adding layers</p> */}
            <Search/>
            <div>
                <div
                    onMouseEnter={() => setAdd(true)}
                    onMouseLeave={() => setAdd(false)}
                    className={"card"}>
                    <div id={"icon"}>
                        <Icon icon={database} size={35} />
                    </div>
                    <div id={"content"}></div>
                    <div
                        id={"dot"}>
                        {(add) ? <Icon icon={plus} size={8} /> : <></>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model;