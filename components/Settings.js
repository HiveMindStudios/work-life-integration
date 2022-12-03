import * as React from 'react';
import { View } from 'react-native';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const Settings = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: 'white',
    flex: 1,
  };
  const settingsBack = {
    flex: 1,
  }

  return (
    <>
    </>
    // <>
    //   <Portal>
    //     <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle} style={{ width: "80%", height: "90%", elevation: 3 }}>
    //       <View style={settingsBack}>
    //         <Text>Example Modal.  Click outside this area to dismiss.</Text>
    //       </View>
    //     </Modal>
    //   </Portal>
    //   <Button icon="cog" onPress={showModal} style={{ flex: 1, justifyContent: 'center', alignItems: "flex-end" }} />
    // </>
  );
};

export default Settings