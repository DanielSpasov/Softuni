function Header(props) {
    return (
        <header className="header">
            <h1>{props.children}</h1>
        </header>
    )
}

export default Header