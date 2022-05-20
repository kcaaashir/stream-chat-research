import React from "react";
import {  View,  } from 'react-native';
import {
  useOverlayContext,
  MessageActionListItem,
} from 'stream-chat-react-native';


const CustomMessageActionList = () => {
    const { setOverlay } = useOverlayContext();
    const messageActions = [
      {
        action: function () {
          Alert.alert('Edit Message action called.');
          setOverlay('none');
        },
        actionType: 'editMessage',
        title: 'Edit messagee',
      },
      {
        action: function () {
          Alert.alert('Delete message action');
          setOverlay('none');
        },
        actionType: 'deleteMessage',
        title: 'Delete Message',
      },
    ];
    return (
      <View style={{ backgroundColor: 'white' , width: "100%", height: "50%", marginTop: 20, borderTopLeftRadius: 20 , borderTopRightRadius: 20}}>
        {messageActions.map(({ actionType, ...rest }) => (
          <MessageActionListItem actionType={actionType} key={actionType} {...rest} />
        ))}
      </View>
    );
  }

export default CustomMessageActionList;
