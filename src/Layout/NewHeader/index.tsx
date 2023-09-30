import * as React from 'react';
import styled from '@emotion/styled';
import {
    Box, Typography, Link, Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton,
    Tooltip, InputAdornment, TextField, Stack, FormControl, Select
} from '@mui/material';
import { NavigateNext, PersonAdd, Settings, Logout, Notifications, Help, Search, ArrowBack, KeyboardArrowDown } from '@mui/icons-material';

import HeaderStyled, { BreadcrumbsStyled, TextFieldStyled, accountMenuPaperStyles } from './HeaderStyled';
import SearchTextField from '../../components/SearchTextField';

const useMuiMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return { anchorEl, open, handleClick, handleClose };
};

export default function NewHeader() {
    const [showMobileTextField, setShowMobileTextField] = React.useState(false);


    const accountMenu = useMuiMenu();

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    const handleMobileTextField = () => {
        setShowMobileTextField(!showMobileTextField);
    }

    const handleWindowSizeChange = () => {
        if (window.innerWidth > 900) {
            setShowMobileTextField(false);
        }
    };
    React.useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    const [yearValue, setYearValue] = React.useState('2022-23');

    const handleYearChange = (event) => {
        setYearValue(event.target.value);
    };

    return (
        <HeaderStyled>
            {showMobileTextField ? (
                <MobileTextfield handleMobileTextField={handleMobileTextField} />
            ) : (
                <>
                    <Box className='headerBarRightBox'>
                        <Typography component='h2'>Teacher Notes</Typography>
                        <div role="presentation" onClick={handleClick}>
                            <BreadcrumbsStyled aria-label="breadcrumb" separator={<NavigateNext fontSize="small" />}>
                                <Link underline="hover" color="inherit" href="/">Dashboard</Link>
                                <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">2021-2022</Link>
                                <Typography className='selected'>Teachers Notes</Typography>
                                {/* <Typography className='selected'>Teachers Notes</Typography>
                                <Typography className='selected'>Teachers Notes</Typography> */}
                            </BreadcrumbsStyled>
                        </div>
                    </Box>
                    <Box className='headerBarLeftBox'>
                        {/* <TextFieldStyled sx={{ display: { xs: 'none', md: 'block' } }} placeholder='Search' InputProps={{ startAdornment: (<InputAdornment position="start"><Search /></InputAdornment>), }} /> */}
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <SearchTextField
                                placeholder='Search'
                                style={{
                                    root: { width: '190px' },
                                    input: { padding: '7px' },
                                }} />
                        </Box>
                        <FormControl
                            sx={{
                                minWidth: '100px',
                                '.MuiInputBase-root ': {
                                    backgroundColor: '#F7F9FF',
                                    color: '#5E5873',
                                    fontWeight: 500,
                                    fontSize: 13,
                                },
                                '.MuiSelect-select ': {
                                    padding: '8px',
                                },
                                'fieldset': {
                                    borderColor: '#DDE2E4',
                                }
                            }}
                        >
                            <Select
                                IconComponent={KeyboardArrowDown}
                                value={yearValue}
                                onChange={handleYearChange}
                            >
                                <MenuItem value={'2022-23'}>2022-23</MenuItem>
                                <MenuItem value={'2021-22'}>2021-22</MenuItem>
                                <MenuItem value={'2020-21'}>2020-21</MenuItem>
                            </Select>
                        </FormControl>
                        <IconButton className='textFieldIcon' sx={{ display: { xs: 'block', md: 'none' } }} onClick={handleMobileTextField} >
                            <Search />
                        </IconButton>
                        <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', }}>
                                <Box className='iconsBox'>
                                    <Notifications />
                                    <Help />
                                    <Settings />
                                </Box>
                                <Stack direction='row' alignItems='center' sx={{ ml: '10px' }}>
                                    <Typography
                                        sx={{ fontSize: 13, fontWeight: 500, color: '#5E5873', }}
                                    >Cashier</Typography>
                                    <Tooltip title="Account settings">
                                        <IconButton size="small" onClick={accountMenu.handleClick} aria-controls={accountMenu.open ? 'account-menu' : undefined} aria-haspopup="true" aria-expanded={accountMenu.open ? 'true' : undefined}>
                                            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                                        </IconButton>
                                    </Tooltip>
                                </Stack>

                            </Box>
                            <Menu
                                anchorEl={accountMenu.anchorEl}
                                id="account-menu"
                                open={accountMenu.open}
                                onClose={accountMenu.handleClose}
                                onClick={accountMenu.handleClose}
                                slotProps={{ paper: { sx: accountMenuPaperStyles } }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={accountMenu.handleClose}>
                                    <Avatar /> Profile
                                </MenuItem>
                                <MenuItem onClick={accountMenu.handleClose}>
                                    <Avatar /> My account
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={accountMenu.handleClose}>
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    Add another account
                                </MenuItem>
                                <MenuItem onClick={accountMenu.handleClose}>
                                    <ListItemIcon>
                                        <Settings fontSize="small" />
                                    </ListItemIcon>
                                    Settings
                                </MenuItem>
                                <MenuItem onClick={accountMenu.handleClose}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Box></>
            )}
        </HeaderStyled>
    )
}

function MobileTextfield({ handleMobileTextField }) {
    const IconBtnStyle = styled(IconButton)(({ theme }) => ({
        '.MuiSvgIcon-root': {
            color: '#616161',
            fontSize: 25,
        }
    }));
    return (
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <Stack direction='row' sx={{ width: '100%' }}>
                <IconBtnStyle onClick={handleMobileTextField}>
                    <ArrowBack />
                </IconBtnStyle>
                <SearchTextField
                    placeholder='Search'
                    style={{
                        root: { width: 'calc(100vw - 200px)' },
                        input: { padding: '7px' },
                    }} />
            </Stack>
        </Box>
    )
}