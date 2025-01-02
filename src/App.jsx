import Afterfooter from "./after"
import Classes from "./components/classes"
import Features from "./components/features"
import { Header } from "./components/header"
import { Hero } from "./components/hero"



function App(){

  return <div className=" font-lemonMilk w-full min-h-screen">

<Header></Header>
<Hero></Hero>
<Classes></Classes>

<Features></Features>


<Afterfooter></Afterfooter>
  </div>

}

export default App