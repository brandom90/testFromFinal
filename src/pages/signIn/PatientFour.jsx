import React from 'react'
import { Link } from 'react-router-dom'
import {Box, Stack, TextField, Typography} from '@mui/material'
import ProgressBar from '../../components/ProgressBar'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import informationLists from './utils/variables'
import Navigate from '../../components/Navigate';


const variables = informationLists[3]

const PatientFour = () => {

  const textFieldStyles = {
    margin:{xs:'10%', lg:'0'},
    marginLeft:{xs:'33%', lg:'10%'}, 
    marginBottom:{xs:'20px', lg:'10%'},
    width:'300px'

  }

  return (
    <Stack sx={{backgroundImage: 'linear-gradient(to top, lightblue, white)'}}>
      <Box>
        <ProgressBar selected={4}/>
        <Typography variant='h2' sx={{textAlign:'center'}}>Insurance Information</Typography>
        <Typography sx={{fontStyle:'italic', textAlign:'center', fontSize:'20px'}}>Please Note: We will request to scan your ID and insurance card</Typography>
      </Box>

      <Box>
        <Box sx={{marginLeft:{lg:'15%'}}}>
          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='primary_insurance' label='Primary Insurance' variant='standard' defaultValue={variables.primary_insurance} onChange = {(e) => variables.primary_insurance = `${e.target.value}`}/>

          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='prim_id' label='ID#' variant='standard' defaultValue={variables.prim_id} onChange = {(e) => variables.prim_id = `${e.target.value}`}/>

          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles}  id='prim_group' label='Group#' variant='standard' defaultValue={variables.prim_group} onChange = {(e) => variables.prim_group = `${e.target.value}`}/>
        </Box>

        <Box sx={{marginLeft:{lg:'15%'}}}>
          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles}  id='secondary_insurance' label='Secondary Insurance' variant='standard' defaultValue={variables.secondary_insurance} onChange = {(e) => variables.secondary_insurance = `${e.target.value}`}/>

          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='sec_id' label='ID#' variant='standard' defaultValue={variables.sec_id} onChange = {(e) => variables.sec_id = `${e.target.value}`}/>

          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles}  id='sec_group' label='Group#' variant='standard' defaultValue={variables.sec_group} onChange = {(e) => variables.sec_group = `${e.target.value}`}/>
        </Box>
      </Box>

      <Box>
        <Navigate backLink={'/signInThree'} forwardLink={'/signInFive'}/>
      </Box>
    </Stack>
  )
}

export default PatientFour