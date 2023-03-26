import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styles from "./Filters.module.css"

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


function Filters({data , setSelectedFilterIndex, selectedFilterIndex}) {


    const handleChange = (event, newValue) => {
        // console.log(newValue,"from filt")
        setSelectedFilterIndex(newValue)
    };

    

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
         value={selectedFilterIndex} onChange={handleChange} aria-label="basic tabs example"
         TabIndicatorProps={{
            style:{
                backgroundColor: "var(--color-primary)"
            }
         }}
         >
            {
                data?.map((item,idx) => (
                    <Tab key={idx} className={styles.tab} label={item.label} {...a11yProps(0)} />
                ))
            }
        </Tabs>
      </Box>

    </Box>
  );
}

export default Filters