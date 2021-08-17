import React, {useEffect, useState} from 'react';
import { View} from 'react-native';
import {Button} from 'native-base';
import style from './dateAndTimeTabStyle';
function AddBookingButton(props) {
  
  return (
    <View>
      
        <Button
          style={style.buttonStyle}
          onPress={() => props.handleSingleIndexSelect(1)}>
          Next
        </Button>

    </View>
  );
}

export default AddBookingButton;
