import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header and Introduction */}
      <header>
      <img src="/image/profile.jpg" alt="Profile" />
      <h1>Kishore Kumar</h1>
      <p>Software Developer | Web Enthusiast</p>   
      </header>

      {/* About Me */}
      <section>
        <h2>About Me</h2>
        <p>
          I am a software developer with a passion for web development. I completed my B.Sc.,Software Computer Science, and I have experience in HTML, CSS, JavaScript, React.js, Java, J2EE, C#, ASP.NET, ASP.NET Core, and SQL. I enjoy creating engaging and user-friendly web applications.
        </p>
      </section>

      {/* Skills */}
      <section>
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Java</li>
          <li>J2EE</li>
          <li>C#</li>
          <li>ASP.NET</li>
          <li>ASP.NET Core</li>
          <li>SQL</li>
        </ul>
      </section>

      {/* Projects */}
      <section>
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>A brief description of Project 1.</p>
          <a href="https://github.com/kishorekichi">Live Demo</a>
          <a href="https://github.com/kishorekichi">GitHub Repository</a>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>A brief description of Project 2.</p>
          <a href="https://github.com/kishorekichi">Live Demo</a>
          <a href="https://github.com/kishorekichi">GitHub Repository</a>
        </div>
        {/* Add more projects here */}
      </section>

      {/* Experience */}
      {/* <section> */}
        {/* <h2>Experience</h2>
        <div className="experience">
          <h3>Company A</h3>
          <p>Position: Software Developer</p>
          <p>Responsibilities: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="experience">
          <h3>Company B</h3>
          <p>Position: Web Developer Intern</p>
          <p>Responsibilities: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div> */}
        {/* Add more experience here */}
      {/* </section> */}

      {/* Education */}
      <section>
        <h2>Education</h2>
        <div className="education">
          <h3>B.Sc. in Software Computer Science</h3>
          <p>University : Thiruvalluvar</p>
          <p>Year: 2022</p>
        </div>
      </section>

      {/* Contact Information */}
      <section>
        <h2>Contact Information</h2>
        <p>Email: skishorekumar018@gmail.com</p>
        <p>Phone: 6380960611</p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/kishorekumar-sundarasmay/">My profile</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/kishorekichi">github page</a>
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2023 Kishore Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
