import {NativeStackScreenProps} from '@react-navigation/native-stack';

type MainStackParamList = {
  Home: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type RootStackParamList = MainStackParamList & {};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
