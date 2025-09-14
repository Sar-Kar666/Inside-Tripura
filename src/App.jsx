import { Dashboard } from "./Components/Dashboard.jsx"
import { HeroText } from "./Components/HeroText.jsx"
import { Navbar } from "./Components/Navbar"

 

function App() {
  

  return <div className="px-50 ">
    <Navbar/>
    <div className="pt-10">
      <Dashboard/>
    </div>
   
     </div>
}

export default App
