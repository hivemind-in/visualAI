import React from 'react'

import ConfigMenu from '../components/ConfigMenu';
import Model from '../components/Model';
import Floating from '../components/Floating';
function Main(props) {
    
    return (
        <div className={"main-main"}>
            <ConfigMenu />
            <Model />
            <Floating /> 
        </div>
    )
}

export default Main;