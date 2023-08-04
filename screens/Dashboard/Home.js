/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable eqeqeq */
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
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {COLORS, FONTS, SIZES, icons, images, dummyData} from '../../constants';
import {
  IconButton,
  TextButton,
  IconLabel,
  LineDivider,
  CategoryCard,
  HorizantalCourseCard,
} from '../../components';

const Section = ({containerStyle, title, onPress, children}) => {
  return (
    <View
      style={{
        ...containerStyle,
      }}>
      <View style={{flexDirection: 'row', paddingHorizontal: SIZES.padding}}>
        <Text style={{flex: 1, ...FONTS.h2}}>{title}</Text>
        <TextButton
          contentContainerStyle={{
            width: 80,
            borderRadius: 30,
            backgroundColor: COLORS.primary,
          }}
          label="See All"
          onPress={onPress}
        />
      </View>
      {children}
    </View>
  );
};

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

        <TextButton
          label="Start Learning"
          contentContainerStyle={{
            height: 40,
            paddingHorizontal: SIZES.padding,
            borderRadius: 20,
            backgroundColor: COLORS.white,
          }}
          labelStyle={{
            color: COLORS.black,
          }}
        />
      </ImageBackground>
    );
  };
  const renderCourses = () => {
    return (
      <FlatList
        horizontal
        data={dummyData.courses_list_1}
        listKey="Courses"
        keyExtractor={item => `Courses-${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: SIZES.padding,
        }}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{
              width: 270,
              marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
              marginRight:
                index == dummyData.courses_list_1.length - 1
                  ? SIZES.padding
                  : 0,
            }}>
            <Image
              source={item.thumbnail}
              resizeMode="cover"
              style={{
                width: '100%',
                height: 150,
                marginBottom: SIZES.radius,
                borderRadius: SIZES.radius,
              }}
            />
            <View style={{flexDirection: 'row'}}>
              <View style={styles.play}>
                <Image
                  source={icons.play}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </View>

              <View style={{flexShrink: 1, paddingHorizontal: SIZES.radius}}>
                <Text style={{flex: 1, ...FONTS.h3, fontSize: 18}}>
                  {item.title}
                </Text>

                <IconLabel
                  icon={icons.time}
                  label={item.duration}
                  containerStyle={{
                    marginTop: SIZES.base,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  };
  const renderCategories = () => {
    return (
      <>
        <Section title="Categories">
          <FlatList
            horizontal
            data={dummyData.categories}
            listKey="Categories"
            keyExtractor={item => `Cagtegories-${item.id}`}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginTop: SIZES.padding,
            }}
            renderItem={({item, index}) => (
              <CategoryCard
                category={item}
                containerStyle={{
                  marginLeft: index == 0 ? SIZES.padding : SIZES.base,
                  marginRight:
                    index == dummyData.categories.length - 1
                      ? SIZES.padding
                      : 0,
                }}
              />
            )}
          />
        </Section>
      </>
    );
  };

  const renderPopularCourses = () => {
    return (
      <Section
        title="Popular Courses"
        containerStyle={{
          marginTop: 30,
        }}>
        <FlatList
          data={dummyData.courses_list_2}
          listKey="PopularCourses"
          scrollEnabled={false}
          keyExtractor={item => `PopularCourses-${item.id}`}
          contentContainerStyle={{
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
          }}
          renderItem={({item, index, separators}) => (
            <HorizantalCourseCard
              course={item}
              separators={separators}
              containerStyle={{
                marginVertical: SIZES.padding,
                marginTop: index == 0 ? SIZES.radius : SIZES.padding,
              }}
            />
          )}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  height: 2,
                  width: '100%',
                  backgroundColor: COLORS.gray20,
                }}
              />
            );
          }}
        />
      </Section>
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

        {/* Courses */}
        <GestureHandlerRootView
          style={{
            flex: 1,
          }}>
          {renderCourses()}
        </GestureHandlerRootView>

        {/* lineDivider */}
        <LineDivider lineStyle={{marginVertical: SIZES.padding}} />

        {/* categories */}
        <GestureHandlerRootView>{renderCategories()}</GestureHandlerRootView>

        {/* popular courses */}
        <GestureHandlerRootView>
          {renderPopularCourses()}
        </GestureHandlerRootView>
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
  play: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: COLORS.primary,
  },
});

export default Home;
