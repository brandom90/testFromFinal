import React, {useState} from 'react'
import { Box, Typography,Button, TextField } from '@mui/material'
import Checklist from './components/Checklist'
import { EmailSubmit, Navigate } from '../../components';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const FootAndAnkle = ({setData, forwardLink, backwardLink}) => {
  const navigate = useNavigate()
  
  // states to store textfield data
  const [checkData, setCheckData] = useState([]);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birth, setBirth] = useState('')
  const [assesment, setAssesment] = useState('')
  const [needSupport, setNeedSupport] = useState('')
  const [stair, setStair] = useState('')
  const [shoes, setShoes] = useState('')
  const [deformity, setDeformity] = useState('')
  const [appearance, setAppearance] = useState('')
  const [actLimit, setActlimit] = useState('')
  const [noLimit, setNoLimit] = useState('')
  const [partakeAct, setPartakeAct] = useState('')
  const [noPartake, setNoPartake] = useState('')
  const [affectLife, setAffectLife] = useState('')
  const [noAffectLife, setNoAffectLife] = useState('')
  const [resultTreat, setResultTreat] = useState('')
  const [yesSocialAct, setYesSocialAct] = useState('')
  const [noSocialAct, setNoSocialAct] = useState('')
  const [futurePlan, setFuturePlan] = useState('')
  
  const [footPain, setFootPain] = useState('')
  const [walkSupport,setWalkSupport ] = useState('')
  const [comfortablyWalk, setComfortablyWalk] = useState('')
  const [climbStairs, setClimbStairs] = useState('')
  const [difficultyShoes, setDifficultyShoes] = useState('')
  const [deformityFoot, setDeformityFoot] = useState('')
  const [limitDaily, setLimitDaily] = useState('')
  const [partakeInAct, setPartakeInAct] = useState('')
  const [affectQoL, setAffectQoL] = useState('')
  const [limitSocialAct, setLimitSocialAct] = useState('')
  const [satisficationCurrent, setSatisficationCurrent] = useState('')
  const [satisficationPrevious, setsatisficationPrevious] = useState('')


// puts all of the states into 1 array
  const setStateList = [setFuturePlan,setNoSocialAct,setYesSocialAct,setResultTreat,setNoAffectLife,setAffectLife,setNoPartake, setPartakeAct, setNoLimit,setActlimit,setAppearance,setDeformity,setShoes,setStair,setNeedSupport,setAssesment,setBirth,setLastName,setFirstName]

 
