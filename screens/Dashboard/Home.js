/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {COLORS, FONTS, SIZES, icons, images, dummyData} from '../../constants';
import {IconButton} from '../../components';

const Home = () => {
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        {/* greetings */}
        <View style={styles.greetings}>
          <Text style={{...FONTS.h2}}>Hello Programmers!</Text>
          <Text style={{color: COLORS.gray50, ...FONTS.body3}}>
            Friday, 9th Sept 2023
          </Text>
        </View>
        {/*notification */}
        <IconButton
          icon={icons.notification}
          iconStyle={{
            tintColor: COLORS.black,
          }}
        />
      </View>
    );
  };

  const renderStartLearning = () => {
    return (
      <ImageBackground
        source={images.featured_bg_image}
        style={{
          alignItems: 'flex-start',
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding: 15,
        }}
        imageStyle={{borderRadius: SIZES.radius}}>
        <View>
          <Text style={{color: COLORS.white, ...FONTS.body2}}>HOW TO</Text>
          <Text style={{color: COLORS.white, ...FONTS.body2}}>
            Make your brand more visible with our check list
          </Text>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body4,
              marginTop: SIZES.radius,
            }}>
            By Scott Harris
          </Text>
        </View>
        <Image
          source={images.start_learning}
          style={{width: '100%', height: 110, marginTop: SIZES.padding}}
        />
      </ImageBackground>
    );
  };

  return (
    <View style={styles.homeContainer}>
      {/* Header */}
      {renderHeader()}

      {/* content */}
      <ScrollView
        contentContainerStyle={{paddingBottom: 150}}
        showsVerticalScrollIndicator={false}>
        {/* startLearning */}
        {renderStartLearning()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 10,
    paddingHorizontal: SIZES.padding,
    alignItems: 'center',
  },
  greetings: {
    flex: 1,
  },
});

export default Home;
