import React from 'react';
import projectsData from '../data/projectsData';

const Projects = () => {
	return (
		<section>
			<h2>Projects</h2>
			<ul>
				{projectsData.map((project, index) => (
					<li key={index}>
						<h3>{project.title}</h3>
						<p>{project.description}</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Projects;
