import React from 'react';

import { Text, Image } from 'react-native';
import { Container, HeaderContainer, SearchField } from './styles';

import logo from '../../assets/CLONESHOES.png';

const Home: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <Image source={logo} style={{}} />
        <SearchField />
      </HeaderContainer>
      <Text>teste</Text>
    </Container>
  );
};

export default Home;
