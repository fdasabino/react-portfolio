import { useState } from 'react'
import './works.scss'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: '1',
      title: 'Web Design',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      img:
        'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930',
    },
    {
      id: '2',
      title: 'Mobile Application',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img:
        'https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg',
    },
    {
      id: '3',
      title: 'Branding',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img:
        'https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg',
    },
  ]

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }

  return (
    <div className="works" id="works">
      <h1>Recent Work</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <DeveloperModeIcon />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>
                    <a
                      href="https://github.com/fdasabino"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon />
                      <small>Find out more</small>
                    </a>
                  </span>
                </div>
              </div>
              <div className="right">
                <img src="https://picsum.photos/536/354" alt="placeholder" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowBackIosOutlinedIcon
        className="arrow left"
        onClick={() => handleClick('left')}
      />
      <ArrowForwardIosOutlinedIcon
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  )
}
