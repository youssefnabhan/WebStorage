import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        CloudVault
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
//{listing, props.setListing ,socket, props.setSocket}
export default function SignInSide({listing,setListing,socket,setSocket}) {

  
  const getListing = () => listing
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
     
    const user = data.get('email')
    const pass = data.get('password')
    var fileb = false;
    var filename = ""
    const sock = new WebSocket('ws://localhost:12000');
    sock.addEventListener('open', function (event) {
      console.log("connection successful")
      sock.send(`USER ${user}`)
    });
    sock.addEventListener('message', (e) => {
      const message = e.data

      console.log(message)

      if(fileb){
        console.log('downloading')
        var objectUrl = URL.createObjectURL(message);
        var link=document.createElement('a');
        link.href=objectUrl
        link.download=`${filename}`;
        link.click();
        filename=""
        fileb = false
      }
      if (message === "USER OK") {
        sock.send(`PASS ${pass}`)

      }
      else if (message === "OK") {
        sock.send("LIST")
        console.log('access granted')
      }
      else if (message.split(" ")[0] === "LIST") {
        //console.log(JSON.parse(message.slice(5)))
        const list = JSON.parse(message.slice(5))
        localStorage.setItem('list',JSON.stringify(list))
        setListing(list)
        
        //console.log("loaded list ", listing)
        setSocket(sock)
        localStorage.setItem('socket', sock)
      }

      else if (message.split(" ")[0] === "DEL") {
        const filename = message.split(" ")[1]
        console.log(getListing())
        const i = getListing().indexOf(filename)
        console.log("old ", listing, i, filename)
        const newList = getListing().splice(i , 1)
        console.log("new ", newList)
        setListing(newList)
        localStorage.setItem('list', JSON.stringify(newList))
      }

      else if (message.split(" ")[0] === "file"){
        filename = message.split(" ")[1] 
        fileb =true;
        sock.send("SEND")
      }
      else if(message.split(" ")[0] == "NEW"){
        const newList = listing
        const filename = message.split(" ")[1]
        newList.push(filename)
        setListing(newList)
      }
     
      


    })

    sock.addEventListener('close', () => {
      console.log("connection failed")
      setSocket(null);
      localStorage.setItem('socket', null)
      localStorage.setItem('list', null)

    })
    // const downloadFile = (blob,filename,ext) => {
    //     
    // }
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}