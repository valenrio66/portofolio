import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/styles.css';

const App = () => {
	useEffect(() => {
		const sections = document.querySelectorAll('section');
		const fadeInOptions = {
			rootMargin: '0px 0px -100px 0px',
		};

		const fadeInObserver = new IntersectionObserver((entries, fadeInObserver) => {
			entries.forEach(entry => {
				if (!entry.isIntersecting) {
					return;
				} else {
					entry.target.classList.add('fade-in');
					fadeInObserver.unobserve(entry.target);
				}
			});
		}, fadeInOptions);

		sections.forEach(section => {
			fadeInObserver.observe(section);
		});

		const slideInObserver = new IntersectionObserver((entries, slideInObserver) => {
			entries.forEach(entry => {
				if (!entry.isIntersecting) {
					return;
				} else {
					entry.target.classList.add('slide-in');
					slideInObserver.unobserve(entry.target);
				}
			});
		});

		sections.forEach(section => {
			slideInObserver.observe(section);
		});

		const scrollFadeInOptions = {
			rootMargin: '0px 0px -200px 0px',
		};

		const scrollFadeInObserver = new IntersectionObserver(
			(entries, scrollFadeInObserver) => {
				entries.forEach(entry => {
					if (!entry.isIntersecting) {
						return;
					} else {
						entry.target.classList.add('scroll-fade-in');
						scrollFadeInObserver.unobserve(entry.target);
					}
				});
			},
			scrollFadeInOptions
		);

		sections.forEach(section => {
			scrollFadeInObserver.observe(section);
		});
	}, []);

	return (
		<div>
			<Header />
			<main>
				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>
		</div>
	);
};

export default App;
