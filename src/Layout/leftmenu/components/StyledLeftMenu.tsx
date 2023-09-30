import { styled } from "@mui/system";
export const StyledLeftMenu = styled('div')(({ theme }) => ({

    '.leftMenuPrimary': {
        color: "#84919A",
        fontSize: '1rem !important',
    },
    '.leftMenuIcon': {
        minWidth:'auto',
        marginRight:'5px'
    },
    '.leftMenuType .MuiTypography-root' : {
        fontSize:'12px !important',
        textTransform:'uppercase',
        fontWeight:'600',
        letterSpacing:'1px',
        wordSpacing:'3px',
    },
    '.leftMenuSub': {
        padding: '5px 10px',
        fontWeight:'500',
    },
    '.leftMenuSub div svg, .leftMenuSub div span': {
        fontSize:13,
        color:'#344054',
    },
    '.leftMenuSub div svg': {
        fontSize:22,
        marginRight:'5px',
        marginLeft:'2px',
    },
    '.leftMenuSub.active': {
        backgroundColor:'#417EE3',
        borderRadius:'3px',
        boxShadow:'0px 3px 5px 0px #b3cffd'
    },
    '.paddingAdd': {
        padding:'0 5px !important',
    },    
    '.leftMenuSub.active div svg, .leftMenuSub.active div span': {
        color:'#fff !important',
    },
    '.tmsLogo': {
        height: '68px',
        width: 'fit-content',
        margin: '5px auto',
    },
    '.logoCover' :{
        textAlign:'center',
        borderBottom:'solid 1px #F2F4F7',
        minHeight:'75px',
        position:'sticky',
        top:'0px',
        zIndex:'9999',
        backgroundColor:'#fff',
    },
    '.leftMenuCover': {
        borderRight:'none',
        '& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper' :{
            borderRight:'none',
            boxShadow:'0px 0px 10px 3px #ddd',
        }
    }


}));