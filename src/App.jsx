import Afterfooter from "./after"
import Classes from "./components/classes"
import Contactus from "./components/contactus"
import Features from "./components/features"
import { Header } from "./components/header"
import { Hero } from "./components/hero"



function App(){

  return <div className=" font-lemonMilk w-full min-h-screen">

<Header></Header>
<Hero></Hero>
<Classes></Classes>

<Features></Features>

<Contactus></Contactus>
<Afterfooter></Afterfooter>
  </div>

}

export default App