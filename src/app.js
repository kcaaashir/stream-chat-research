import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Navigation} from './navigation'

export default () => {
    return (
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    );
  };