// all of the states having a name assigned to it
var data = [
  {Status:firstName, Name:'First Name'},
  {Status:lastName, Name:'Last Name'},
  {Status:birth, Name:'Birth Date'},
  {Status:assesment, Name:'Date of Assesment'},
  {Status:footPain, Name:'I would rate the pain in my foot/ankle average past few weeks as'},
  {Status:walkSupport, Name:'(Button) Am I able to walk with, or without support?'},
  {Status:needSupport, Name:'No, I do need support to walk because '},
  {Status:comfortablyWalk, Name:'How far can I comfortably walk'},
  {Status:climbStairs, Name:'(Button) Am I able to climb stairs without or with handrail?'},
  {Status:stair, Name:'No, I do need a handrail as support to climb stairs because '},
  {Status:difficultyShoes, Name:'(Button) Do I Have Difficulty Putting on Shoes?'},
  {Status:shoes, Name:'Yes, I do have difficulty putting on/taking off my shoes because '},
  {Status:deformityFoot, Name:'(Button) Do I have any Deformity in my foot/ankle?'},
  {Status:deformity, Name:'Yes, I do have some deformity in my foot/ankle because '},
  {Status:appearance, Name:'I would describe the overall appreance of my foot/ankle as '},
  {Status:limitDaily, Name:'(Button) Does my Foot/ankle limit my daily activities?'},
  {Status:actLimit, Name:'Yes, I do have limits in my daily activities due to my foot/ankle because '},
  {Status:noLimit, Name:'No, I do not have limits in my daily activities due to my foot/ankle because '},
  {Status:partakeInAct, Name:'(Button) Can I partake in recreational activities?'},
  {Status:partakeAct, Name:'Yes, I can participate in recreational activities/sports because '},
  {Status:noPartake, Name:'No, I can not participate in recreational activities/sports because'},
  {Status:affectQoL, Name:'(Button) Does my Foot/ankle affect my quality of life?'},
  {Status:affectLife, Name:'Yes, my foot/ankle condition has affected my quality of life because '},
  {Status:noAffectLife, Name:'No, my foot/ankle condition has not affected my quality of life because '},
  {Status:resultTreat, Name:'As a result from my treatment I would like to be able to do '},
  {Status:limitSocialAct, Name:'(Button) do I have limitations in social activites due to my condition?'},
  {Status:yesSocialAct, Name:'Yes, I exerpiance limitations in social activities/work due to my condition because '},
  {Status:noSocialAct, Name:'No, I exerpiance no limitations in social activities/work due to my condition because'},
  {Status:futurePlan, Name:'As a result from my treatment I would like to be able to do '},
  {Status:satisficationCurrent, Name:'My satisfication with the current state of my foot/ankle is'},
  {Status:satisficationPrevious, Name:'My satisfication with the previous care foot/ankle I recived is'},

]
// states for textfield visibility
  const [needSupportCheck, setneedSupportCheck] = useState('false')
  const [stairCheck, setStairCheck] = useState('false')
  const [shoesCheck, setShoesCheck] = useState('false')
  const [deformityCheck, setDeformityCheck] = useState('false')
  const [actLimitCheck, setActLimitCheck] = useState('false')
  const [partakeActCheck, setPartakeActCheck] = useState('false')
  const [affectLifeCheck, setAffectLifeCheck] = useState('false')
  const [socialActCheck, setSocialActCheck] = useState('false')



  //pushes data to CheckData but for textfields and yes or no questions
  const handleSubmit = (e) => {
    e.preventDefault()
   // organizies its data
    data.map((item) => {
      const newItem = {
        id: item.Name,
        value: item.Status
      }
      checkData.push(newItem)
    })
    
    setData(checkData);
    navigate('/footAndAnkleSubmitted')
   
  };




  
  return ( 
    <Box>
     <Typography variant="h3" align="center">
        AOFAS Questionaire (Foot and Ankle)
      </Typography>
      <Box>
      <Typography fontWeight='bold' sx={{marginTop:'10px'}}>Patient Information</Typography>
        <Box sx={{marginLeft:'20px'}}>
            <Typography>First Name: </Typography>
            <TextField id="First Name" label="Answer here" variant="filled" onChange={(e) => {setStateList[18](e.target.value)}}/>   
            <Typography>Last Name: </Typography>
            <TextField id="Last Name" label="Answer here" variant="filled" onChange={(e) => {setStateList[17](e.target.value)}}/>
            <Typography>Date of Birth: </Typography>
            <TextField id="Date of Birth" label="Answer here" variant="filled" onChange={(e) => {setStateList[16](e.target.value)}}/>
            <Typography>Date of Assesment</Typography>
            <TextField id="Date of Assesment" label="Answer here" variant="filled" onChange={(e) => {setStateList[15](e.target.value)}}/>
        </Box>
      <Typography fontWeight='bold' sx={{marginTop:'10px'}}>Pain Assesment</Typography>
      <Box sx={{marginLeft:'20px'}}>
        <Typography>How would you rate your pain in the foot/ankle on average over the past week?</Typography>
        <Checklist setListData={setFootPain} id={'I would rate the pain in my foot/ankle average past few weeks as '}items={['No pain', 'Mild pain', 'Moderate pain', 'Severe pain']} />
      </Box>
      <Typography fontWeight='bold' sx={{marginTop:'10px'}}>Function</Typography>
        <Box sx={{marginLeft:'20px'}}>
          <Typography>Are you able to walk without any support (Like a cane or brace)? </Typography>

          <Checklist setListData={setWalkSupport} id='(Button) Am I able to walk with, or without support? ' items={['Yes', 'No']} yesOrNo={setneedSupportCheck} />
          

          <Typography> 
            {needSupportCheck === 'No' && <TextField id="No, I cant Walk without support" label="If No, please describe" variant="filled" onChange={(e) => {setStateList[14](e.target.value)}}/>}
          </Typography>
          <Typography sx={{marginTop:'10px'}}>How far can you comfortably walk?</Typography>
            <Checklist setListData={setComfortablyWalk} id='How far can I comfortably walk'items={['Less than 1 block', '1-5 blocks', 'More than 5 blocks']} />
          <Typography>Can you climb stairs without using a handrail for support? </Typography>
          
          <Checklist setListData={setClimbStairs} id='(Button) Am I able to climb stairs without or with handrail? 'items={['Yes', 'No']} yesOrNo={setStairCheck} />
          <Typography> 
          {stairCheck === 'No' &&<TextField id="No to Climb stairs without handrail" label="If No, please describe" variant="filled" onChange={(e) => {setStateList[13](e.target.value)}}/>}
          </Typography>
          <Typography sx={{marginTop:"30px"}}>Do you have difficulty putting on or taking off your shoes? </Typography>
          
          <Checklist setListData={setDifficultyShoes} id='(Button) Do I Have Difficulty Putting on Shoes? 'items={['Yes', 'No']} yesOrNo={setShoesCheck} />
          <Typography> 
          {shoesCheck === 'Yes' &&<TextField id="Yes to Difficulty Putting on Shoes" label="If Yes, please describe" variant="filled" onChange={(e) => {setStateList[12](e.target.value)}}/>}
          </Typography>
        </Box>
      <Typography fontWeight='bold' sx={{marginTop:'10px'}}>Alignment</Typography>
        <Box sx={{marginLeft:'10px'}}>
          <Typography sx={{marginTop:"30px"}}>Do you notice any deformity in your foot or ankle? (e.g. bending, twisting) </Typography>
          <Checklist setListData={setDeformityFoot} id='(Button) Do I have any Deformity in my foot/ankle?'items={['Yes', 'No']} yesOrNo={setDeformityCheck} />
          <Typography> 
          {deformityCheck === 'Yes' &&<TextField id="Yes to Deformity in foot/ankle" label="If Yes, please describe" variant="filled" onChange={(e) => {setStateList[11](e.target.value)}}/>}
          </Typography>
          <Typography sx={{marginTop:'50px'}}> 
            How would you describe the overall appreance of your foot/ankle?
          </Typography>
          <TextField id="Appearance of foot/ankle" label="Answer here" variant="filled" onChange={(e) => {setStateList[10](e.target.value)}}/>
        </Box>
      <Typography fontWeight='bold' sx={{marginTop:'10px'}}>Activity Limitation</Typography>
        <Box sx={{marginLeft:'10px'}}>
          <Typography sx={{marginTop:"30px"}}>Are you limited in your regular daily activities due to your foot/ankle condition? </Typography>
          <Checklist setListData={setLimitDaily} id='(Button) Does my Foot/ankle limit my daily activities? 'items={['Yes', 'No']} yesOrNo={setActLimitCheck} />
          <Typography> 
          {actLimitCheck === 'Yes' &&<TextField id="Foot/ankle does limit activities" label="If yes, please describe" variant="filled" onChange={(e) => {setStateList[9](e.target.value)}}/>}
          {actLimitCheck === 'No' &&<TextField id="Foot/ankle doesn't limit activities" label="If no, why not?" variant="filled" onChange={(e) => {setStateList[8](e.target.value)}}/>}
          </Typography>
          <Typography sx={{marginTop:"30px"}}>Are you able to participate in recreational activites or sports? </Typography>
      
          <Checklist setListData={setPartakeInAct} id='(Button) Can I partake in recreational activities? 'items={['Yes', 'No']} yesOrNo={setPartakeActCheck} />
          <Typography> 
          {partakeActCheck === 'Yes' &&<TextField id="Can partake in activities" label="If yes, please describe" variant="filled" onChange={(e) => {setStateList[7](e.target.value)}}/>}
          {partakeActCheck === 'No' &&<TextField id="Can not partake in activities" label="If no, why not?" variant="filled" onChange={(e) => {setStateList[6](e.target.value)}}/>}
          </Typography>
        </Box>
      <Typography fontWeight='bold' sx={{marginTop:'10px'}}>Quality of Life</Typography>
        <Box sx={{marginLeft:'10px'}}>
          <Typography sx={{marginTop:"30px"}}>How much has your foot/ankle condition affected your quality of life? </Typography>
        
          <Checklist setListData={setAffectQoL} id='(Button) Does my Foot/ankle affect my quality of life? 'items={['Yes', 'No']} yesOrNo={setAffectLifeCheck} />
          <Typography> 
          {affectLifeCheck === 'Yes' &&<TextField id="Foot/ankle affects life" label="If yes, please describe" variant="filled" onChange={(e) => {setStateList[5](e.target.value)}}/>}
          {affectLifeCheck === 'No' &&<TextField id="Foot/ankle does not affect life" label="If no, why not?" variant="filled" onChange={(e) => {setStateList[4](e.target.value)}}/>}
          </Typography>
          <Typography sx={{marginTop:'50px'}}> 
          What would you like to be able to do as a result of treatment?
          </Typography>
          <TextField id="result of treatment" label="Answer here" variant="filled" onChange={(e) => {setStateList[3](e.target.value)}}/>

          <Typography sx={{marginTop:"30px"}}>Did you experiance any limitations in social activities or work due to your condition?</Typography>
          <Checklist setListData={setLimitSocialAct} id='(Button) do I have limitations in social activites due to my condition? 'items={['Yes', 'No']} yesOrNo={setSocialActCheck}/>
          <Typography> 
          {socialActCheck === 'Yes' &&<TextField id="Yes to limitations in social activites" label="If yes, please describe" variant="filled" onChange={(e) => {setStateList[2](e.target.value)}}/>}
          {socialActCheck === 'No' &&<TextField id="No to limitations in social activites" label="If no, why not?" variant="filled" onChange={(e) => {setStateList[1](e.target.value)}}/>}
          </Typography>
          <Typography sx={{marginTop:'50px'}}> 
          What would you like to be able to do as a result of treatment?
          </Typography>
          <TextField id="plans for future after treatment" label="Answer here" variant="filled" onChange={(e) => {setStateList[0](e.target.value)}}/>
        <Typography fontWeight='bold' sx={{marginTop:'10px'}}>Patient Satisfaction</Typography>
          <Box sx={{marginLeft:'10px'}}>
            <Typography>How satisfied are you with the current state of your foot/ankle?</Typography>
            <Checklist setListData={setSatisficationCurrent} id={'My satisfication with the current state of my foot/ankle is ' }items={['Very satisfied', 'Somewhat satisfied', 'Neutral', 'Somewhat dissatisfied', 'Very dissatisfied']} />
            <Typography>How satisfied with the previous care you have recieved for your foot/ankle?</Typography>
            <Checklist setListData={setsatisficationPrevious} id={'My satisfication with the previous care foot/ankle I recived is '}items={['Very satisfied', 'Somewhat satisfied', 'Neutral', 'Somewhat dissatisfied', 'Very dissatisfied']} />
          </Box>
        </Box>
      </Box>
      <Button onClick={handleSubmit}>Submit Form</Button>
      <Box>
        <Button sx={{  position:'fixed', left:0, bottom:0, color:'black'}} onClick={() => {navigate(backwardLink)}}>
          <ArrowBackIcon  sx={{fontSize: 80,}}/>
        </Button>
        <Button sx={{ position:'fixed', right:0, bottom:0, color:'black'}} onClick={handleSubmit}>
          <ArrowForwardIcon sx={{ fontSize: 80}}/>
        </Button>
      
      </Box>
    </Box>
  )
}

export default FootAndAnkle
