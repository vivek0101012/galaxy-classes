
import Afterfooter from "./after"
import Batches from "./components/batches"
import Classes from "./components/classes"
import Contactus from "./components/contactus"
import Facts from "./components/facts"
import Features from "./components/features"
import { Header } from "./components/header"
import { Hero } from "./components/hero"
import Links from "./components/importantlinks"
import Notes from "./components/Notes"
import Olympiad from "./components/olympiads"



function App(){

  return <div className=" font-lemonMilk bg-[#020817] w-full min-h-screen">

<Header></Header>
<Hero></Hero>
<Facts></Facts> 
<Classes></Classes>

<Features></Features>
<Batches></Batches>
<Notes></Notes>
<Links></Links>
<Olympiad></Olympiad>
<Contactus></Contactus>
<Afterfooter></Afterfooter>
  </div>

}

export default App