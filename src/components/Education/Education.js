import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import progImg from '../../assets/svg/education/progImg.svg'
// import eduImg from '../../assets/svg/education/eduImg.svg'
import eduImg from '../../assets/png/eduImg.png'

import './Education.css'
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData'
import { IoMagnet } from 'react-icons/io5';

function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="education" style={{backgroundColor: theme.secondary}}>
           
            <div className="education-body">
                <div className="education-description">
                <h1 style={{color:theme.primary}}>Education</h1>
                    {educationData.map(edu => (
                        <EducationCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </div>
                <div className="education-image">
                    <img src={progImg} alt='' />
                    <img src={eduImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Education
