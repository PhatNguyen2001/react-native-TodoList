import {NativeStackScreenProps} from '@react-navigation/native-stack';
import LoginScreen from 'src/view/Screens/LoginScreen';
type MainStackParamList = {
  Home: undefined;
  LoginScreen: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'LoginScreen'
>;

export type RootStackParamList = MainStackParamList & {};
export type MainScreenProp = NativeStackScreenProps<MainStackParamList>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface MainScreenProps extends MainScreenProp {}
  }
}
