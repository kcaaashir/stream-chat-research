import React, { useContext, useEffect, useMemo, useState } from 'react';
import { LogBox, SafeAreaView, StyleSheet, TapGestureHandler, Animated,  View, Text, Button, Pressable } from 'react-native';
import { NavigationContainer, useNavigation,  useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useHeaderHeight } from '@react-navigation/elements';
import  moment  from 'moment'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StreamChat } from 'stream-chat';
import {
  Channel,
  ChannelList,
  Chat,
  MessageInput,
  MessageList,
  OverlayProvider,
  ChannelPreviewStatus,
  useMessageActionAnimation,
  ChannelAvatar,
  ReactionList,
  ImageUploadPreview,
  AutoCompleteInput,
  FileUploadPreview,
  useOverlayContext,
  useMessageInputContext,
  MessageSimple,
  OverlayReactions,
  MessageActionListItem,
  useAttachmentPickerContext,
} from 'stream-chat-react-native';
import {CustomMessageActionListItem} from './ListIem'

LogBox.ignoreAllLogs(true);

const chatClient = StreamChat.getInstance('bw8596mv3hte');
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoieWFrdXphIn0.yAbrr92x6IhDfNEm6Lwt21fa-i-s8JXOqQnPpNxY0No';
const user = { id: 'yakuza' };

const userToken2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYXNoaXIifQ.CP4QAmiEed5iQP3bOZMmUVxp84Nur0pNkd6Js1uGmVE';

const user2 = { id: 'ashir' }

const filters = {
  members: { $in: ['yakuza','ashir' ] },
  type: 'messaging',
};

const sort = { last_message_at: -1 };

const CustomPreviewTitle = ({ channel }) => {
  console.log(channel.data)
  return(
  <Text style={{color: "red"}}>
    {channel.data.name}
  </Text>
  )
}
customDateFormatter = (date) => {
  
  
 
}


const CustomPreviewStatus = (props) => {
    // console.log(props)
  // const formattedDate = useMemo(() => customDateFormatter(latestMessagePreview), [latestMessagePreview]);
  // return <ChannelPreviewStatus formatLatestMessageDate={formattedDate} />;
  // retr
};



const CustomPreview = ({channel, latestMessagePreview, }) => {
 const navigation = useNavigation();

  onSelectChannel = () => {
    navigation.navigate('Channel',{channel: channel});
  }
  const {messageObject} = latestMessagePreview


  // console.log("latestMessage", messageObject)
    return(
      <Pressable onPress={onSelectChannel}>
      <View>
      <View style={{ marginBottom: 4, height: 70, flexDirection: "row" }}>
      <TouchableOpacity
          style={{marginTop:20, marginLeft:4, marginRight:8}}
          disallowInterruption={true}
          onPress={() => {
            /** Handler for press action */
          }}
         
        >
          <ChannelAvatar style={{height:150}} channel={channel} />
        </TouchableOpacity>
        <View style={{fontSize:12, marginTop:20}}>
          <Text style={{color: "black"}}>
          {channel.data.name}
          </Text>
          <Text style={{color: "lightblue"}}>
            {/* {messageObject.text} */}
          {/* {JSON.stringify(messageObject)} */}
          </Text>
        </View>
        
        <Text style={{marginLeft: 180, marginTop: 20, color: "black"}}>
            {moment(channel.data.last_message_at).startOf('day').fromNow()}
        </Text> 
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 0.4,
        }}
      />
      </View>
      </Pressable>
    )
}

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

const CustomInput = () => {
  const { sendMessage, text, toggleAttachmentPicker, openCommandsPicker } = useMessageInputContext();

  const styles = StyleSheet.create({
    flex: { flex: 1 },
    fullWidth: {
      width: '100%',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    inputContainer: {
      height: 40,
    },
  });

  return (
    <View style={styles.fullWidth}>
      <ImageUploadPreview />
      <FileUploadPreview />
      <View style={[ styles.inputContainer]}>
        <AutoCompleteInput />
      </View>
      <View style={[styles.fullWidth, styles.row]}>
        <Button title='Attach' onPress={toggleAttachmentPicker} />
        <Button title='Commands' onPress={openCommandsPicker} />
        <Button title='Send' onPress={sendMessage} disabled={!text} />
      </View>
    </View>
  );
}

const FooterComponent = () => {
  return(
    <View>
      <Text>
        FooterComponent
      </Text>
    </View>
  )
}

const CustomMessageSimple = () => {
  return (
      <MessageSimple />
  )
}

const CustomMessageAction = () => {
  return(
    <View>
      <Text>
        Custom Actions
      </Text>
    </View>
  )
}

const CustomReactionList = () => {
  return(
    <View>
       <ReactionList fill={'#00DDD'} stroke={'#fffff'} reactions={[
  {
    own: true,
    type: 'love',
  },
  {
    own: true,
    type: 'haha',
  },
]} />
    </View>
  )
}

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

// const CustomMessageActionListItem = ({ action, actionType, ...rest }) => {
//   const { onTap } = useMessageActionAnimation({ action: action });
//   if (actionType === 'pinMessage') {
//     return (
//       <TapGestureHandler onHandlerStateChange={onTap}>
//         <Animated.View>
//           <Text>{actionType}</Text>
//         </Animated.View>
//       </TapGestureHandler>
//     );
//   } else if (actionType === 'muteUser') {
//     return (
//       <TapGestureHandler onHandlerStateChange={onTap}>
//         <Animated.View>
//           <Text>{actionType}</Text>
//         </Animated.View>
//       </TapGestureHandler>
//     );
//   } else {
//     return <MessageActionListItem action={action} actionType={actionType} {...rest} />;
//   }
// };

const CustomOverlayReaction = ({data}) => {
  console.log("overlayReactions", data)
  return(
    <ReactionList reactions={[
      {
        own: true,
        type: 'love',
      },
      {
        own: false,
        type: 'haha',
      },
    ]}/>
  )
}

const Stack = createStackNavigator();

const AppContext = React.createContext();

const App = () => {
  const { bottom } = useSafeAreaInsets();

  const [channel, setChannel] = useState();
  const [clientReady, setClientReady] = useState(false);

  useEffect(async () => {
    const setupClient = async () => {
     
      await chatClient.connectUser(user, userToken);
    
      setClientReady(true);
    };

    setupClient();
  }, []);

  return (
    <NavigationContainer>
      <AppContext.Provider value={{ channel, setChannel }}>
        <OverlayProvider 
            // OverlayReactionList={CustomOverlayReaction}
            OverlayReactionsAvatar={() => null}
            // MessageActionListItem={CustomMessageActionListItem} 
            MessageActionList={CustomMessageActionList} 
            bottomInset={bottom}
        >
          {clientReady && (
            <Stack.Navigator
              initialRouteName='ChannelList'
              screenOptions={{
                headerTitleStyle: { alignSelf: 'center', fontWeight: 'bold' },
              }}
            >
              <Stack.Screen
                component={ChannelScreen}
                name='Channel'
                options={() => ({
                  headerBackTitle: 'Back',
                  headerRight: () => <></>,
                  headerTitle: channel?.data?.name,
                })}
              />
              <Stack.Screen component={ChannelListScreen} name='ChannelList' options={{ headerTitle: 'Channel List' }} />
            </Stack.Navigator>
          )}
        </OverlayProvider>
      </AppContext.Provider>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
};