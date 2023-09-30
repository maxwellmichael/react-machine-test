import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material';
import {
  ExpandLess, StarBorder, ExpandMore, PersonAddAltOutlined, PersonOutlineOutlined, TextSnippetOutlined,
  SettingsOutlined, BoltOutlined, HomeOutlined, GroupOutlined, LayersOutlined, CalendarMonthOutlined,
  CodeOutlined, LogoutOutlined, ContactPageOutlined, NoteAlt, NoteAltOutlined, TableViewOutlined, AssignmentIndOutlined, ClassOutlined, AppRegistrationOutlined, SubscriptionsOutlined, LocalAtmOutlined, SellOutlined
} from '@mui/icons-material';

import { DrawerContentStyled } from './DrawerContentStyled';

export default function DrawerContent() {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleNavigate = (routerValue) => {
    navigate(routerValue);
  }

  const menuItems = [
    // {
    //   name: 'Home',
    //   icon: <HomeOutlined />,
    //   route: '/home',
    // },
    // {
    //   name: 'Contact',
    //   icon: <ContactPageOutlined />,
    //   route: '/contact',
    // },
    // {
    //   name: 'TeachersNotes',
    //   icon: <NoteAltOutlined />,
    //   route: '/teachernotes',
    // },
    // {
    //   name: 'Timetable',
    //   icon: <TableViewOutlined />,
    //   route: '/timetable',
    // },
    // {
    //   name: 'Assignment',
    //   icon: <AssignmentIndOutlined />,
    //   route: '/assignment',
    // },
    // {
    //   name: 'Class Activities',
    //   icon: <ClassOutlined />,
    //   route: '/class-activities',
    // },
    // {
    //   name: 'Assignment Details',
    //   icon: <AssignmentIndOutlined />,
    //   route: '/assignmentdetails',
    // },
    // {
    //   name: 'Activity Planner',
    //   icon: <PersonOutlineOutlined />,
    //   route: '/activity-planner',
    // },
    // {
    //   name: 'Scheme Work',
    //   icon: <GroupOutlined />,
    //   route: '/scheme-work',
    // },
    // {
    //   name: 'Staff Registration',
    //   icon: <AppRegistrationOutlined />,
    //   route: '/staff-registration',
    // },
    {
      name: 'Master Form',
      icon: <TextSnippetOutlined />,
      // route: '/master-form',
      route: '/',
    },
    {
      name: 'Users',
      icon: <PersonOutlineOutlined />,
      // route: '/master-form',
      route: '/users',
    },
    // {
    //   name: 'Media Library',
    //   icon: <SubscriptionsOutlined />,
    //   route: '/media-library',
    // },
    // {
    //   name: 'Fee Collection',
    //   icon: <LocalAtmOutlined />,
    //   route: '/fee-collection-list',
    // },
    // {
    //   name: 'Sale',
    //   icon: <SellOutlined />,
    //   route: '/sale',
    // },
  ]

  const location = useLocation();
  // console.log(location);

  return (
    <DrawerContentStyled>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', paddingTop: 0, }}
        component="nav"
        aria-labelledby="nested-list-subheader">
        <ListItemButton onClick={handleClick} className='leftMenuPrimary'>
          <ListItemText primary="Set Up" className='leftMenuType' />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {/* collapse menu */}
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className='paddingAdd'>
            {menuItems.map((menuItem, index) => (
              <ListItemButton
                key={index}
                sx={{ pl: 4 }}
                className={`leftMenuSub ${location.pathname === menuItem.route ? 'active' : ''}`}
                onClick={() => handleNavigate(menuItem.route)} >
                <ListItemIcon className='leftMenuIcon'>
                  {menuItem.icon}
                </ListItemIcon>
                <ListItemText primary={menuItem.name} />
              </ListItemButton>
            ))}
            {/* <ListItemButton sx={{ pl: 4 }} className='leftMenuSub' onClick={() => handleNavigate('/home')} >
              <ListItemIcon className='leftMenuIcon'>
                <HomeOutlined />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub' onClick={() => handleNavigate('/contact')} >
              <ListItemIcon className='leftMenuIcon'>
                <ContactPageOutlined />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub' onClick={() => handleNavigate('/teachernotes')} >
              <ListItemIcon className='leftMenuIcon'>
                <NoteAltOutlined />
              </ListItemIcon>
              <ListItemText primary="Teachernotes" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub' onClick={() => handleNavigate('/timetable')} >
              <ListItemIcon className='leftMenuIcon'>
                <TableViewOutlined />
              </ListItemIcon>
              <ListItemText primary="Timetable" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub' onClick={() => handleNavigate('/assignment')} >
              <ListItemIcon className='leftMenuIcon'>
                <AssignmentIndOutlined />
              </ListItemIcon>
              <ListItemText primary="Assignment" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub' onClick={() => handleNavigate('/class-activities')} >
              <ListItemIcon className='leftMenuIcon'>
                <ClassOutlined />
              </ListItemIcon>
              <ListItemText primary="Class Activities" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub' onClick={() => handleNavigate('/assignmentdetails')} >
              <ListItemIcon className='leftMenuIcon'>
                <AssignmentIndOutlined />
              </ListItemIcon>
              <ListItemText primary="Assignment Details" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub' onClick={() => handleNavigate('/activity-planner')} >
              <ListItemIcon className='leftMenuIcon'>
                <PersonOutlineOutlined />
              </ListItemIcon>
              <ListItemText primary="Activity Planner" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub' onClick={() => handleNavigate('/scheme-work')} >
              <ListItemIcon className='leftMenuIcon'>
                <GroupOutlined />
              </ListItemIcon>
              <ListItemText primary="Scheme Work" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub active' onClick={() => handleNavigate('/staff-registration')} >
              <ListItemIcon className='leftMenuIcon'>
                <AppRegistrationOutlined />
              </ListItemIcon>
              <ListItemText primary="Staff Registration" />
            </ListItemButton> */}


            {/* <ListItemButton sx={{ pl: 4 }} className='leftMenuSub'>
              <ListItemIcon className='leftMenuIcon'>
                <SettingsOutlined />
              </ListItemIcon>
              <ListItemText primary="Teacher Substitution" />
            </ListItemButton>
         
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub'>
              <ListItemIcon className='leftMenuIcon'>
                <BoltOutlined />
              </ListItemIcon>
              <ListItemText primary="Student Daily Attendance" />
            </ListItemButton>
          
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub'>
              <ListItemIcon className='leftMenuIcon'>
                <HomeOutlined />
              </ListItemIcon>
              <ListItemText primary="Staff Attendance" />
            </ListItemButton>
          
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub'>
              <ListItemIcon className='leftMenuIcon'>
                <GroupOutlined />
              </ListItemIcon>
              <ListItemText primary="Student Leave Request" />
            </ListItemButton>
        
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub active'>
              <ListItemIcon className='leftMenuIcon'>
                <PersonAddAltOutlined />
              </ListItemIcon>
              <ListItemText primary="Teacher Notes" />
            </ListItemButton>
       
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub'>
              <ListItemIcon className='leftMenuIcon'>
                <LayersOutlined />
              </ListItemIcon>
              <ListItemText primary="Circular" />
            </ListItemButton>
      
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub'>
              <ListItemIcon className='leftMenuIcon'>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Recognition" />
            </ListItemButton>
         
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub'>
              <ListItemIcon className='leftMenuIcon'>
                <CalendarMonthOutlined />
              </ListItemIcon>
              <ListItemText primary="Academic Calendar" />
            </ListItemButton>
       
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub'>
              <ListItemIcon className='leftMenuIcon'>
                <CodeOutlined />
              </ListItemIcon>
              <ListItemText primary="Exam Schedule" />
            </ListItemButton>
           
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub'>
              <ListItemIcon className='leftMenuIcon'>
                <CodeOutlined />
              </ListItemIcon>
              <ListItemText primary="Holiday" />
            </ListItemButton>
         
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub'>
              <ListItemIcon className='leftMenuIcon'>
                <CodeOutlined />
              </ListItemIcon>
              <ListItemText primary="Lesson Planning" />
            </ListItemButton>
          
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub'>
              <ListItemIcon className='leftMenuIcon'>
                <CodeOutlined />
              </ListItemIcon>
              <ListItemText primary="Teacher Subjects" />
            </ListItemButton>
          
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub'>
              <ListItemIcon className='leftMenuIcon'>
                <CodeOutlined />
              </ListItemIcon>
              <ListItemText primary="Timetable" />
            </ListItemButton>
          
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub'>
              <ListItemIcon className='leftMenuIcon'>
                <CodeOutlined />
              </ListItemIcon>
              <ListItemText primary="Teacher Timetable" />
            </ListItemButton>
            
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub'>
              <ListItemIcon className='leftMenuIcon'>
                <CodeOutlined />
              </ListItemIcon>
              <ListItemText primary="Approval" />
            </ListItemButton>
        
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub'>
              <ListItemIcon className='leftMenuIcon'>
                <CodeOutlined />
              </ListItemIcon>
              <ListItemText primary="Library-T.Notes" />
            </ListItemButton>
         
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub'>
              <ListItemIcon className='leftMenuIcon'>
                <CodeOutlined />
              </ListItemIcon>
              <ListItemText primary="Chat Group" />
            </ListItemButton>
            
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub'>
              <ListItemIcon className='leftMenuIcon'>
                <CodeOutlined />
              </ListItemIcon>
              <ListItemText primary="Online Exam" />
            </ListItemButton>
           
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub'>
              <ListItemIcon className='leftMenuIcon'>
                <CodeOutlined />
              </ListItemIcon>
              <ListItemText primary="Video Tutorial" />
            </ListItemButton>
        
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub'>
              <ListItemIcon className='leftMenuIcon'>
                <CodeOutlined />
              </ListItemIcon>
              <ListItemText primary="T. Notes Academic Library" />
            </ListItemButton>
            
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub'>
              <ListItemIcon className='leftMenuIcon'>
                <CodeOutlined />
              </ListItemIcon>
              <ListItemText primary="Online Exam Answer" />
            </ListItemButton>
          
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub'>
              <ListItemIcon className='leftMenuIcon'>
                <CodeOutlined />
              </ListItemIcon>
              <ListItemText primary="Learning App" />
            </ListItemButton>
            
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub'>
              <ListItemIcon className='leftMenuIcon'>
                <CodeOutlined />
              </ListItemIcon>
              <ListItemText primary="Appointment" />
            </ListItemButton>
            
            <ListItemButton sx={{ pl: 4 }} className='leftMenuSub'>
              <ListItemIcon className='leftMenuIcon'>
                <LogoutOutlined />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItemButton> */}
          </List>
        </Collapse>
      </List>
    </DrawerContentStyled>
  )
}