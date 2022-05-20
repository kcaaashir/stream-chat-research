import React from "react";
import {  View, Text,  Pressable } from 'react-native';
import {  useNavigation,   } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  moment  from 'moment';
import {
  ChannelAvatar,
} from 'stream-chat-react-native';


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

   export default CustomPreview;