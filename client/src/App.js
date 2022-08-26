import { Box, styled } from '@mui/material';

// components

import Header from './components/Header';
import Infoheader from './components/Infoheader';
import Articles from './components/Articles'


const Container = styled(Box)(({ theme }) => ({
  width: '60%',
  margin: '40px auto 0 auto',
  [theme.breakpoints.down('md')]: {
    width: '75%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '85%'
  }

}));


function App() {
  return (
    <Container>
      <Header />
      <Box>
        <Infoheader />
        <Articles />
      </Box>
    </Container>
  );
}

export default App;
