// import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Phonebooks from './container/Phonebooks';
import PhonebookAdd from './container/PhonebookAdd';
import PhonebookEdit from './container/PhonebookEdit';


const screens = {
  Phonebooks: {
    screen: Phonebooks,
    navigationOptions: {
      headerTitle: ' Phone book App',
      headerStyle: {backgroundColor: 'red'},
    }
  },
  PhonebookAdd: {
    screen: PhonebookAdd,
    navigationOptions:{
      // headerTitle: 'Phone book App',
      headerStyle: {backgroundColor: 'red'},

    }
  },
  PhonebookEdit:{
    screen: PhonebookEdit,
    navigationOptions:{
      headerStyle: {backgroundColor: 'red'},
    }
  }
}

// export default class App extends Component {
//   render() {
//     return (
//       <Phonebooks />
//     )
//   }
// }

const App = createStackNavigator(screens);

export default createAppContainer(App);
