import styled from 'styled-components/native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Retangle = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 20px 40px 20px 40px;
  border-radius: 10px;
`;

export const Warning = styled.Text`
  color: red;
`;

export const RNcamera = styled(Camera)`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  text-align: center;
  margin-top: 60px;
`;

export const Footer = styled.View`
  position: relative;
  align-items: center;
  height: 80px;
`;

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  bottom: 25px;
`;

export const IconBack = styled(Ionicons)``;

export const ButtonCapture = styled.TouchableOpacity`
  border-radius: 25px;
  width: 50px;
  height: 50px;
  background-color: #fff;
  position: absolute;
  bottom: 20px;
  align-self: center;
`;
