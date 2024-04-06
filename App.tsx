import {View, Text} from 'react-native';
import React from 'react';
import {store} from './src/app/store.ts';
import {Provider} from 'react-redux';
import Main from './src/main.tsx';
import PokemonMain from './src/pokemonMain.tsx';
import FormInput from './src/form.tsx';

export default function App() {
  return (
    <Provider store={store}>
      <FormInput />
    </Provider>
  );
}
