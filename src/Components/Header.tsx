import * as React from 'react';
import { Container,Navbar } from 'react-bootstrap';

interface IHeaderProps {
}

const App: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar  fixed="top" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand>
                React typescript tutorials
            </Navbar.Brand>
        </Container>
    </Navbar>
  );
};

export default App;
