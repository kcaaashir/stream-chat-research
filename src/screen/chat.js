import React from "react";
import { SafeAreaView, StyleSheet,  View, } from 'react-native';
import {  useRoute } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/elements';
import {
  Channel,
  Chat,
  MessageInput,
  MessageList,
  useAttachmentPickerContext,
} from 'stream-chat-react-native';
import {CustomMessageActionListItem} from './ListIem'


const ChannelScreen = () => {
    const { channel } = useRoute().params; 
    const headerHeight = useHeaderHeight();
    const { setTopInset } = useAttachmentPickerContext();
  
    useEffect(() => {
      setTopInset(headerHeight);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [headerHeight]);
  
    return (
      <SafeAreaView>
        <Chat client={chatClient}>
          <Channel 
              Input={CustomInput} 
              MessageSimple={CustomMessageSimple} 
              ReactionList={CustomReactionList}
              channel={channel} 
              // messageActions={CustomMessageAction}
              keyboardVerticalOffset={headerHeight}>
            <View style={StyleSheet.absoluteFill}>
              <MessageList 
                FooterComponent={FooterComponent}/>
              <MessageInput />
            </View>
          </Channel>
        </Chat>
      </SafeAreaView>
    );
  };

  export default ChannelScreen;