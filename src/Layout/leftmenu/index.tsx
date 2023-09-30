import { Drawer,  } from '@mui/material';
import React from 'react';

import { StyledLeftMenu } from './components/StyledLeftMenu';

import DrawerContent from './DrawerContent';

function Leftmenu(props) {

    return (
        <StyledLeftMenu>
           <Drawer className='leftMenuCover'
        sx={{
          width: props.drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: props.drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
       <DrawerContent/>
      </Drawer>
        </StyledLeftMenu>
    );
}

export default Leftmenu;


