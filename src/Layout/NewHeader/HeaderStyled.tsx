import { styled } from '@mui/material/styles';
import { TextField, Breadcrumbs, Box } from '@mui/material';

const HeaderStyled = styled(Box)(({ theme }) => ({
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    // flexWrap: 'wrap',
    rowGap: '10px',
    alignItems: 'center',
    justifyContent: 'space-between',
    '.headerBarRightBox': {
        // width: '50%',
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
        rowGap: '8px',
        '& > h2': {
            color: '#0E0E0E',
            fontSize: 18,
            fontWeight: 700,
        },
        // '@media (max-width: 900px)': {
        //     width:'100%',
        // },
    },
    '.headerBarLeftBox': {
        // width: '50%',
        display: 'flex',
        gap: '10px',
        justifyContent: 'end',
        alignItems: 'center',
        '@media (max-width: 900px)': {
            gap: '0px',
        },
    },
    '.iconsBox': {
        color: '#5B6871',
        display: 'flex',
        gap: '10px',
    },
    '.textFieldIcon': {
        'svg': {
            color: '#6E7C87',
            fontSize: 30,
        },
        // '@media (min-width: 701px)': {
        //     display: 'none',
        // },
    }
}));

export const TextFieldStyled = styled(TextField)(({ theme }) => ({
    // '@media (max-width: 700px)': {
    //     display: 'none',
    // },
    '.MuiInputBase-root ': {
        paddingLeft: '5px',
        '&.Mui-focused fieldset': {
            borderColor: '#DDE2E4',
            borderWidth: 'thin'
        },
        '&:hover fieldset': {
            borderColor: '#DDE2E4',
        },
    },
    'input': {
        width: '200px',
        height: '30px',
        padding: '4px 4px',

    },
    'fieldset': {
        border: '1px solid #DDE2E4',
        borderRadius: '6px'
    },
    '.MuiSvgIcon-root': {
        color: '#B0BABF',
        fontSize: 20,
        padding: 0,
    },
}));

export const BreadcrumbsStyled = styled(Breadcrumbs)(({ theme }) => ({
    '& .selected': {
        color: '#0E0E0E',
        fontWeight: 500,
        fontSize: 12,
    },
    'a': {
        color: '#6E7C87',
        fontWeight: 400,
        fontSize: 12,
    },
}));

export const accountMenuPaperStyles = {
    elevation: 0,
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1.5,
    '& .MuiAvatar-root': {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
    },
    '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: 'background.paper',
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0,
    },
};

export default HeaderStyled;