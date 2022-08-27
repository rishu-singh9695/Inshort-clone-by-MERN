import { Box, Typography, styled } from '@mui/material';


const Image = styled('img')({
    height: 34,
    '&:last-child': {
        margin: '0 45px 0 20px'

    }

})

const Container = styled(Box)(({theme})=> ({

    background: '#f44336',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    height: 48,
    marginBottom: 30,

    [theme.breakpoints.down('md')]:{
        display: 'none'
    }
}));




const InfoHeader = () => {
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';
    return (
        <Container>
            <Typography sx={{ fontSize: 14, fontWeight: 400, marginLeft: 5 }}>
                For the best experience use Inshorts app on your smartphone
            </Typography>
            <Box sx={{ display: 'flex', marginLeft: 'auto' }}>
                <Image src={appleStore} alt="appleStore logo" />
                <Image src={googleStore} alt="googleStore logo" />
            </Box>
        </Container>
    )
}



export default InfoHeader;