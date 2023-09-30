import styled from "@emotion/styled";
import { Box } from "@mui/material"
import logo from '../../assets/images/tms-logo.jpg';

const LogoContainer = styled(Box)({
    borderBottom: 'solid 1px #F2F4F7',
    minHeight: '81px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '.tmsLogo': {
        height: '63px',
        width: '100%',
        margin: '5px auto',
        backgroundImage: `url(${logo})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
})

export default function TMSLogo() {

    return (
        <LogoContainer>
            <div className="tmsLogo"></div>
        </LogoContainer>
    )
}