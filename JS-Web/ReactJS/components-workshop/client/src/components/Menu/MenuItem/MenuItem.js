import './MenuItem.css'

const MenuItem = ({
    children,
    onClick,
    id
}) => {
    return (
        <li className="menu-item">
            <a href="#" onClick={() => onClick(id)}>
                {children}
            </a>
        </li>
    )
}

export default MenuItem