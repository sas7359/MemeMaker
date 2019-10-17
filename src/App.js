import React from 'react';
import SiteContainer from './components/SiteContainer'; 
import NavigationBar from './components/NavigationBar';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <NavigationBar></NavigationBar>
        <SiteContainer></SiteContainer>
      </Container>
    </div>
  );
}

export default App;
