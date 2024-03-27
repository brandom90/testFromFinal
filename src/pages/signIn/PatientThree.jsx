import React from 'react'
import { Link } from 'react-router-dom'
import {Box, Stack, TextField, Typography } from '@mui/material'
import ProgressBar from '../../components/ProgressBar'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import informationLists from './utils/variables'
import Navigate from '../../components/Navigate';

const variables = informationLists[2]

const PatientThree = () => {
  
  const textFieldStyles = {
    margin:{xs:'10%', lg:'0'},
    marginLeft:{xs:'33%', lg:'10%'}, 
    marginBottom:{xs:'20px', lg:'10%'},
    width:'300px'
  }


  return (
    <Stack sx={{backgroundImage: 'linear-gradient(to top, lightblue, white)'}}>
      <Box>
      <ProgressBar selected={3} amount={[1,2,3,4,5,6]}/>
        <Typography variant='h2' sx={{textAlign:'center'}}>Emergency Contact Information</Typography>
      </Box>

      <Box>
        <Box sx={{marginLeft:{lg:'15%'}}}>
        <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles}  id='emergency_contact' label='Emergency Contact' variant='standard' defaultValue={variables.emergency_contact} onChange = {(e) => variables.emergency_contact = `${e.target.value}`}/>

        <TextField  InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='relationship' label='Relationship' variant='standard' defaultValue={variables.relationship} onChange = {(e) => variables.relationship = `${e.target.value}`}/>

        <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='phone' label='Phone' variant='standard' defaultValue={variables.phone} onChange = {(e) => variables.phone = `${e.target.value}`}/>
        
        </Box>

        <Typography variant='h3' sx={{marginLeft:{xs:'20%', lg:'0'},textAlign:{xs:'left',lg:'center'}, fontWeight:'bold', marginTop:'10px', marginBottom:'20px'}}>Release Information</Typography>
        <Typography sx={{marginLeft:{xs:'0', lg:'0'},textAlign:'center', fontSize:'20px'}}>I Hereby give permission to the person(s) below to receive information about the care of the above named patient</Typography>

        <Box sx={{marginLeft:{lg:'25%'}}}>
        
        

        <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='release_name_one' label='Name' variant='standard' defaultValue={variables.release_name_one} onChange = {(e) => variables.release_name_one = `${e.target.value}`}/>
        
        <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='release_relationship_one' label='Relationship' variant='standard' defaultValue={variables.release_relationship_one} onChange = {(e) => variables.release_relationship_one = `${e.target.value}`}/>

        </Box>
        <Box sx={{marginLeft:{lg:'25%'}}}>

        <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='release_name_two' label='Name' variant='standard' defaultValue={variables.release_name_two} onChange = {(e) => variables.release_name_two = `${e.target.value}`}/>

        <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='release_relationship_two' label='Relationship' variant='standard' defaultValue={variables.release_relationship_two} onChange = {(e) => variables.release_relationship_two = `${e.target.value}`}/>
        </Box>
        
      </Box>


      <Box>
          <Navigate backLink={'/signInTwo'} forwardLink={'/signInFour'}/>
        </Box>
    </Stack>
  )
}

export default PatientThree