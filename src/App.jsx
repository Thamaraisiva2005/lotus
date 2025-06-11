import './App.css'
import myphoto from './assets/myphoto.jpg';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Hi, I'm Thamarai 💻</h1>
        <p>Frontend Developer | Designer </p>
      </header>
      <img
  src={myphoto}
  alt="My Photo"
  style={{ width: '150px', borderRadius: '50%', margin: '20px auto', display: 'block' }}
/>

      <section className="section">
  <h2>About Me</h2>
  <p>
    Hello! I'm Thamarai Siva, a passionate Full-Stack Developer and Creative Designer from India.
    I love building clean, user-friendly applications using the MERN stack. I'm also skilled in RPA using UiPath and have a deep interest in automation and modern web technologies.
  </p>
  <p>
    When I'm not coding, I enjoy sketching, learning new design trends, and working on personal projects. I'm always open to new challenges and excited to collaborate on meaningful tech solutions.
  </p>
</section>

      <section className="section">
        <h2>Skills</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React, Node.js, MongoDB</li>
          <li>UI/UX Design (Figma, Canva)</li>
          <li>Python</li>
          </ul>
      </section>
      <section className="section">
  <h2>Projects</h2>
  <div>
    <h3>Wanderlust – Travel App</h3>
    <p>Plan personalized travel trips, built with React, Node.js, and MongoDB.</p>
  </div>
  <div>
    <h3>Student Details Management System</h3>
    <p>Admin-based system for uploading and managing student data with file support. Built using MERN stack and MEGA for cloud.</p>
  </div>
</section>

      <section className="section">
  <h2>Contact</h2>
  <p>Email: thamaraisiva29@example.com</p>
  <p>GitHub: <a href="https://github.com/Thamaraisiva2005" target="_blank">github.com/Thamaraisiva2005</a></p>
  <p>LinkedIn: <a href="https://linkedin.com/in/thamaraisiva" target="_blank">linkedin.com/in/thamaraisiva</a></p>
</section>

    </div>
    
  )
}

export default App
