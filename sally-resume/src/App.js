import React from 'react';
import './App.css';

function App() {
  return (
    <div className="main-div">
      <header>
        <h1>Sally Student</h1>
      </header>
      <main className="main-container">
        <section className="education">
          <h2>Sally's Education</h2>
        </section>
        <section className="employment">
          <h2>Sally's Employment History</h2>
          <ul className="company">
            <h2>Company Name</h2>
            <li>Job Title</li>
            <li>Dates of Employment</li>
            <li>Description</li>
          </ul>
          <ul className="company">
            <h2>Company Name</h2>
            <li>Job Title</li>
            <li>Dates of Employment</li>
            <li>Description</li>
          </ul>
        </section>
      </main>
      <address className="address">
        <p>Sally Student</p>
        <p>SallyStudent@whatever.com</p>
        <p>888-888-8888</p>
        <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg" alt="Ilana" />
      </address>
    </div>
  );
}

export default App;
