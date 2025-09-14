import { Dashboard } from "./Components/Dashboard.jsx"
import { Navbar } from "./Components/Navbar"

 

function App() {
  

  return <div className="px-50 top-0 h-full">
    <Navbar/>
    <div className="pt-10">
      <Dashboard/>
    </div>
    
     </div>
} 

export default App
