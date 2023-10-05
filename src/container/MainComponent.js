import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";

const MainComponent = () => {
    return(
        <div>
            <Intro/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <ContactMe/>
        </div>
    );
}
export default MainComponent;