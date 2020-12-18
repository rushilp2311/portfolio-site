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
  } = props;
  return (
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
        <div className="buttons">
          <Link href={liveLink}>
            <button className="btn-blue">View Live</button>
          </Link>
          <Link href={codeLink}>
            <button className="btn-primary">Github</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Project;
