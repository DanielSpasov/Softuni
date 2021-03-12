import { useState } from 'react'

import MenuItem from './MenuItem/MenuItem'

import './Menu.css'

const menuItems = [
    { id: 1, text: 'Going to 1' },
    { id: 2, text: 'Going to 2' },
    { id: 3, text: 'Going to 3' },
    { id: 4, text: 'Going to 4' },
    { id: 5, text: 'Going to 5' },
    { id: 6, text: 'Going to 6' },
    { id: 7, text: 'Going to 7' },
    { id: 8, text: 'Going to 8' },
    { id: 9, text: 'Going to 9' },
    { id: 10, text: 'Going to 10' },
    { id: 11, text: 'Going to 11' }
]

const Menu = () => {

    const [currentItem, setCurrentItem] = useState()

    return (
        <aside className="menu">
            {menuItems.map(x =>
                <MenuItem
                    key={x.id}
                    id={x.id}
                    onClick={setCurrentItem}
                >
                    {x.text}
                </MenuItem>
            )}
        </aside>
    )
}

export default Menu