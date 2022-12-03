import { Modal, Portal, Text, Appbar, Button } from 'react-native-paper';
import React, { useState } from 'react';

import i18n from '../locales/i18n';
import Settings from './Settings';

const Header = ({ backBtn, onBackBtn, title, menuBtn, onMenuBtn, statusBarHeight }) => {

  return (
    <Appbar.Header statusBarHeight={statusBarHeight}>
      {backBtn ? <Appbar.BackAction onPress={() => onBackBtn()} /> : null}
      <Appbar.Content title={i18n.t(title)} style={{ flex: 1 }} />
      {menuBtn ? <Appbar.Action icon="cog-outline" onPress={() => onMenuBtn()} /> : null}
    </Appbar.Header>
  );
};

export default Header;
