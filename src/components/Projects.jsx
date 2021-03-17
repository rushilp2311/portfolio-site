import React from "react";

function Projects() {
  return (
    <div className="project__container" style={{ overflowX: "hidden" }}>
      <h2 className="title">Some of my Projects</h2>
      <section
        className="card"
        data-aos="fade-right"
        style={{ overflowX: "hidden" }}
      >
        <img src="https://picsum.photos/id/237/570/400" alt="card 1" />
        <div>
          <h3>Issue Tracker</h3>
          <p>
            Issue Tracking Project similar to JIRA build with ReactJS, NodeJS,
            Express, PostgresSQL, SCSS. It is primarily build to track issues
            among teams. Some of the functionalities include sorting issues
            based on sprint, chat and a beautiful dashboard visualizing your
            progress.
          </p>
          <p style={{ color: "red" }}>Note: Work in Progress</p>
          <div className="btns">
            <p className="live__btn">Live (Coming Soon)</p>
            <p className="code__btn">Code</p>
          </div>
        </div>
      </section>
      <section className="card" data-aos="fade-left">
        <img src="https://picsum.photos/id/231/570/400" alt="card 1" />
        <div>
          <h3>Mom & Pop Book Store</h3>
          <p>
            Mom & Pop Book Store 
          </p>
          <div className="btns">
            <p className="live__btn">Live</p>
            <p className="code__btn">Code</p>
          </div>
        </div>
      </section>
      
      <section className="card" data-aos="fade-left">
        <img src="https://picsum.photos/id/27/570/400" alt="card 1" />
        <div>
          <h3>Acrylic Painting Four</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            ducimus nihil quia eum at omnis cum et numquam debitis labore! Iusto
            minima itaque inventore cupiditate, explicabo nam magnam quis
            nostrum!
          </p>
          <div className="btns">
            <p className="live__btn">Live</p>
            <p className="code__btn">Code</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
