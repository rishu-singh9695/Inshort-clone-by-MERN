
import { AppBar, Toolbar, styled } from '@mui/material';
import { Menu } from '@mui/icons-material';

const styledHeader = styled(AppBar)`
   background: #ff0000;
`;

const MenuIcon = styled(Menu)`
color: #000;
`;

const Image = styled('img')({
    height: 55,
    margin: 'auto',
    paddingRight: 70
})


function header() {
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
    return (

        <AppBar sx={{ bgcolor: "white" , height: 70, position: 'static'}}>
            <Toolbar>
                <MenuIcon />
                <Image src={url} alt='logo' />
            </Toolbar>

        </AppBar>
    );
}

export default header;




