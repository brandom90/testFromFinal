import { Box, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Navigate from '../../components/Navigate'

const HoosOne = ({nameList,list,backwardLink,forwardLink}) => {

  return (
    <Box>
      <Typography>First Name</Typography>
      <TextField onChange={(e)=>{nameList.first = e.target.value}}/>
      <Typography>Last Name</Typography>
      <TextField onChange={(e)=>{nameList.last = e.target.value}}/>
      {
        list.map((item,idx)=>(
          <Box key={idx}>
          <Typography>{'instruction' in item && item.instruction}</Typography>
          <Typography>{'question' in item && item.question}</Typography>
          <Box>
            {'question' in item && 
              <RadioGroup defaultValue={item.value !== 0 ? item.value : false}>
              {item.options.map((option,idx)=>(
                <FormControlLabel key={`option${idx}`}  onChange={(e)=>{item.value = e.target.value}} label={option} value={idx} control={<Radio />}  />
              ))}
              </RadioGroup>

            }
          </Box>
          
          </Box>
        ))
      }
      <Navigate backLink={backwardLink} forwardLink={forwardLink}/>
    </Box>
  )
}

export default HoosOne