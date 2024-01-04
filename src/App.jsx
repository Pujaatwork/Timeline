import Heading from "./Heading"
import Time from "./Timeline"
import './App.css'

const App = () => {
 
  return (
    <div>
     <Heading/>
      <Time year= {2006} event="I was born" />
      <Time year= {2010} event="I started going to school." />
      <Time year= {2017} event="When i was in 7th class,I fell in a running competition in school since then i stoped running because i got a head injury." />
      <Time year= {2019} event="I playing with my friends a stick got stick in my eye and i felt little pain, but i did not tell my family, and my vision gradually stopped then i told my family and i got treatmant continued for about 6 months and my eye become fine." />
      <Time year= {2021} event="Lockdown was imposed when i was in 11th class so i did not study, and that year almost all the student passed." />
      <Time year= {2022} event="I was in 12th class even then i could not study properly." />
      <Time year= {2023} event=" I went to Himachal Pradesh to study " />
    </div>

  )
}

export default App
