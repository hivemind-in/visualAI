import React from 'react';
import { Icon } from 'react-icons-kit';
import {androidAdd} from 'react-icons-kit/ionicons/androidAdd'
function DataBlock({setShowSearch}) {

    const handleSearch = () => {
        setShowSearch(true);
    }

    return(
        <div className={'data-block'}>
            <div onClick={handleSearch} className={'connector'}>
                <Icon icon={androidAdd} size={30} />
            </div>
        </div>
    )
}

export default DataBlock;