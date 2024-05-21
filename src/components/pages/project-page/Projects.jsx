import React from "react";
import './projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import lyricLift from '/public/lyriclift.jpg';
import quiz from '/public/codingquiz.jpg';
import password from '/public/password.jpg';

const Projects = () => {
    return (
        <div className="project-container">
            <h1>Projects</h1>
            <div className="flex-grid">
                <div className="card">
                    <img src={lyricLift} alt="project 1" />
                    <div className="card-body">
                        <div className="project-links">
                            <a href="https://github.com/HJandu/LyricLift"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://lyriclift.netlify.app/"><FontAwesomeIcon icon={faLink} /></a>
                        </div>
                        <h5>Lyric Lift</h5>
                        <p>
                            LyricLift is a dynamic web application built using React.<br />
                            Our Mission was to create a platform that allows users to search for song lyrics and translate them into English.
                        </p>
                        <p>
                            <strong>Responsive Design:</strong><br />
                            Our application is designed to adapt to various screen sizes, ensuring a consistent experience across devices.<br />
                            <strong>Efficient State Management:</strong><br />
                            Leveraging React's state management capabilities, we ensure that data flows smoothly throughout the application, keeping everything up-to-date without unnecessary re-renders.<br />
                            <strong>Component Reusability:</strong><br />
                            With React's component-based architecture, we've created a library of reusable components, promoting code modularity and maintainability.<br />
                            <strong>Fast Rendering:</strong><br />
                            React's virtual DOM enables us to efficiently update and render UI components, resulting in a snappy and responsive user experience.<br />
                            <strong>Scalability:</strong><br />
                            Whether you're building a small prototype or a large-scale production application, React's scalability allows us to grow and evolve our project with ease.
                        </p>
                        <p>
                            <strong>Features:</strong><br />
                            <strong>Technologies Used:</strong><br />
                            React: A JavaScript library for building user interfaces.<br />
                            React Router: For declarative routing in our single-page application.<br />
                            Ky/Fetch: For making asynchronous HTTP requests to our backend services.<br />
                            Styled Components/Materialize CSS: For styling our components and ensuring a consistent look and feel.<br />
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src={quiz} alt="project 2" />
                    <div className="card-body">
                        <div className="project-links">
                            <a href="https://github.com/ohhmydeezy/Bootcamp-Quiz"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://ohhmydeezy.github.io/Bootcamp-Quiz/index.html"><FontAwesomeIcon icon={faLink} /></a>
                        </div>
                        <h5>Coding Quiz</h5>
                        <p>
                            The Coding quiz is a modern web application powered by jQuery, designed to test the user's knowledge of Basic Coding concepts.<br />
                            With a sleek and intuitive user interface, we aim to provide a seamless experience for all our users.
                        </p>
                        <p>
                            <strong>Key Highlights:</strong><br />
                            Real-time Updates: Leveraging jQuery's DOM manipulation capabilities, we created a quiz that stores the user's score and displays it in real-time.<br />
                            Dynamic Content: With jQuery's AJAX capabilities, we fetch and display questions from a separate file, ensuring that our quiz is always up-to-date and relevant.<br />
                        </p>
                        <p>
                            <strong>Technologies Utilized:</strong><br />
                            jQuery: A fast, small, and feature-rich JavaScript library for simplifying HTML document traversal and manipulation, event handling, and animation.<br />
                            HTML & CSS: For structuring and styling our web application, ensuring a clean and intuitive user experience.<br />
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src={password} alt="project 3" />
                    <div className="card-body">
                        <div className="project-links">
                            <a href="https://github.com/ohhmydeezy/password-generator"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://ohhmydeezy.github.io/password-generator/"><FontAwesomeIcon icon={faLink} /></a>
                        </div>
                        <h5>Random Password Generator</h5>
                        <p>
                            The Random Password Generator is a simple yet effective application built using JavaScript.<br />
                            Designed with the end user in mind, the application is intuitive and easy to use.
                        </p>
                        <p>
                            <strong>What Sets Us Apart:</strong><br />
                            Creating a random password generator with vanilla JavaScript is both straightforward and highly useful for enhancing security.<br />
                            The generator uses an intuitive and clean code design, making it easy to integrate into any project.<br />
                            By leveraging built-in functions and optimizing performance with efficient algorithms, this generator ensures that you can create strong, unpredictable passwords without significant overhead.<br />
                            The generator is designed to be accessible and user-friendly, ensuring that users of all skill levels can easily generate secure passwords for their applications. With this tool, you can focus on building robust and secure web applications without worrying about password security.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
