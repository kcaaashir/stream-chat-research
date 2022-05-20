import React from "react";
import {chatClient} from '../config/config'
import { StyleSheet,  View, } from 'react-native';

import {
  ChannelList,
  Chat,
} from 'stream-chat-react-native';


const ChannelListScreen = ({ navigation }) => {
  
    const { setChannel } = useContext(AppContext);
  
    const memoizedFilters = useMemo(() => filters, []);
  
    return (
      <Chat client={chatClient}>
        <View style={StyleSheet.absoluteFill}>
          <ChannelList
            Preview={CustomPreview}
            // PreviewTitle={CustomPreviewTitle}
            // PreviewStatus={CustomPreviewStatus}
            filters={memoizedFilters}
            // onSelect={(channel) => {
            //   console.log("here")
            //   setChannel(channel);
            //   navigation.navigate('Channel');
            // }}
            sort={sort}
          />
        </View>
      </Chat>
    );
  };
  export default ChannelListScreen;