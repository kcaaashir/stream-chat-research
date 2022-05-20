import React from "react";
import {  TapGestureHandler, Animated,  Text} from 'react-native';
import {
  useMessageActionAnimation,
  MessageActionListItem,
} from 'stream-chat-react-native';
import {CustomMessageActionListItem} from './ListIem'


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
        return <MessageActionListItem action={action} actionType={actionType} {...rest} />;
      }
    };

export default CustomMessageActionListItem