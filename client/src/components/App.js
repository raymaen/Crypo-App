import React from "react";
import { Provider } from "react-redux";
import store from "../store";

import Header from "./layout/Header";
import Hero from "./layout/HeroBanner";
import DaySelect from './dynamic/DaySelect'

import {getCryptoData} from '../actions/cryptoActions'

class App extends React.Component {

  componentDidMount() {
    store.dispatch(getCryptoData())
  }
  

  render() {
    return (
      <Provider store={store}>
        <Header />
        <Hero />
        <DaySelect/>
      </Provider>
    );
  }
}

export default App;
