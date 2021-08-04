import React from 'react'
import { useState } from 'react'
import { MenuBar } from './MenuBar'
import { VerticalMenuBar } from './VerticalMenuBar'

export const MenuIndex = () => {
    const [showVerticalMenu, setShowVerticalMenu] = useState(false)

    return (
        <>
            <MenuBar setShowVerticalMenu={setShowVerticalMenu} />
            <VerticalMenuBar setShowVerticalMenu={setShowVerticalMenu} showVerticalMenu={showVerticalMenu} />
        </>
    )
}
