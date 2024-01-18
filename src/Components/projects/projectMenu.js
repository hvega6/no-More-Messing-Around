import classNames from "classnames";
import React, { Component } from "react";
// Make sure you have the correct path for these images/components
import "../../styles/projectMenu.css";
import projects from "./projectsData";

class ProjectMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1, // Represents the active category e.g. FRONT-END
      activeProject: 1, // Represents the active project within the category
    };

    this.menuItems = [
      "FRONT-END",
      "BACK-END",
      "DATA-ANALYTICS",
      "MACHINE-LEARNING/AI",
      "MARKETING",
    ];

    this.projectItems = {
      1: ["PROJECT ONE", "PROJECT TWO", "PROJECT THREE"],
      2: ["PROJECT ONE", "PROJECT TWO", "PROJECT THREE"],
      3: ["PROJECT ONE", "PROJECT TWO", "PROJECT THREE"],
      4: ["PROJECT ONE", "PROJECT TWO", "PROJECT THREE"],
      5: ["PROJECT ONE", "PROJECT TWO", "PROJECT THREE"],
    };
  }

  handleMenuItemClick = (index) => {
    this.setState({
      activeMenuItem: index,
      activeProject: 1, // Reset to the first project when a new category is selected
    });
  };

  handleProjectClick = (index) => {
    this.setState({ activeProject: index });
  };

  renderContent = (projectData) => {
    const categoryProjects = projectData[this.state.activeMenuItem];
    const project = categoryProjects
      ? categoryProjects[this.state.activeProject]
      : null;
    if (!project) return <p>No project found.</p>;

    // Render your project content here, using project.title, etc.
    return (
      <section className="project-sub-container">
        <h2>{project.title}</h2>
        <img src={project.image} alt={project.title} />
        <p>{project.description}</p>
        <section className="link-container">
        <a href={project.github} target="_blank" rel="noopener noreferrer">GITHUB</a>
        <a href={project.demo} target="_blank" rel="noopener noreferrer">DEMO</a>
        </section>
      </section>
    );
  };

  render() {
    const { activeMenuItem, activeProject } = this.state;
    const projectTitles = this.projectItems[activeMenuItem] || [];

    return (
      <main>
        <section className="skill-category">
          {this.menuItems.map((item, index) => (
            <article
              key={index}
              className={classNames("skill-item", {
                activeCategory: activeMenuItem === index + 1,
              })}
              onClick={() => this.handleMenuItemClick(index + 1)}
            >
              <h2 className="skill-title">{item}</h2>
            </article>
          ))}
        </section>

        {/* Show project titles that belong to the active category */}
        {/* Show project titles that belong to the active category */}
        <section className="project-menu">
            <section className="project-items-container">
              {projectTitles.map((title, index) => (
                <article
                  key={index}
                  className={classNames("project-item", {
                    activeProject: activeProject === index + 1,
                  })}
                  onClick={() => this.handleProjectClick(index + 1)}
                >
                  <h2 className="title">{title}</h2>
                </article>
              ))}
            </section>
            {/* Project detail */}
            <section>{this.renderContent(projects)}</section>
          </section>
      </main>
    );
  }
}


export default ProjectMenu;
