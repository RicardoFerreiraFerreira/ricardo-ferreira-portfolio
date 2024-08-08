import Html5 from '../../assets/file-type-html.svg';
import Css from '../../assets/file-type-css.svg';
import JavaScript from '../../assets/file-type-js-official.svg';
import MongoDB from '../../assets/file-type-mongo.svg';
import ReactJS from '../../assets/file-type-reactjs.svg';
import Node from '../../assets/file-type-node.svg';
import './technologies.css';

const Technologies = () => {
    const technologiesData = [
        {
            name : "HTML",
            icon : Html5
        },
        {
            name : "CSS",
            icon : Css
        },
        {
            name : "JS",
            icon : JavaScript
        },
        {
            name : "MongoDB",
            icon : MongoDB
        },
        {
            name : "React",
            icon : ReactJS
        },
        {
            name : "Node",
            icon : Node
        }
    ];

    return (
        <div className="container" id="technologies">
            <div>
                <h2>
                    Technologies
                </h2>
            </div>
            <div className="technologies-info">
                {
                    technologiesData.map((skill, index) => {
                        return (
                            <i key={index} className="technologies-frame">
                                <img alt={skill.icon} src={skill.icon} />
                                <p className="technology">
                                    {skill.name}
                                </p>
                            </i>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Technologies;