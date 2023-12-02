import React from 'react';
import {TouchableWithoutFeedback, StyleSheet, View} from 'react-native';
import {
  Icon,
  IconElement,
  Input,
  InputProps,
  Text,
} from '@ui-kitten/components';
import styles from './styles';
import {InputProp} from './types';

const AlertIcon = (props: any): IconElement => (
  <Icon {...props} name="alert-circle-outline" />
);

export const InputThemingShowcase = ({
  value,
  onChangeText,
  secureTextEntry,
  onPress,
}: InputProp): React.ReactElement => {
  const renderIcon = (props: any): React.ReactElement => (
    <TouchableWithoutFeedback onPress={onPress}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const renderCaption = (): React.ReactElement => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>
          Should contain at least 8 symbols
        </Text>
      </View>
    );
  };

  return (
    <Input
      value={value}
      placeholder="Place your Text"
      caption={renderCaption}
      accessoryRight={renderIcon}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
    />
  );
};

export default InputThemingShowcase;
