import { Appbar } from 'react-native-paper';

import i18n from '../locales/i18n';

const Header = ({ backBtn, onBackBtn, title, menuBtn, onMenuBtn, statusBarHeight }) => {
  return (
    <Appbar.Header statusBarHeight={statusBarHeight}>
      {backBtn ? <Appbar.BackAction onPress={() => onBackBtn()} /> : null}
      <Appbar.Content title={i18n.t(title)} />
      {menuBtn ? <Appbar.Action icon="cog-outline" onPress={() => onMenuBtn()} /> : null}
    </Appbar.Header>
  );
};

export default Header;
