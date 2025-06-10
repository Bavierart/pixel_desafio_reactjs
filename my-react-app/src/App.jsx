import './App.css'
import Header from './components/Header.jsx'
import Opinions from './sections/Opinions.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import Bennefits from './sections/Bennefits.jsx'
import Call from './sections/Call.jsx'
import Products from './sections/Products.jsx'

function App() {

  return (
    <>
      <Header/>
      <div className="body-no-header">
        <Hero/>
        <Products/>
        <Bennefits/>
        <Opinions/>
        <Call/>
        <Footer/>
      </div>
    </>
  )
}

export default App
