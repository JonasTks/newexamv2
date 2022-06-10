import React from 'react';
import { NavLink } from 'react-router-dom';
import Myocco from './Myocco.png'

import './Project.css'

const Projects = () => {
    // const [allPostsData, setAllPosts] = useState(null);

    // useEffect(() => {
    //     SanityClient.fetch(
    //         `*[_type == "post"]{
    //             title,
    //             slug,
    //             mainImage{
    //                 asset->{
    //                     _id,
    //                     url
    //                 }
    //             }
    //         }`
    //     )
    //     .then((data) => setAllPosts(data))
    //     .catch(console.error);
    // }, []);

    return (
        <section>
            <div className="banner-img2">
                <div className="heading">
                    <h1>PROJECTS</h1>
                    <p>My work</p>
                </div>
            </div>
            <div className="work-container">
                <h1 className="project-heading">Projects</h1>
                <div className="project-container">
                    <div className="project-card">
                        <img src={Myocco} alt="image" />
                        <h2 className="project-title">Project Title</h2>
                        <div className="project-details">
                            <p>This is a project</p>
                            <div className="project-button">
                                <NavLink to="/projects" className="btn btn-transparent">View</NavLink>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </section>
    )
}

export default Projects;