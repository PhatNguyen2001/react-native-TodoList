import React from 'react';
import {Layout, Text, Input, Button} from '@ui-kitten/components';
import styles from './styles';
import {LoginScreenProps} from 'src/Navigate/types';
import {View} from 'react-native';
import InputThemingShowcase from 'src/components/InputLogin';

export default function LoginScreen({navigation}: LoginScreenProps) {
  const [value, setValue] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [password, setPassword] = React.useState('');

  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!secureTextEntry);
  };

  const onNavigation = () => {
    navigation.navigate('Home');
  };

  return (
    <Layout style={styles.container}>
      <Text style={{marginHorizontal: '8%', marginTop: 20}} category="h1">
        Đăng nhập
      </Text>
      <Text
        style={{
          marginHorizontal: '8%',
          marginTop: 10,
          color: '#8F9BB3',
        }}>
        Nhập mật khẩu của bạn để đăng nhập
      </Text>

      <Layout style={styles.body}>
        <Input
          placeholder="Nhập vào email"
          value={value}
          onChangeText={nextValue => setValue(nextValue)}
        />
        <InputThemingShowcase
          onPress={toggleSecureEntry}
          onChangeText={value => setPassword(value)}
          value={password}
          secureTextEntry={secureTextEntry}
        />
      </Layout>
      <Layout style={styles.containerButton} level="1">
        <Button onPress={() => onNavigation()}>Đăng nhập</Button>
      </Layout>
    </Layout>
  );
}
