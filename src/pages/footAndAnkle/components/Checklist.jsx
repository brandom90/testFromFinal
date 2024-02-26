import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

import Checkbox from '@mui/material/Checkbox';
// yesOrno sets itself to the value of the setState it was sent in
const Checklist = ({ items, id, yesOrNo, setListData }) => {
  const [selected, setSelected] = useState(null);
 

  const handleToggle = (value) => () => {
    setSelected(value === selected ? null : value);
  
    yesOrNo && yesOrNo( value );
    setListData(value)
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {items.map((value) => (
        <ListItemButton key={value} onClick={handleToggle(value)} style={{ cursor: 'pointer' }}>
          {id.includes("Button") ? (
            <Checkbox checkedIcon={<RadioButtonCheckedIcon />} icon={<RadioButtonUncheckedIcon />} checked={value === selected} readOnly />
          ) : (
            <Checkbox checked={value === selected} readOnly />
          )}
          {value}
        </ListItemButton>
      ))}
    </List>
  );
};

export default Checklist;