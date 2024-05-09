import React from "react";
import './projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import lyricLift from '/public/lyriclift.jpg';
import quiz from '/public/codingquiz.jpg';
import caution from '/public/caution coming soon.png';

const Projects = () => {
    return (
        <>
            <div className="project-container">
                <h1>Projects</h1>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <img src={lyricLift} alt="project 1" />
                            <div className="card-body">
                                <div className="project-links">
                                <a href="https://github.com/HJandu/LyricLift"><FontAwesomeIcon icon={faGithub}/></a>
                                <a href="https://lyriclift.netlify.app/"><FontAwesomeIcon icon={faLink}/></a>
                                </div>
                                <h5>lyric Lift</h5>
                                <p>
                                    LyricLift is a dynamic web application built using React<br />
                                    Our Mission was to create a platform that allows users to search for song lyrics and transklate them into english.
                                </p>
                                <p>
                                    Responsive Design:<br />
                                    Our application is designed to adapt to various screen sizes, ensuring a consistent experience across devices.<br />
                                    Efficient State Management: Leveraging React's state management capabilities, we ensure that data flows smoothly throughout the application, keeping everything up-to-date without unnecessary re-renders.
                                    Component Reusability: With React's component-based architecture, we've created a library of reusable components, promoting code modularity and maintainability.
                                    Fast Rendering: React's virtual DOM enables us to efficiently update and render UI components, resulting in a snappy and responsive user experience.
                                    Scalability: Whether you're building a small prototype or a large-scale production application, React's scalability allows us to grow and evolve our project with ease.

                                </p>
                                <p>
                                    Features:
                                    Technologies Used:<br />
                                    React: A JavaScript library for building user interfaces.<br />
                                    React Router: For declarative routing in our single-page application.<br />
                                    Ky/Fetch: For making asynchronous HTTP requests to our backend services.<br />
                                    Styled Components/Materialize CSS: For styling our components and ensuring a consistent look and feel.<br />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <img src={quiz} alt="project 2" />
                            <div className="card-body">
                            <div className="project-links">
                                <a href="https://github.com/ohhmydeezy/Bootcamp-Quiz"><FontAwesomeIcon icon={faGithub}/></a>
                                <a href="https://ohhmydeezy.github.io/Bootcamp-Quiz/index.html"><FontAwesomeIcon icon={faLink}/></a>
                                </div>
                                <h5>Coding Quiz</h5>
                                <p>
                                    The Coding quiz is a modern web application powered by JQuery, designed to test the users knowledge of Basic Coding concepts.<br />
                                    With a sleek and intuitive user interface, we aim to provide a seamless experience for all our users.
                                </p>
                                <p>
                                    Key Highlights:<br />
                                    Real-time Updates: Leveraging Jquey's DOM manipulation capabilities, we created a quiz which stores the users score and displays it in real-time.<br />
                                    Dynamic Content: With JQuery's AJAX capabilities, we fetch and display questions from an seperate file, ensuring that our quiz is always up-to-date and relevant.<br />
                                </p>
                                <p>
                                    Technologies Utilized:<br />
                                    JQuery: A fast, small, and feature-rich JavaScript library for simplifying HTML document traversal and manipulation, event handling, and animation.<br />
                                    HTML & CSS: For structuring and styling our web application, ensuring a clean and intuitive user experience.<br />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <img src={caution} alt="project 3" />
                            <div className="card-body">
                            <div className="project-links">
                                <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
                                <a href="#"><FontAwesomeIcon icon={faLink}/></a>
                                </div>
                                <h5>Project 3</h5>
                                <p>
                                    Welcome to [Project Name], your ultimate destination for building powerful web applications with React. <br />
                                    Designed with developers in mind, our platform empowers you to create stunning user interfaces with ease.
                                </p>
                                <p>
                                    What Sets Us Apart:<br />
                                    Developer-Friendly APIs: With a clean and intuitive API design, [Project Name] simplifies complex tasks and reduces boilerplate code, enabling you to focus on what matters most—building great applications.
                                    Performance Optimization: Achieve blazing-fast performance with [Project Name]'s built-in optimizations, including code splitting, lazy loading, and memoization techniques.
                                    State-of-the-Art Tooling: From webpack to Babel, [Project Name] leverages the latest tools and technologies to streamline your development workflow, ensuring maximum productivity and efficiency.
                                    Accessibility: We believe in making the web accessible to all. With [Project Name], we strive to meet WCAG standards and ensure that our applications are usable by everyone, regardless of their abilities.
                                </p>
                                <p>
                                    Built with Cutting-Edge Technologies:<br />
                                    React Concurrent Mode: Embrace the future of React with Concurrent Mode, enabling smoother user experiences and better resource utilization.
                                    GraphQL/Apollo Client: Seamlessly fetch and manage data with GraphQL and Apollo Client, simplifying data fetching and state management in your applications.
                                    Next.js (optional): For server-side rendering and hybrid applications, [Project Name] integrates seamlessly with Next.js, offering unparalleled performance and SEO benefits.
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Projects;


