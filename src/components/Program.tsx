import React from 'react';
import { Fade, Bounce, Zoom} from "react-awesome-reveal";

const modules = [
  {
    title: 'Module 1: Intro to VC',
    subtopics: [
      'What is VC',
      'Story of VC industry',
      'Venture Deals',
    ],
  },
  {
    title: 'Module 2: Sourcing',
    subtopics: [
      'How to source correctly',
      'Where to find founders?',
      'Content as a sourcing engine',
      'Networking',
    ],
  },
  {
    title: 'Module 3: Selecting',
    subtopics: [
      'Assesing Founders',
      'Assesing Thesis',
      'Pattern Recognition',
    ],
  },
  {
    title: 'Module 4: Servicing',
    subtopics: [
      'The concept of Venture Assistant',
      'Helping with Fundraising, Hiring, Operations, Boards, etc.',
    ],
  },
];

export default function Modules() {
    return (
        <section id='program' className='py-24' >
          <Fade cascade duration={1000} triggerOnce>
            <h2 className="text-5xl pb-5 font-extrabold text-center">Program <span className='text-gradient'>Modules</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6" data-aos="zoom-in-up">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className={`border-1 rounded-lg shadow-md p-4 bg-gray-100`}
                >
                  <h2 className="text-xl font-bold mb-2">{module.title}</h2>
                  <ul className="list-disc list-inside">
                    {module.subtopics.map((subtopic, subIndex) => (
                      <li key={subIndex}>{subtopic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Fade>
        </section>
      
 
    );
  }
