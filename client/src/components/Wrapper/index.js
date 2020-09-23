import React from 'react';
import Container from '@material-ui/core/Container';

function Wrapper(props) {
  return (
    <Container maxWidth={ false } disableGutters={ true }>
      { props.children }
    </Container>
  );
}

export default Wrapper;
