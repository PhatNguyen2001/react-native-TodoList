import React from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type InputProp = {
  onPress?: () => void;
  value?: string;
  onChangeText?: (value: any) => void;
  secureTextEntry: boolean;
};
