import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Navigate from '../../components/Navigate'

const KoosFour = ({list,backwardLink,forwardLink}) => {
  
  return (
    <Box>
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

export default KoosFour