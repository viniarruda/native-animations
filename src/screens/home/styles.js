import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

export const TitleBar = styled.View`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const TitleText = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

export const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: #000;
  border-radius: 22px;
  margin-left: 20px;
  margin-right: 10px;
`;

export const SubTitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;
