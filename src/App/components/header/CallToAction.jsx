import CV from '../../resources/resume.pdf'

function CallToAction() {
  return (
    <div className='CTA'>
        <a href= {CV} className='btn btn-animated-left'>Resume</a>
        <a href='#contact' className='btn-reach-out btn-animated-right'>Reach out</a>
    </div> 
  )
}

export default CallToAction 