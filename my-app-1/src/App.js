import './App.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { CssBaseline, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://mui.com/">
      Your Website
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
  );
}
const SearchButton = () => (
  <Button variant = "contained" sx = {{}}>
    Hello
  </Button>
  )

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container>
        <Grid item>
          <TextField label="Input"/>
          <TextField 
          label="Output"
          // InputProps={{
          //   endAdornment: (
          //     <InputAdornment position="end">
          //       <SearchButton />
          //     </InputAdornment>
          //   ),
          // }}
        variant="standard"/>
        </Grid>
        <Grid item>
          <Button variant="contained">Hello</Button>
        </Grid>
        <Stack direction="column"
          justifyContent="center"
          alignItems="flex-end"
          spacing={2}>
          <Item color="secondary">1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
          <Item>5</Item>

         </Stack>
      </Grid>
     
      <Copyright/>
    </React.Fragment>
  );
}

export default App;
