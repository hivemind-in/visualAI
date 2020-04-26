import React from 'react'
import FloatingMenu from '../components/FloatingMenu'
import FluidConf from '../components/FloatingConf'
import Compile from '../components/Compile'
function Main(props) {
    return (
        <div className={"main-main"}>
            <FluidConf />
            <FloatingMenu />
            <Compile/>
        </div>
    )
}

export default Main;