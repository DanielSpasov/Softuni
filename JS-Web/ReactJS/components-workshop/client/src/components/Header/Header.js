import style from './Header.module.css'
import { Link } from 'react-router-dom'

import NavigationItem from './Navigation/Navigation'

const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <li className={style.listItem}><img src="./white-origami-bird.png" alt="white-bird"></img></li>

                <Link to="/"><NavigationItem>Home</NavigationItem></Link>
                <Link to="/about"><NavigationItem>About</NavigationItem></Link>
                <Link to="/contactus"><NavigationItem>Contact us</NavigationItem></Link>
                <Link to="/about/pesho"><NavigationItem>Going to 4</NavigationItem></Link>
                <Link to="/about/gosho"><NavigationItem>Going to 5</NavigationItem></Link>
                <Link to="/about/stamat"><NavigationItem>Going to 6</NavigationItem></Link>
                <Link to="/about/mariyka"><NavigationItem>Going to 7</NavigationItem></Link>
                <Link to="/about/malinka"><NavigationItem>Going to 8</NavigationItem></Link>
                <Link to="/about/tosho"><NavigationItem>Going to 9</NavigationItem></Link>
                <Link to="/about/plamen"><NavigationItem>Going to 10</NavigationItem></Link>
                <Link to="/about/veselin"><NavigationItem>Going to 11</NavigationItem></Link>

            </ul>
        </nav>
    )
}

export default Header