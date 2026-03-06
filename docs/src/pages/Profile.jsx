import Header from '../components/Header'
import Experience from '../components/Experience'
import Carousel from '../components/Carousel'
import Skills from '../components/Skills'
import TechStack from '../components/TechStack'
import Stats from '../components/Stats'
import Footer from '../components/Footer'

const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Header />
      <Experience />
      <Carousel />
      <Skills />
      <TechStack />
      <Stats />
      <Footer />
    </div>
  )
}

export default Profile
