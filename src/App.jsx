
import './App.css'
import CardsComponent from './Components/CardsComponent'
import Carsouel from './Components/Carsouel'
import CreateUser from './Components/CreateUser'
import EditAddress from './Components/EditAddress'
import Home from './Components/Home'
import Login from './Components/Login'
import MyProfile from './Components/MyProfile'
import PersonalInfo from './Components/PersonalInfo'
import ResidenceAddress from './Components/ResidenceAddress'
import ResidenceInfo from './Components/ResidenceInfo'

function App() {


  return (
    <div className='m-1'>
      <PersonalInfo/>
      <ResidenceInfo/>
      <ResidenceAddress/>
      <Login/>
      <CardsComponent/>
      <CreateUser />
      <EditAddress/>
      <MyProfile/>
      {/* <Carsouel/> */}
      {/* <Home/> */}
    </div>
  )
}

export default App
