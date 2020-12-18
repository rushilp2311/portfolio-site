import React from "react";
import Link from "next/link";
const Project = (props) => {
  const {
    name,
    description,
    liveLink,
    codeLink,
    image,
    technologiesUsed,
    note,
  } = props;
  return (
    <div className="main-project-container">
      <div className="project-container">
        <div className="image-container">
          <img src={image} alt="" className="image" />
        </div>
        <div className="project-info">
          <p className="project-heading">{name}</p>
          <p className="project-description">{description}</p>
          <p className="tech-heading">Technologies Used</p>
          <ul className="techUsed">
            {technologiesUsed.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
          <p className="project-note">{note}</p>
          <div className="buttons">
            <Link href={liveLink}>
              <a target="_blank" rel="noreferrer">
                <button className="btn-blue">View Live</button>
              </a>
            </Link>
            <Link href={codeLink}>
              <a  >
                <button className="btn-primary">Github</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
