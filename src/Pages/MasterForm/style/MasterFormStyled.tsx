import styled from "@emotion/styled";
import { Box, Button, FormControl } from "@mui/material";

export const StyledContainer = styled(Box)(({  }) => ({
    boxShadow: '0px 4px 16px 0px #417EE31A',
    border: '1px solid #F2F4F7',
    borderRadius: '4px',
    backgroundColor: '#fff',
}));

export const StyledSearchContainer = styled('div')(({ }) => ({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    borderRadius: '4px',
}));

export const StyledFormButton = styled(Button)(({  }) => ({
    width: '100%',
    justifyContent: 'start',
    padding: '15px 14px',
    gap: '8px',
    textTransform: 'none',
    borderBottom: '1px solid #DDE2E4',
    borderRadius: 0,
    ".MuiTouchRipple-root ": {
        color: '#000000',
    },
}));

export const StyledLetterAvatar = styled('div')(({ theme, bgcolor }) => ({
    width: '40px',
    height: '40px',
    backgroundColor: bgcolor ? bgcolor : '#D17777',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '6px',
    fontSize: 18,
}));

export const StyledFormItemBtn = styled(Button)(({ theme, selected }) => ({
    backgroundColor: selected ? '#fff' : '#F7F9FF',
    width: '100%',
    justifyContent: 'start',
    padding: '15px 30px',
    gap: '8px',
    textTransform: 'none',
    borderBottom: '1px solid #DDE2E4',
    borderRadius: 0,
    ".MuiTouchRipple-root ": {
        color: '#000000',
    },
}));

export const StyledAddBtn = styled(Button)(({ theme, bgcolor, fontcolor, iconcolor }) => ({
    backgroundColor: bgcolor ? bgcolor : '#fff',
    padding: '6px 20px',
    gap: '8px',
    textTransform: 'none',
    border: '1px solid #DDE2E4',
    alignItems: 'center',
    ':hover': {
        backgroundColor: bgcolor ? bgcolor : '#fff',
    },
    'p': {
        fontSize: 13,
        color: fontcolor ? fontcolor : '#000000',
        fontWeight: 600,
        lineHeight: 1,
    },
    'svg': {
        color: iconcolor ? iconcolor : '#FF800F',
        fontSize: 25,
    }
}));

export const StyledPrimaryButton = styled(Button)(({ theme, root }) => ({
    backgroundColor: '#FF800F',
    color: '#fff',
    fontSize: 13,
    padding: '6px 20px',
    gap: '8px',
    textTransform: 'none',
    // border: '1px solid #DDE2E4',
    ':hover': {
        backgroundColor: '#FF800F',
        ...root?.hover
    },
    ...root
}));

export const StyledSecondaryButton = styled(Button)(({ theme, root }) => ({
    color: '#FF6A31',
    border: '1px solid #FF6A31',
    fontSize: 13,
    padding: '6px 20px',
    gap: '8px',
    textTransform: 'none',
    ...root
}));


