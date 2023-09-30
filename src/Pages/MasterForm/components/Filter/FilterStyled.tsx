import styled from "@emotion/styled";
import { Button, TextField, Typography } from "@mui/material";


export const StyledButton = styled(Button)(({ theme }) => ({
    color: '#EF855D',
    minWidth: 0,
    border: '1px solid #DDE2E4',
    borderRadius: '6px',
    padding: '4px',
    position: 'relative',
}));

export const StyledBadge = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    backgroundColor: '#EF855D',
    color: '#fff',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const StyledModalContainer = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 520,
    minHeight: '400px',
    backgroundColor: '#fff',
    outline: 'none ',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}));

export const StyledModalHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F7F9FF',
    borderRadius: '8px 8px 0px 0px',
    padding: '10px',
    flexWrap: 'wrap',
}));

export const StyledCancelBtn = styled(Button)(({ theme }) => ({
    minWidth: 0,
    textTransform: 'none',
    backgroundColor: '#417EE3',
    border: '1px solid #417EE3',
    color: '#fff',
    ':hover': {
        backgroundColor: '#417EE3',
        color: '#fff',
    }
}));

export const StyledClearBtn = styled(StyledCancelBtn)(({ theme }) => ({
    backgroundColor: '#fff',
    border: '1px solid #fff',
    color: '#5F5F5F',
    ':hover': {
        backgroundColor: '#fff',
        color: '#5F5F5F',
    }
}));
export const StyledApplyBtn = styled(StyledCancelBtn)(({ theme }) => ({
    backgroundColor: '#FF800F',
    border: '1px solid #FF800F',
    color: '#fff',
    ':hover': {
        backgroundColor: '#FF800F',
        color: '#fff',
    }
}));

export const StyledMutedText = styled(Typography)(({ theme }) => ({
    fontSize: 12,
    color: '#84919A',
    fontWeight: 600
}));

export const StyledFilterChip = styled('div')(({ theme, style }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '2px',
    width: 'fit-content',
    color: '#252525',
    fontSize: 12,
    fontWeight: 500,
    backgroundColor: '#F6F7F8',
    borderRadius: '8px',
    padding: '7px 10px',
    '> svg': {
        fontSize: 14
    },
    ...style?.root
}));

export const StyledTextField = styled(TextField)(({ theme,  }) => ({
    width: '100%',
    'input': {
        padding: '10px',
    }
}));