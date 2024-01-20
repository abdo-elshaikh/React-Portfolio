import React from 'react'
import './content.css'
import { useState, useEffect } from 'react'
import { projects } from '../myProjects';
import { motion, AnimatePresence } from 'framer-motion'

export default function Content() {
  const [projectsList, setProjects] = useState(projects);

  const handleClick = (e) => {
    const btns = document.querySelectorAll('.category-btn')
    btns.forEach((btn) => {
      btn.classList.remove('active')
    })
    e.target.classList.add('active')
    setProjects(projectsSelector(e.target.id))
  }

  function projectsSelector(projectName) {
    if (projectName === 'All') {
      return projects;
    } else {
      return projects.filter(project => project.category === projectName);
    }
  }

  return (
    <div className="content">
      <h1 className='title'>All Projects</h1>
      <div className="projects-categories">
        <button id='All' className='category-btn active' onClick={handleClick}>All</button>
        <button id='React' className='category-btn' onClick={handleClick}>React Js</button>
        <button id='Node' className='category-btn' onClick={handleClick} >Node Js</button>
        <button id='Python' className='category-btn' onClick={handleClick}>Python</button>
        <button id='Java' className='category-btn' onClick={handleClick}>Java Script</button>
        <button id='Flutter' className='category-btn' onClick={handleClick}>Flutter</button>
        <button id='HTML&CSS' className='category-btn' onClick={handleClick}>HTML&CSS</button>
        <button id='Other' className='category-btn' onClick={handleClick}>Other Projects</button>
      </div>
      <div className="project-details">
        <AnimatePresence>
          {
            projectsList.map((project) => {
              return (
                <motion.div className="project"
                  key={project.id}
                  whileHover={{ transform: 'scale(1.1)' }}
                  whileTap={{ transform: 'scale(0.9)' }}
                  layout
                  initial={{ transform: 'scale(0)' }}
                  animate={{ transform: 'scale(1)' }}
                  exit={{ transform: 'scale(0)' }}
                  transition={{ type: 'spring', damping: 7, stiffness: 30 }}

                >
                  <img className='project-img' src={project.imgUrl} alt="" />
                  <h2 className="project-title">{project.name}</h2>
                  <p className="project-category"> Category: {project.category}</p>
                  <p className="project-description">{project.description}</p>
                  <button className="project-btn">View Details</button>
                </motion.div>
              )
            })
          }
        </AnimatePresence>
        {
          projectsList.length === 0 ? <p>No Projects Found !</p> : null
        }

      </div>
    </div>
  )
}
