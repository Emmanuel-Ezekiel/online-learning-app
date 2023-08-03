/* eslint-disable keyword-spacing */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable comma-dangle */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  StyleSheet,
} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {Home, Profile, Search} from '../../screens';
import {COLORS, SIZES, FONTS, constants} from '../../constants';

const bottom_tabs = constants.bottom_tabs.map(bottom_tabs => ({
  ...bottom_tabs,
  ref: React.createRef(),
}));

const TabIndicator = ({measureLayout, scrollX}) => {
  const inputRange = bottom_tabs.map((_, i) => i * SIZES.width);

  const TabIndicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map(measure => measure.width),
  });

  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measureLayout.map(measure => measure.x),
  });

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: 0,
        height: '100%',
        width: TabIndicatorWidth,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.primary,
        transform: [
          {
            translateX,
          },
        ],
      }}
    />
  );
};

const Tabs = ({scrollX, onBottomTabPress}) => {
  const containerRef = React.useRef();
  const [measureLayout, setMeasureLayout] = React.useState([]);

  React.useEffect(() => {
    let ml = [];

    bottom_tabs.forEach(bottom_tab => {
      bottom_tab?.ref?.current?.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          ml.push({
            x,
            y,
            width,
            height,
          });

          if (ml.length === bottom_tabs.length) {
            setMeasureLayout(ml);
          }
        },
      );
    });
  }, [containerRef.current]);

  return (
    <View style={styles.Tabs} ref={containerRef}>
      {/* Tab Indicator */}
      {measureLayout.length > 0 && (
        <TabIndicator measureLayout={measureLayout} scrollX={scrollX} />
      )}
      {/* Tab */}
      {bottom_tabs.map((item, index) => {
        return (
          <TouchableOpacity
            key={`BottomTab-${index}`}
            ref={item.ref}
            style={styles.touchableContainer}
            onPress={() => onBottomTabPress(index)}>
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
            <Text style={{marginTop: 3, color: COLORS.white, ...FONTS.h3}}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const MainLayout = () => {
  const flatListRef = React.useRef();
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const onBottomTabPress = React.useCallback(bottomTabIndex => {
    flatListRef?.current?.scrollToOffset({
      offset: bottomTabIndex * SIZES.width,
    });
  });

  const rendContent = () => {
    return (
      <View style={styles.renderContainer}>
        <Animated.FlatList
          ref={flatListRef}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={item => `Main-${item.id}`}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          renderItem={({item, index}) => {
            return (
              <View style={styles.renderItem}>
                {item.label == constants.screens.home && <Home />}
                {item.label == constants.screens.profile && <Profile />}
                {item.label == constants.screens.search && <Search />}
              </View>
            );
          }}
        />
      </View>
    );
  };

  const renderBottomTab = () => {
    return (
      <View style={styles.renderBottom}>
        <Shadow style={styles.shadowContainer}>
          <View style={styles.shadowItem}>
            <Tabs scrollX={scrollX} onBottomTabPress={onBottomTabPress} />
          </View>
        </Shadow>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Content */}
      {rendContent()}

      {/* Bottom Tab */}
      {renderBottomTab()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  renderContainer: {
    flex: 1,
  },
  renderItem: {
    height: SIZES.height,
    width: SIZES.width,
  },
  renderBottom: {
    marginBottom: 20,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.radius,
  },
  shadowItem: {
    flex: 1,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary3,
  },
  shadowContainer: {
    width: SIZES.width - SIZES.padding * 2,
    height: 85,
  },
  Tabs: {
    flex: 1,
    flexDirection: 'row',
  },
  touchableContainer: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: 'blue',
  },
});

export default MainLayout;
