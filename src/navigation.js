
import React from "react";
import { NavigationContainer, useNavigation,  useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    OverlayProvider,
  } from 'stream-chat-react-native';

const Stack = createStackNavigator();

const AppContext = React.createContext();

const Navigation = () => {
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

export default Navigation;