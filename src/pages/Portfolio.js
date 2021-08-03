import React from 'react'
import PortfolioItem from '../components/PortfolioItem'

export default function Portfolio() {
const projectARR = [
    {
        title:'DonutApp', 
        github: 'https://github.com/erodriguez541/donutProject', 
        deployed: 'https://erodriguez541.github.io/donutProject/',
        description: 'Find a donut nearby'
    },
    {
        title:'PasswordGenerator', 
        github: 'https://github.com/Christilea/Random_Password_Generator', 
        deployed: 'https://christilea.github.io/Random_Password_Generator/',
        description: 'password generator'
    },
    {
        title:'PasswordGenerator', 
        github: 'https://github.com/Christilea/Random_Password_Generator', 
        deployed: 'https://christilea.github.io/Random_Password_Generator/',
        description: 'password generator'
    },
]
    return (
        <div>
            Portfolio
            
            {projectARR.map(item => {
                return (
                    <PortfolioItem project={item} />
                )

            })}
        </div>
    )
}
