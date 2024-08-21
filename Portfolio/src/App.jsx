

import Header from './component/1-Header/header'
import Hero from './component/2-Hero/hero'
import Main from './component/3-Main/Main'
import Contact from './component/4-Contact/Contact'
import Footer from './component/5-Footer/Footer'
function App() {


  return (
 <div className='container'>

  <Header/>
  
  <Hero/>
  <div className='divider'/>
  <Main/>
  <div className='divider'/>
  <Contact/>
  <div className='divider'/>
  <Footer/>

 </div>
     
  
  )
}

export default App
