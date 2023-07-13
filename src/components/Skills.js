import React from 'react';
import skillsData from '../data/skillsData';

const Skills = () => {
	return (
		<section>
			<h2>Skills</h2>
			<ul>
				{skillsData.map((skill, index) => (
					<li key={index}>{skill}</li>
				))}
			</ul>
		</section>
	);
};

export default Skills;
