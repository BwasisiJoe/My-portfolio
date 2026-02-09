import Header from '../components/header/Header'
import Navigation from '../components/navigation/Navigation'
import About from '../components/about/About'
import Experience from '../components/experience/Experience'
import Expertise from '../components/expertise/Expertise'
import Testimonials from '../components/testimonials/Testimonials'
import Contact from '../components/contact/Contact'


const App = () => {
  return (
    <>
      <Header />
      <Navigation/>
      <About/>
      <Experience/>
      <Expertise/>
      <Testimonials/>
      <Contact/>
    </>
  );
}

export default App;
