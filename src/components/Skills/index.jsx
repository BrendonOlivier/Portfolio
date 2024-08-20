import { useLanguage } from '../../hooks/LanguageContext.jsx';
import { Fade } from 'react-reveal';

import { motion } from 'framer-motion';
import { Container, Info, Habil, HardSkills } from './styles'
import Html from '../../assets/HTML.png'
import Css from '../../assets/CSS.png'
import JavaScript from '../../assets/JavaScript.png'
import React from '../../assets/React.png'
import ReacNative from '../../assets/ReactNative.png'

import Docker from '../../assets/Docker.png'
import Node from '../../assets/Node.png'
import MongoDB from '../../assets/MongoDB.png'
import Prisma from '../../assets/Prisma.png'
import Sequelize from '../../assets/Seq.png'
import Typescript from '../../assets/Ts.png'
import Styled from '../../assets/StyledC.png'
import Tailwind from '../../assets/Tailwind.png'

const skills = [
    Html,
    Css,
    JavaScript,
    React,
    ReacNative,
    Docker,
    Node,
    MongoDB,
    Prisma,
    Sequelize,
    Typescript,
    Styled,
    Tailwind
];

const skillTitles = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'R. Native',
    'Docker',
    'Node.js',
    'MongoDB',
    'Prisma',
    'Sequelize',
    'Typescript',
    'Styled-c',
    'Tailwind',
];

export function Skills() {
    const { language } = useLanguage(); // Obetendo as linguagens

    // Texto em português e inglês  
    const texts = {
        'pt-BR': {
            title: "Habilidades",
            introduction: "Conhecimentos Técnicos"
        },
        'en-US': {
            title: "Skills",
            introduction: "Technical Knowledge"
        }
    };

    const motionVariants = {
        animate: {
            x: ['100%', '-100%'],
            transition: {
                duration: 10,
                ease: 'linear',
                repeat: Infinity,
            },
        },
    }

    return (
        <Container id='tecnologias'>
            <Fade>
                <Info>
                    <h4>{texts[language].title}</h4>
                    <p>{texts[language].introduction}</p>
                </Info>

                <Habil>
                    <HardSkills>
                        <motion.div
                            variants={motionVariants}
                            initial="initial"
                            animate="animate"
                            className='carrossel'
                        >{skills.map((skill, index) => (
                            <div key={index} style={{ textAlign: 'center', margin: '0 10px' }}>
                                <img src={skill} alt={skillTitles[index]} />
                                <p>{skillTitles[index]}</p>
                            </div>
                        ))}
                        </motion.div>
                    </HardSkills>
                </Habil>
            </Fade>
        </Container>
    )
}