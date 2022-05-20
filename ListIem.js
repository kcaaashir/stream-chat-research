import React from 'react';
import {TapGestureHandler} from 'react-native-gesture-handler'
import {MessageActionListItem, useMessageActionAnimation} from 'stream-chat-react-native';
import {Animated, View, Text} from 'react-native'



const CustomMessageActionListItem = ({ action, actionType, ...rest }) => {
    const { onTap } = useMessageActionAnimation({ action: action });
    if (actionType === 'pinMessage') {
      return (
        <TapGestureHandler onHandlerStateChange={onTap}>
          <Animated.View>
            <Text>{actionType}</Text>
          </Animated.View>
        </TapGestureHandler>
      );
    } else if (actionType === 'muteUser') {
      return (
        <TapGestureHandler onHandlerStateChange={onTap}>
          <Animated.View>
            <Text>{actionType}</Text>
          </Animated.View>
        </TapGestureHandler>
      );
    } else {
    //   return <MessageActionListItem action={action} actionType={actionType} {...rest} />;
    }
  };

  export default CustomMessageActionListItem;
  