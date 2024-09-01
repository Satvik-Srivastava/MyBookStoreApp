import './App.css'
import Signup from './components/Signup'
import Courses from './Courses/Courses'
import Home from './Home/Home'
import {Route,Routes} from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element ={<Home/>} ></Route>
        <Route path="/course" element ={<Courses/>} ></Route>
        <Route path="/signup" element ={<Signup/>} ></Route>
      </Routes>
    </>
  )
}

export default App
