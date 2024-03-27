import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import {Navigate, ProgressBar} from '../../components'


const KoosFive = ({list,backwardLink,forwardLink}) => {
  
  return (
    <Box sx={{ backgroundImage: 'linear-gradient(to top, lightblue, white)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <ProgressBar selected={5} amount={[1,2,3,4,5]}/>
      {
        list.map((item,idx)=>(
          <Box key={idx} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
           <Box sx={{ width:'80%', marginBottom:'10px', marginTop:'10px'}}>
              <Typography sx={{fontWeight:'bold'}}>{'instruction' in item && item.instruction}</Typography>
            </Box>
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

export default KoosFive