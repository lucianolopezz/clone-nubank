import styled from 'styled-components/native';
import { general } from '../../../styles';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 80px;
  align-self: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
`;

export const ContainerBgmImage = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
  padding: 20px;
`;

export const Button = styled.TouchableOpacity`
  ${general.button};
  border-radius: 8px;
  background-color: #ccc;
`;

export const ButtonTitle = styled.Text`
  font-weight: 500;
  font-size: 16px;
  color: #612F74;
  text-transform: uppercase;
`;

export const Description = styled.Text`
  font-weight: 500;
  font-size: 40px;
  color: #fff;
  margin-bottom: 10px;
`;
