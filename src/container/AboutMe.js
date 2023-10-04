import { Chrono } from "react-chrono";

const AboutMe = () => {
    const items = [
        {
          title: '2015',
          cardTitle: 'TATA CONSULTANCY SERVICES',
          cardDetailedText: 'I have started my journey in TCS. I have worked on jquery, bootstrap and java. I have received awards and recongnizations.',
        },
        {
            title: '2019',
            cardTitle: 'COGNIZANT TECHNOLOGY SOLUTIONS',
            cardSubtitle: 'Metlife Insurance',
            cardDetailedText: 'I have worked on mutiple projects where i primary worked on React js, accessibility and unit test coverage.',
          },
          {
            title: '2021',
            cardTitle: 'HCL Tech',
            cardSubtitle: 'Verizon',
            cardDetailedText: 'I got expertized in react with redux toolkit, cypress.',
          },
          {
            title: '2023',
            cardTitle: 'Telstra',
            cardSubtitle: 'T25',
            cardDetailedText: 'content is loading...',
          },
      ];
    return (
        <section id="aboutme" style={{padding: '5px 15px'}}>
            <div style={{fontSize: '24px', fontWeight: '700', color:'#1c28d6', textDecoration: 'underline'}}>About Me</div>
            <div>
                <p>I am a web developer from india . I have 8 years of experience in software industry. I worked most of my time in front end technologies including React js, Next js. I have worked on various domains like insurance, retail.</p>
                <Chrono mode ='HORIZONTAL' items = {items} hideControls= {true}/>
            </div>
        </section>
    )
}
export default AboutMe;