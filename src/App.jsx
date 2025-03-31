
import Empatpilar from './component/Empatpilar'
import Footer from './component/Footer'
import Header from './component/Header'
import Jumbotron from './component/Jumbotron'
import Navbar from './component/Navbar'
import Pilar from './component/Pilar'
import TentangKami from './component/Tentangkami'
import './styles.css'

function App() {


  return (
    <>
      <Header>
        <Navbar />
        <Jumbotron />
        <Empatpilar />
      </Header>
      <TentangKami />
      <Footer />
    </>
  )
}

export default App
