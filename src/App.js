import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./index.css"
//components
import {StartPage} from './components'
//pages
import { Home, Done } from './pages'
import { PatientOne, PatientTwo, PatientThree, PatientFour, PatientFive, PatientSix, Submitted } from './pages/signIn/index'
import {NewPatientSubmitted,Medicals, PastMedical, IfItApplies, SurgeryHistory, OrgansPastSurgery, Other} from './pages/newPatient/index'
import HippaOne from './pages/hippa/HippaOne'
import {HoosSubmitted, HoosOne, HoosTwo, HoosThree, HoosFour, HoosFive} from './pages/hoos'
import {KoosSubmitted, KoosOne, KoosTwo, KoosThree, KoosFour, KoosFive} from './pages/koos'
import FootAndAnkle from './pages/footAndAnkle/FootAndAnkle'
import FootAndAnkleSubmitted from './pages/footAndAnkle/FootAndAnkleSubmitted'
//variables
import hoosVariables from './pages/hoos/hoosVariables'
import koosVariables from './pages/koos/koosVariables'

function App() {
  //Holds the data gotten from the foot and ankle form
  const [footAndAnkleData, setFootAndAnkleData] = useState(NaN)

  //list of all the forms that will show up on the portal. 
  const forms = [{ name:'New Patient', description:'Fill out this form if you have never been a patient here before.', link:'/newPatient',nextLink:'/newPatientOne'}, { name:'Sign In ', description:'Sign in at the beginning of your visit', link:'/signInForm',nextLink:'/signInOne'}, {name:'KOOS', description:'KOOS description', link:'/koosStart'}, {name:'HOOS', description:'HOOS description', link:'/hoosStart'},{name:'HIPPA', description:'HIPPA description', link:'/hippaStart'}, {name:'Foot and Ankle', description:'Foot and Ankle', link:'/footAndAnkleStart'}]
  


  return (
    <BrowserRouter>
      <Routes>
        {/* Portal */}
        <Route path='/' element={<Home forms={forms}/>}/>
        <Route path='/done' element={<Done/>}/>
        
        {/* Sign In */}
        <Route path='/signInForm' element={<StartPage title='Sign In' link='/signInOne' />}/>
        <Route path="/signInOne" element={<PatientOne />}/> 
        <Route path="/signInTwo" element={<PatientTwo />} />
        <Route path="/signInThree" element={<PatientThree />} />
        <Route path="/signInFour" element={<PatientFour />} />
        <Route path="/signInFive" element={<PatientFive />} />
        <Route path="/signInSix" element={<PatientSix />} />
        <Route path="/signInSubmitted" element={<Submitted />}/>

        {/* New Patient */}
        <Route path='/newPatient' element={<StartPage title='New Patient' link='/newPatientOne' />}/>
        <Route path='/newPatientOne' element={<Medicals />}/>
        <Route path='/newPatientTwo' element={<PastMedical/>}/>
        <Route path='/newPatientThree' element={<IfItApplies/>}/>
        <Route path='/newPatientFour' element={<SurgeryHistory/>}/>
        <Route path="/newPatientFive" element={<OrgansPastSurgery/>}/>
        <Route path='/newPatientSix' element={<Other/>} />
        <Route path='/newPatientSubmitted' element={<NewPatientSubmitted/>}/>

        {/* HIPPA */}
        <Route path='/hippaStart' element={<StartPage title='HIPPA' link='/hippaOne' />}/>
        <Route path='/hippaOne' element={<HippaOne/>}/>

        {/* KOOS */}
        <Route path='/koosStart' element={<StartPage title='KOOS' link='/koosOne' />}/>
        <Route path='/koosOne' element={<KoosOne nameList={koosVariables[5]} list={koosVariables[0]} forwardLink={'/koosTwo'} backwardLink={'/koosStart'}/>}/>
        <Route path='/koosTwo' element={<KoosTwo list={koosVariables[1]} forwardLink={'/koosThree'} backwardLink={'/koosOne'}/>}/>
        <Route path='/koosThree' element={<KoosThree list={koosVariables[2]} forwardLink={'/koosFour'} backwardLink={'/koosTwo'}/>}/>
        <Route path='/koosFour' element={<KoosFour list={koosVariables[3]} forwardLink={'/koosFive'} backwardLink={'/koosThree'}/>}/>
        <Route path='/koosFive' element={<KoosFive list={koosVariables[4]} forwardLink={'/koosEnd'} backwardLink={'/koosFour'}/>}/>
        <Route path='/koosEnd' element={<KoosSubmitted backLink={'/koosFive'}/>}/>

        {/* HOOS */}
        <Route path='/hoosStart' element={<StartPage title='HOOS' link='/hoosOne' />}/>
        <Route path='/hoosOne' element={<HoosOne nameList={hoosVariables[5]} list={hoosVariables[0]} forwardLink={'/hoosTwo'} backwardLink={'/hoosStart'}/>}/>
        <Route path='/hoosTwo' element={<HoosTwo list={hoosVariables[1]} forwardLink={'/hoosThree'} backwardLink={'/hoosOne'}/>}/>
        <Route path='/hoosThree' element={<HoosThree list={hoosVariables[2]} forwardLink={'/hoosFour'} backwardLink={'/hoosTwo'}/>}/>
        <Route path='/hoosFour' element={<HoosFour list={hoosVariables[3]} forwardLink={'/hoosFive'} backwardLink={'/hoosThree'}/>}/>
        <Route path='/hoosFive' element={<HoosFive list={hoosVariables[4]} forwardLink={'/hoosEnd'} backwardLink={'/hoosFour'}/>}/>
        <Route path='/hoosEnd' element={<HoosSubmitted backLink={'/hoosFive'} />}/>
        
        {/* Foot and Ankle */}
        <Route path='/footAndAnkleStart' element={<StartPage title='Foot and Ankle' link='/footAndAnkleOne' />}/>
        <Route path='/footAndAnkleOne' element={<FootAndAnkle setData={setFootAndAnkleData} backwardLink={'/footAndAnkleStart'} forwardLink={'/footAndAnkleSubmitted'}/>}/>
        <Route path='/footAndAnkleSubmitted' element={<FootAndAnkleSubmitted data={footAndAnkleData} backwardLink={'/footAndAnkleOne'}/>}/>



      </Routes>
    </BrowserRouter>
  );
}

export default App;
