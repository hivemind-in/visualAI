import React from 'react'
import { database } from 'react-icons-kit/fa/database'
import { Icon } from "react-icons-kit";
import {ic_file_upload} from 'react-icons-kit/md/ic_file_upload'
function ConfigMenu(props) {
    return (
        <div className={"customise"}>
            <div className={"customise-title"}>
                <h3>Model</h3>
            </div>
            <div className={"customise-items"}>
                <div className={"customise-items-div"}>
                    <div className={"customise-option"}>
                        <div id={"col-1"}>
                            <Icon icon={database} size={15} />
                        </div>
                        <div id={"col-2"}>
                            <p>No file selected</p>
                        </div>
                        <div id={"col-3"}>
                        <Icon icon={ic_file_upload} size={20} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ConfigMenu;