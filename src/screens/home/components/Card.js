import React from 'react';

import {
  Container,
  Cover,
  Image,
  Title,
  Content,
  Wrapper,
  Logo,
  Caption,
  Subtitle,
} from './card-styles';

const Card = () => {
  return (
    <Container>
      <Cover>
        <Image
          source={{
            uri:
              'https://3dandroidwallpaper.com/wp-content/uploads/2019/09/Gradient-HD-Wallpapers-For-Android.jpg',
          }}
        />
        <Title>Styled components</Title>
      </Cover>
      <Content>
        <Logo source={require('../../../assets/logo-react.png')} />
        <Wrapper>
          <Caption>React Native</Caption>
          <Subtitle>5 of 12 sections</Subtitle>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Card;
