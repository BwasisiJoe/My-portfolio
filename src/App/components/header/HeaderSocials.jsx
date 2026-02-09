import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsStackOverflow} from 'react-icons/bs'



function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/"><BsLinkedin/></a>
        <a href="https://www.github.com/"><FaGithub/></a>
        <a href="https://www.stackoverflow.com/"><BsStackOverflow/></a>
    </div>
  )
}

export default HeaderSocials