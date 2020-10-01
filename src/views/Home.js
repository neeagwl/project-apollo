import React from 'react';

// Libraries
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

// Components
import About from '../components/HomePage/About';
import Contact from '../components/HomePage/Contact';
import Focus from '../components/HomePage/Focus';
import Welcome from '../components/HomePage/Welcome';

function Home() {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <Welcome />
      <About />
      <Focus />
      <Contact />
    </Container>
  );
}

export default Home;

const useStyle = makeStyles((theme) => ({
  container: {
    height: '100vh',
    padding: theme.spacing(0, 1),
  },
}));
