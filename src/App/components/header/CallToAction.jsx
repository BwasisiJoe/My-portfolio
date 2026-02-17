import CV from '../../resources/resume.pdf'

function CallToAction() {
  const handleReachOut = (e) => {
    e.preventDefault()
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <div className='CTA'>
        <a href= {CV} className='btn btn-animated-left'>Resume</a>
        <a href='/' onClick={handleReachOut} className='btn-reach-out btn-animated-right'>Reach out</a>
    </div> 
  )
}

export default CallToAction 