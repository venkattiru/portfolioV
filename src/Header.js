import Navbar from "./Navbar"
import Logo from "./Logo";
const Header = () => {
    return (
        <header style={{display:"flex", justifyContent: "space-between", paddingTop: 10, paddingRight: 10, paddingLeft:10, paddingBottom: 10}}> 
            <Logo/>
            <Navbar/>
        </header>
    )
}

export default Header;