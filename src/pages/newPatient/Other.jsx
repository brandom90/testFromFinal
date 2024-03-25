import React, {useState, useEffect} from 'react'
import { Box,TextField, Typography, Button, Stack } from '@mui/material'
import Navigate from '../../components/Navigate'
import styles from './styles'
import other from './variables'
import { ProgressBar } from '../../components'


const Other = () => {

  const upperStackStyles = {
    margin:'10px', 
    marginLeft:{xs:'16%', md:'22%'}}
  const lowerStackStyles = {
    margin:'10px',
    marginLeft:{xs:'14%', md:'22%'}
  }


  
  return (
    <Stack direction={styles.stack} sx={{backgroundImage: 'linear-gradient(to top, lightblue, white)',}}>
      <Box sx={styles.textBox}>
        <ProgressBar selected={6}/>
        <Typography variant='h2' textAlign={'center'}>Other</Typography>

      </Box>
      <Box>
      <Box>
        <Typography textAlign={'center'} sx={{fontSize:'18px', marginBottom:'10px'}}>Have you had any injections in the past year?<br/> (leave blank if not applicable)</Typography>
        
        <Box sx={{marginLeft:{xs:'28%', md:'30%'}}}>
        <TextField onChange={(e) => {other.injections = e.target.value}}/>
        <Typography>When</Typography>
        <TextField onChange={(e) => {other.when = e.target.value}}/>
        <Typography>Where</Typography>
        <TextField  onChange={(e) => {other.where = e.target.value}}/>
        <Typography>Type of Injection</Typography>
        <TextField onChange={(e) => {other.type = e.target.value}}/>
        </Box>
        

        <Typography textAlign={'center'} sx={{fontSize:'18px', marginBottom:'10px'}}>Have you had your Anual Medicare Wellness Visit?(AWV)<br/> (leave blank if not applicable)</Typography>

        <Box sx={{marginLeft:{xs:'28%', md:'30%'}}}>
          <TextField  onChange={(e) => {other.awv = e.target.value}}/>
          <Typography>When</Typography>
          <TextField onChange={(e) => {other.awvwhen = e.target.value}}/>
        </Box>

        <Typography  textAlign={'center'} sx={{fontSize:'18px', marginBottom:'10px'}}>Are you currently enrolled in a Chronic Care Management program?<br/> (leave blank if not applicable)</Typography>

        <Box sx={{marginLeft:{xs:'28%', md:'30%'}}}>
          <TextField onChange={(e) => { other.chronicCareManagement = e.target.value}}/>
          <Typography>Where</Typography>
          <TextField  onChange={(e) => { other.managementWhere = e.target.value}}/>
        </Box>

      </Box>
      <Box>
      <Typography textAlign={'center'} sx={{fontSize:'18px', marginTop:'30px'}}>Preffered Pharmacy</Typography>

        <Stack direction='column'>
          
          <Stack direction='row'  onChange={(e) => { other.preferredPharmacy = e.target.value}} sx={upperStackStyles}><Typography sx={{marginTop:'15px', marginRight:'5px'}}>Name</Typography> <TextField /></Stack>
          <Stack direction='row' onChange={(e) => { other.prefferedPharmacyNumber = e.target.value}} sx={lowerStackStyles}><Typography sx={{marginTop:'15px', marginRight:'5px'}}>Number</Typography> <TextField /></Stack>
          <Stack direction='row' onChange={(e) => { other.prefferedPharmacyCityOrZip = e.target.value}} sx={lowerStackStyles}><Typography sx={{marginTop:'15px', marginRight:'5px'}}>City/Zip</Typography> <TextField /></Stack>
        
        </Stack>

        <Typography textAlign={'center'} sx={{fontSize:'18px'}}>Secondary Pharmacy - if applicable</Typography>
        <Stack direction='column'>
          
          <Stack direction='row' onChange={(e) => { other.secondaryPharmacy = e.target.value}} sx={upperStackStyles}><Typography sx={{marginTop:'15px', marginRight:'5px'}}>Name</Typography> <TextField /></Stack>
          <Stack direction='row' onChange={(e) => { other.secondaryPharmacyNumber = e.target.value}} sx={lowerStackStyles}><Typography sx={{marginTop:'15px', marginRight:'5px'}}> Number</Typography> <TextField /></Stack>
          <Stack direction='row' onChange={(e) => { other.secondaryPharmacyCityOrZip = e.target.value}} sx={lowerStackStyles}><Typography sx={{marginTop:'15px', marginRight:'5px'}}>City/Zip </Typography> <TextField /></Stack>
        
        </Stack>
      </Box>
      <Box>
        <Typography textAlign={'center'} sx={{fontSize:{xs:'18px'}}}>Medication (seperate with commas)</Typography>
        <Stack direction='row' sx={lowerStackStyles}><Typography sx={{marginTop:'15px', marginRight:'5px'}}>Medication </Typography> <TextField /></Stack>
        
      </Box>
      </Box>
      <Box sx={{marginTop:'80px'}}>
        <Navigate backLink={'/newPatientFive'} forwardLink={'/newPatientSubmitted'}/>
      </Box>
    </Stack>
  )
}

export default Other