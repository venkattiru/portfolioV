import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Intro from "./Intro";
import Skills from "./Skills";

const MainComponent = () => {
    return(
        <div>
            <Intro/>
            <AboutMe/>
            <Skills/>
            <ContactMe/>
        </div>
    );
}
export default MainComponent;