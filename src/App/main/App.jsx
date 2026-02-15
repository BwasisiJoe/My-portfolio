import Header from '../components/header/Header'
import Navigation from '../components/navigation/Navigation'
import About from '../components/about/About'
import Experience from '../components/experience/Experience'
import Expertise from '../components/expertise/Expertise'
import Testimonials from '../components/testimonials/Testimonials'
import Contact from '../components/contact/Contact'
import MouseGlow from '../components/mouse-glow/MouseGlow'


const App = () => {
  return (
    <>
      <div className="app-content">
        <Header />
        <Navigation/>
        <About/>
        <Experience/>
        <Expertise/>
        <Testimonials/>
        <Contact/>
      </div>
      <MouseGlow />
    </>
  );
}

export default App;
