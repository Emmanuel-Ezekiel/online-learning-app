/* eslint-disable jsx-quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {SIZES, COLORS, FONTS, icons} from '../constants';

const VerticalCourseCard = ({containerStyle, course}) => {
 
  return (
    <TouchableOpacity
      style={{
        width: 270,
        ...containerStyle,
      }}>
      <Image
        source={course.thumbnail}
        resizeMode="cover"
        style={{
          width: '100%',
          height: 150,
          marginBottom: SIZES.radius,
          borderRadius: SIZES.radius,
        }}
      />
    </TouchableOpacity>
  );
};

export default VerticalCourseCard;
