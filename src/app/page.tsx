import Image from "next/image";


export default function Home() {
  return (
    <div>
      <div className="takesall h-[3000px] w-[720px] m-auto">
          <h1 id="header" className="title">WANTED</h1>
          <div className="cut border-b-2 border-black" />
            <div className="h-[611px]">
              <div className="picture-board">
                <div className="wanted h-[50px] w-[204px]">
                  <h3 className="available pt-1">Available for work</h3>
                </div>
                <img src="my-picture.jpg" alt="My-Picture" className="mypicture w-[330px] h-[330px] mx-auto"/>
              </div>
              <br/>
              <div className="picname">
                <h1 id="name">Faisal Alsayed</h1>
                <p id="career">Software Engineer</p>
              </div>
            </div>
          <div className="cut border-b-2 border-black" />
            <div className="lr">
              <div className="left h-[350px] w-[50%]"><h3 id="about">About</h3></div>
              <div className="right h-[350px] w-[50%]"><p id="summary">Faisal Alsayed is a recent graduate specializing in Information Technology (IT), He wants to join a professional work environment where he can utilize his skills and academic qualifications to gain diverse experiences and knowledge. 
                <br/>He also eager to work with a supportive team that encourages his professional development and helps the workplace succeed.</p></div>
            </div>
          <div className="cut border-b-2 border-black" />     
                
            <div className="lr">
              <div className="left h-[350px] w-[70%]">
                <h3 id="subtitle">Experience</h3>
                <br/>
                <br/>
                <h3 className="job">IT Support</h3>
                <p>Internship,</p>
                <p>I have experience working on a variety of technology problems such as cabling
                networks, repairing PCs, and providing technical support to everyone on
                campus.</p>
                <br/>
                <p>Problem Solving, Teamwork, Technical support.</p>
                
                <br/>
                <br/>

                <h3 className="job">Web Developer</h3>
                <p>Graduation Project,</p>
                <p>The website provides a track for anyone with an interest in IT and serves as a
                link between students and certifications.</p>
                <br/>
                <p>HTML, CSS, JavaScript, Node.js, MongoDB.</p>
              </div>
              <div className="right h-[520px] w-[30%]">
                <p id="date1">Feb 2024 – May 2024</p>
                <p id="date2">May 2023 – Dec 2023</p>
              </div>
            </div>
            <div className="cut border-b-2 border-black" />
            <div className="skill">
              <h3 id="subtitle" className="h-[100%] w-[100%]">Skills</h3>
              <div className="skill-list">
                <div className="left-list">
                  <ul className="list">
                    <li>HTML, CSS, JavaScript</li>
                    <li>SQL & NoSQL</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Interpersonal skills</li>
                  </ul>
                </div>
                <div className="right-list">
                  <ul className="list">
                    <li>Adaptability</li>
                    <li>Typing Speed up to 90 WPM</li>
                    <li>Troubleshooting</li>
                    <li>Analytical skills</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="cut border-b-2 border-black" />
      </div>
    </div>
  );
}
