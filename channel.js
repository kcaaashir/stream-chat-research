    import React, { useEffect, useState } from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native';
import { StreamChat } from 'stream-chat';
import { Channel, Chat, DeepPartial, Theme,  MessageInput, MessageList, OverlayProvider as ChatOverlayProvider } from 'stream-chat-react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoieWFrdXphIn0.yAbrr92x6IhDfNEm6Lwt21fa-i-s8JXOqQnPpNxY0No';

const user = { id: 'yakuza' };

const chatClient = StreamChat.getInstance('bw8596mv3hte');
const connectUserPromise = chatClient.connectUser(user, userToken);

const channel = chatClient.channel('messaging', 'movie',{name: 'Movie Channel'});

const ChannelScreen = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <ChatOverlayProvider bottomInset={bottom} topInset={0}>
      <SafeAreaView>
        <Chat client={chatClient}>
          {/* Setting keyboardVerticalOffset as 0, since we don't have any header yet */}
          <Channel channel={channel} keyboardVerticalOffset={0}>
            <View style={StyleSheet.absoluteFill}>
              <MessageList />
              <MessageInput />
            </View>
          </Channel>
        </Chat>
      </SafeAreaView>
    </ChatOverlayProvider>
  );
};

const App = () => {
  const [ready, setReady] = useState();

  useEffect(() => {
    const initChat = async () => {
      await connectUserPromise;
      await channel.watch();
      setReady(true);
    };

    initChat();
  }, []);


  if (!ready) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ChannelScreen channel={channel} />
    </SafeAreaProvider>
  );
}

export default App;