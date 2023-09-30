import styled from "@emotion/styled";
import { Stack, TextField } from "@mui/material";
import PropTypes from 'prop-types';

const StyledLabel = styled('label')(({ theme, style }) => ({
    display: 'block',
    color: '#252525',
    fontSize: 13,
    fontWeight: 500,
    ...style?.label
}));

const StyledInput = styled(TextField)(({ theme, style }) => ({
    'input': {
        padding: '8px 10px',
        fontWeight: 500,
        fontSize: 14,
        '::placeholder': {
            fontSize: 13
        }
    },
    'fieldset': {
        borderRadius: '4px',
    },
    ...style?.input
}));

function InputTextField({ style, placeholder, label }) {

    return (
        <Stack sx={{ gap: '5px', ...style?.stack }}>
            {label ? <StyledLabel>{label}</StyledLabel> : null}
            <StyledInput
                style={style}
                placeholder={placeholder ? placeholder : null}
            />
        </Stack>
    )
}

InputTextField.propTypes = {
    style: PropTypes.object,
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default InputTextField;