import React from 'react';

import {
  Container,
  TitleBar,
  TitleText,
  Title,
  Name,
  Avatar,
  SubTitle,
} from './styles';

import Card from './components/Card';

const Home = () => {
  return (
    <Container>
      <TitleBar>
        <Avatar
          source={{
            uri:
              'https://media.licdn.com/dms/image/C4D03AQFsDmWkxFvnCg/profile-displayphoto-shrink_200_200/0?e=1579132800&v=beta&t=ZXl9BrPrXFDeM1mGmoqaKjdMiUTcN5SiBs487FkLrJc',
          }}
        />
        <TitleText>
          <Title>Welcome back,</Title>
          <Name>Vinicius</Name>
        </TitleText>
      </TitleBar>
      <SubTitle>Continue learning </SubTitle>
      <Card />
    </Container>
  );
};

export default Home;
