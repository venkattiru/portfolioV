
const Navbar = () => {
    return (
        <nav style={{display: "flex"}}>
            <ul className="nav-ui">
                <li>
                    <a href="#about">About Me</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact Me</a>
                </li>
            </ul>
        </nav>
    )
}

export default  Navbar;