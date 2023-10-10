// import React from 'react';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import makeStyles from '@mui/material';
// import firebase from 'firebase/app';
// import 'firebase/auth';

// const useStyles = makeStyles({
//   container: {
//     padding: '2rem 0',
//   },
//   button: {
//     margin: '1rem 0',
//   }
// });

// function SignIn() {
//   const classes = useStyles();

//   const handleGoogleLogin = async () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     try {
//       await firebase.auth().signInWithPopup(provider);
//     } catch (error) {
//       console.error('Google sign-in error', error);
//     }
//   };

//   return (
//     <Container className={classes.container} maxWidth="xs">
//       <Typography variant="h4" align="center">Sign In</Typography>
//       <Button
//         fullWidth
//         className={classes.button}
//         variant="contained"
//         color="primary"
//         onClick={handleGoogleLogin}
//       >
//         Sign In with Google
//       </Button>
//     </Container>
//   );
// }

// export default SignIn;
