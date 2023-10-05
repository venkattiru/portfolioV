import { useState } from "react";


const ContactMe = () => {
    const [copy, setCopy] = useState(false);
    const copyEmail = () => {
        navigator.clipboard.writeText('venkat.tiruveedhi@gmail.com');
        setCopy(true);
    }
    return (
        <section id="contact" style={{padding: '10px 0'}}>
            <div style={{display: 'flex', justifyContent: 'center', padding: '10px 0'}}>Contact/follow me on</div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <a href="https://www.linkedin.com/in/venkatesh-tiruveedhi" target="_blank" rel="noopener noreferrer" style={{outlineColor: '#087ea4', padding: '10px'}} title="Linked In Profile">
                <img src="https://skillicons.dev/icons?i=linkedin&theme=light" alt="Linked In"/>
                </a>
                <a href="https://github.com/venkattiru" target="_blank" rel="noopener noreferrer" style={{outlineColor: '#087ea4', padding: '10px'}} title="Github Repo">
                <img src="https://skillicons.dev/icons?i=github&theme=light" alt="Github"/>
                </a>
                <button onClick={copyEmail} style={{padding: '2px', background: '#4459a7', color: '#fff', height: '24px', cursor: 'pointer'}} title="click to copy address">email</button>
                
            </div>
            <div style={{display: 'flex', justifyContent:'center'}}>
            {copy && <span style={{padding: '0 10px', color: '#1da41d', position: 'absolute'}}>copied</span>}
            </div>
            
            </section>
    )
}
export default ContactMe;