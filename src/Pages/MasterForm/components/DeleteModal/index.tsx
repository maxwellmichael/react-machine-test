import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DeleteOutlineOutlined, InfoOutlined } from '@mui/icons-material';
import { Divider, IconButton, Stack } from '@mui/material';
import styled from '@emotion/styled';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 400,
    bgcolor: '#fff',
    borderRadius: '8px',
    pt: 3,
    pb: 2,
};

const StyledPrimaryButton = styled(Button)(({ theme, root }) => ({
    backgroundColor: '#FF800F',
    color: '#fff',
    fontSize: 13,
    padding: '5px 16px',
    gap: '8px',
    textTransform: 'none',
    ':hover': {
        backgroundColor: '#FF800F',
        ...root?.hover
    },
    ...root
}));

const StyledSecondaryButton = styled(Button)(({ theme, root }) => ({
    color: '#FF6A31',
    border: '1px solid #FF6A31',
    fontSize: 13,
    padding: '4px 16px',
    gap: '8px',
    textTransform: 'none',
    ...root
}));


function DeleteModal({ message, button }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

    return (
        <div>
            <Button
                sx={{ minWidth: 0, p: 0, }}
                onClick={handleOpen}
            >
                {button ? button : <DeleteOutlineOutlined />}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack alignItems='center'>
                        <InfoOutlined sx={{ color: '#417EE3', fontSize: 50 }} />
                    </Stack>
                    <Typography
                        sx={{ fontSize: 17, color: '#252525', fontWeight: 500, textAlign: 'center', mt: 1 }}
                    >
                        {message ? message : 'Are you sure you want to delete ?'}
                    </Typography>
                    <Divider sx={{ my: '15px' }} />
                    <Stack direction='row' justifyContent='end' gap='15px' alignItems='center' px='10px'>
                        <StyledSecondaryButton onClick={handleClose}>Cancel</StyledSecondaryButton>
                        <StyledPrimaryButton onClick={handleClose}>Delete</StyledPrimaryButton>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}

export default DeleteModal;