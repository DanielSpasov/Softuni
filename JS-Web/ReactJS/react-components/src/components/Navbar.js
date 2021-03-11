import style from './styles/Navbar.module.css'

function Navbar(props) {
    return (
        <div className={style.navbar}>
            <a href="/">Home</a>
            <div>
                <a href="/about">About</a>
                <a href="/user/login">Login</a>
                <a href="/user/register">Register</a>
            </div>
        </div>
    )
}

export default Navbar