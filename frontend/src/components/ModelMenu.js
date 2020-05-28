import React from 'react';
import {folderOpen} from 'react-icons-kit/fa/folderOpen'
import { Icon } from 'react-icons-kit';

function ModelMenu(props) {
    return(
        <div className={'model-menu'}>
            <div className={'option'}>
                <div className={'o-col1'}>
                    <input placeholder={'Source'} /> 
                </div>
                <div className={'o-col2'}>
                    <Icon icon={folderOpen} size={20} />
                </div>
            </div>
            <div className={'hr'}></div>
        </div>
    )
}

export default ModelMenu;