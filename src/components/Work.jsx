import React from 'react';

const Work = () => {
    const projects = [
        { id: 1, title: 'Project 1', description: 'Description of Project 1' },
        { id: 2, title: 'Project 2', description: 'Description of Project 2' },
        { id: 3, title: 'Project 3', description: 'Description of Project 3' },
        // Add more projects as needed
      ];

    return (
        <div id="work-section" className="h-screen w-screen text-gray-100 px-12 py-8 bg-gray-800">
            <h2 className="text-2xl font-semibold mb-4">My Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project) => (
                <div key={project.id} className="bg-gray-900 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-200">{project.description}</p>
                </div>
                ))}
            </div>
        </div>
    )
};

export default Work;
