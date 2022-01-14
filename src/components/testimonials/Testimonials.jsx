import React from 'react'
import './testimonials.scss'
import TurnRightIcon from '@mui/icons-material/TurnRight'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: 'Linda Molin',
      title: 'Media Manager',
      company: 'Arla Foods',
      img:
        'https://media-exp1.licdn.com/dms/image/C5603AQFnQfIIFAT9Cw/profile-displayphoto-shrink_800_800/0/1551738096889?e=1647475200&v=beta&t=tF5fN9C_5rav5wg7bKt6HmeGxLQS--0pWBUreV4_k8U',
      link: 'https://www.linkedin.com/in/lindamolin/',
      desc:
        'I know Francisco Sabino personally since a few years back. Francisco is hard working, great at project management and has the ability of planning ahead. He is reliable, service minded, sociable, positive and always takes on a challenge with a smile on his face. I’ve been impressed with the dedication and drive Francisco has shown in regards to his career change. Francisco has always had a natural interest for IT and tech, and based on his talents I believe he will have a bright future as a Full stack developer. I can give Francisco Sabino my warmest recommendations.',
    },
    {
      id: 2,
      name: 'Jessica Norgren',
      title: 'General Manager',
      company: 'Haymarket by Scandic',
      img:
        'https://media-exp1.licdn.com/dms/image/C4E03AQHtnF2Y36-w9g/profile-displayphoto-shrink_800_800/0/1630937718244?e=1647475200&v=beta&t=w2yRB6u0iP-Ak4IC7tdxK37hq4M6WaE0Bcu12Vzbrdc',
      link:
        'https://www.linkedin.com/in/jessica-norgren%E2%99%A6%EF%B8%8F-8750a013/',
      desc:
        '"Since 2018, I have the pleasure of having Mr Francisco Sabino in my hotel team, Haymarket, Stockholm. He holds the position of professional bartender at the cocktail bar Americain. Mr Sabino is a very appreciated colleague and he is considered one of our top employees. He is known for providing our guests with professional and caring five star service, and he shares positive energy with the team mates and the guests at the bar. He is punctual and his appearance is always professional, neat and tidy. I have followed Francisco"s studying with interest and I feel proud of how he takes on his life as a dedicated student, while still holding a job at the hotel. With his disciplined hard work and commitment, I am sure Mr Sabino will be appreciated also in his new career as a Fullstack Web Developer."',
    },
  ]

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className="card">
            <div className="top">
              <TurnRightIcon className="icon-left" />
              <img className="user" src={d.img} alt="person-img" />
              <a href={d.link} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="icon-right" />
              </a>
            </div>
            <div className="center">
              <p className="testimony">{d.desc}</p>
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
              <h4>{d.company}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
