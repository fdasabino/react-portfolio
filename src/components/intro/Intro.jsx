import React, { useEffect, useRef } from 'react'
import './intro.scss'
import Introimg from '../../assets/intro.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { init } from 'ityped'

export default function Intro() {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 2000,
      typeSpeed: 100,
      startDelay: 500,
      strings: ['Fullstack Web Developer', 'Content Creator', 'UI/UX Designer'],
    })
  }, [])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={Introimg} alt="code" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I'm</h2>
          <h1>Francisco Sabino</h1>
          <h3>
            <ChevronRightIcon className="icon" /> <span ref={textRef} />
          </h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDownIcon className="img" />
        </a>
      </div>
    </div>
  )
}
