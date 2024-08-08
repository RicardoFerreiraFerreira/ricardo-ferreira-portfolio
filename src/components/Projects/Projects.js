import './projects.css';
//import "bootstrap/dist/css/bootstrap.css";
import NyanCat from '../../assets/tom-and-Jerry-background.jpg';

const Projects = () => {
    
    return (
        <div className="container" id="projects">
            <h2>
                Projects
            </h2>
            <span >
                <p className='project-title-image'>Nyan Cat</p>
                <img  className='projects-image projects-image-container' src={NyanCat} /> 
            </span>

        </div>
    )
}

export default Projects;