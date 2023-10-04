import TypewriterComponent from "typewriter-effect";
import ProfileImg from "../ProfileImg";

const Intro = () => {
    return (
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <div style={{fontSize: '50px'}}>
            <p style={{margin : '10px 0'}}>Hello there ... <img src="./duck.gif" alt="hello" height={64}/></p>
            <div style={{display: 'flex', alignItems: "center"}}>
            <p style={{margin: '2px 10px 2px 2px'}}>I am </p>
            <p style={{margin : '10px 5px'}} className="hero-name">Venkatesh Tiruveedhi</p>
            </div>
            <div style={{display: 'flex', alignItems: "center", fontSize:'32px'}}>
            <p style={{margin: '2px 10px 2px 2px'}}>I am </p>
            <TypewriterComponent options={{
                strings: ['a senior software engineer', 'a front end developer', 'a react developer', 'a web developer', 'a learner'],
                autoStart: true,
                loop: true,
            }}
            />
            </div>
            
            </div>
            <ProfileImg/>
        </div>
    )
}
export default Intro;