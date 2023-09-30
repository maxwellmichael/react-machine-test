import React from 'react';
import { Outlet } from "react-router-dom";
import { Box, Toolbar, AppBar, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NewHeader from './NewHeader';
import TMSLogo from './leftmenu/TMSLogo';
import DrawerContent from './leftmenu/DrawerContent';

const drawerWidth = 250;

export default function Layout() {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <Box sx={{ display: 'flex', '.MuiToolbar-root ': { minHeight: '81px' } }}>
            <AppBar
                position="fixed"
                sx={{
                    width: { lg: `calc(100% - ${drawerWidth}px)` },
                    backgroundColor: 'white',
                    color: 'black',
                    boxShadow: 'none',
                    borderBottom: '1px solid #F2F4F7',

                }}
            >
                <Toolbar >
                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { lg: 'none' } }} aria-label="open drawer" edge="start">

                        <MenuIcon sx={{ fontSize: 27, color: '#6E7C87' }} />
                    </IconButton >

                    <NewHeader />
                    {/* <div>header</div> */}
                </Toolbar>
            </AppBar>
            <Box component="nav" sx={{ width: { lg: drawerWidth }, flexShrink: { sm: 0 }, }} aria-label="mailbox folders">
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', lg: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, borderColor: '#F2F4F7', boxShadow: ' 0px 12px 16px -4px #10182814' },
                    }}
                    open>
                    <TMSLogo />
                    <DrawerContent />
                </Drawer>

                <Drawer
                    variant="temporary"
                    open={isDrawerOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true, }}
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}>

                    <TMSLogo />
                    <DrawerContent />

                </Drawer>
            </Box>

            <Box component="main" sx={{ flexGrow: 1, width: { lg: `calc(100% - ${drawerWidth}px)` } }}>
                <Toolbar />
                <Box component="main">
                    <Outlet />
                </Box>
            </Box>
        </Box>
    )
}