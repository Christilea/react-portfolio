import React from 'react'
import PortfolioItem from '../components/PortfolioItem'

export default function Portfolio() {
const projectARR = [
    
    {
        title:'PasswordGenerator', 
        github: 'https://github.com/Christilea/Random_Password_Generator', 
        deployed: 'https://christilea.github.io/Random_Password_Generator/',
        description: 'Generate a password'
    },
    {
        title:'Online-Offline Budget Tracker', 
        github: 'https://github.com/Christilea/Online_Offline-BudgetTracker', 
        deployed: 'https://aqueous-sierra-82642.herokuapp.com/',
        description: 'Track your budget. Online and Offline'
    },
    {
        title:'API_Weatherapp', 
        github: 'https://github.com/Christilea/API_Weatherapp', 
        deployed: 'https://christilea.github.io/API_Weatherapp/',
        description: 'See the weather for the next 5 days!'
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

