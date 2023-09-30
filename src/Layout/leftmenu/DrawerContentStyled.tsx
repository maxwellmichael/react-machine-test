import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const DrawerContentStyled = styled(Box)(({ theme }) => ({
    overflow: 'auto',
    boxSizing: 'border-box',
    marginRight: '5px',
    paddingRight: '5px',
    marginTop: '8px',
  
    // scroll bar customization
    scrollbarColor: '#D3D3D3 #EBEBEB',
    scrollbarWidth: 'thin',
    '::-webkit-scrollbar': {
        width: '4px',
    },
    '::-webkit-scrollbar-track': {
        backgroundColor: '#EBEBEB',
    },
    '::-webkit-scrollbar-thumb': {
        backgroundColor: '#D3D3D3',
        borderRadius: '4px',
    },
    //

    '.leftMenuPrimary': {
        color: "#84919A",
        fontSize: '1rem !important',
    },
    '.leftMenuType .MuiTypography-root': {
        fontSize: '12px !important',
        textTransform: 'uppercase',
        fontWeight: '600',
        letterSpacing: '1px',
        wordSpacing: '3px',
    },
    '.leftMenuSub': {
        padding: '5px 10px',
        fontWeight: '500',
    },
    '.leftMenuIcon': {
        minWidth: 'auto',
        marginRight: '5px'
    },

    '.paddingAdd': {
        padding: '0 5px !important',
    },
    '.leftMenuSub div svg, .leftMenuSub div span': {
        fontSize: 13,
        color: '#344054',
    },
    '.leftMenuSub div svg': {
        fontSize: 22,
        marginRight: '5px',
        marginLeft: '2px',
    },
    '.leftMenuSub.active': {
        backgroundColor: '#417EE3',
        borderRadius: '3px',
        boxShadow: '0px 3px 5px 0px #b3cffd'
    },
    '.leftMenuSub.active div svg, .leftMenuSub.active div span': {
        color: '#fff !important',
    },
    '.leftMenuCover': {
        borderRight: 'none',
        '& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper': {
            borderRight: 'none',
            boxShadow: '0px 0px 10px 3px #ddd',
        }
    }
}));
