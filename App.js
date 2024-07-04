import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-native-paper';

import UserContext from './context/UserContext';

// importar telas
import Login from './Screens/Login';
import Principal from './Screens/Principal';

import { UserContextGlobal } from './context/UserContext';

export default function App() {
  return (
    <Provider>
      <UserContext>
        <TrocaTela />
      </UserContext>
    </Provider>
  );
}

function TrocaTela() {
  const { logado } = React.useContext(UserContextGlobal);
  return <View style={{ flex: 1 }}>{logado ? <Principal /> : <Login />}</View>;
}
