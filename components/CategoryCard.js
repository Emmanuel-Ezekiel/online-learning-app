/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';

const CategoryCard = ({category, containerStyle}) => {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={category?.thumbnail}
        resizeMode="cover"
        style={{
          height: 150,
          width: 200,
          paddingVertical: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          justifyContent: 'flex-end',
          ...containerStyle,
        }}
      />
    </TouchableOpacity>
  );
};

export default CategoryCard;
