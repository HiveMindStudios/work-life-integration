import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

const Settings = () => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };

    return (
        <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle} style={{ width: "80%", height: "90%", elevation: 3 }}>
                    <Text>Example Modal.  Click outside this area to dismiss.</Text>
                </Modal>
            </Portal>
            <Button icon="cog" onPress={showModal} style={{ flex: 1, justifyContent: 'center', alignItems: "flex-end" }} />
        </Provider>
    );
};

export default Settings