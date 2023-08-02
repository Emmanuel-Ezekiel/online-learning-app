/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated,
    StyleSheet
} from 'react-native';

import {Home, Profile, Search } from '../../screens';

import {COLORS, SIZES, FONTS, constants} from '../../constants'

const MainLayout = () => {
    return (
        <View style={styles.container}>
            <Text>MainLayout</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
    },
  });



export default MainLayout;