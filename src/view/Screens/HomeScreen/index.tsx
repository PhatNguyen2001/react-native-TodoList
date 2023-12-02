import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {HomeScreenProps} from 'src/Navigate/types';

export default function HomeScreen({
  navigation,
}: ReactNavigation.MainScreenProps) {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">HOME</Text>
    </Layout>
  );
}
