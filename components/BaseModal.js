import * as React from 'react';
import { Modal, Portal } from 'react-native-paper';

import { UserContextGlobal } from '../context/UserContext'

const BaseModal = (props) => {

  const {visible, hideModal} = React.useContext(UserContextGlobal)

  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          {props.children}
        </Modal>
      </Portal>
  );
};

export default BaseModal;