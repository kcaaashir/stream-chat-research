
import React from "react";
import {StyleSheet,  View,  Button, } from 'react-native';

import {
  ImageUploadPreview,
  AutoCompleteInput,
  FileUploadPreview,
  useMessageInputContext,
} from 'stream-chat-react-native';


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

  export default CustomInput;