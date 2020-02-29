import React, { Component } from 'react';
import { Text, View, ListView, YellowBox } from 'react-native';
import propTypes from 'prop-types';
import { ListItem, Icon, Button, SwipeRow } from 'native-base';

import { API_URL } from '../constants';
import axios from 'axios';

//avoid yellow error componentWillReceiveProps
import _ from 'lodash';

YellowBox.ignoreWarnings(['componentWillReceiveProps']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('componentWillReceiveProps') <= -1) {
        _console.warn(message);
    }
};
//


export default class PhonebookItem extends Component {
  
  handleDelete(idUser){
    alert(`data idUser: ${idUser} akan dihapus`);
    axios.delete(`${API_URL}/phonebooks/${idUser}`)
  }
    render() {
        const { user: { idUser, name, phone, } } = this.props;
       

        return (
            // <ListItem key={idUser}>
            //     <View style={{marginRight: 10, borderRadius: 35, height: 35, width: 35, backgroundColor: '#00ced1', alignItems:'center', justifyContent:'center' }}>
            //         <Icon active name='md-person' />                
            //     </View>
            //     <View>
            //         <Text>Name : {name}</Text>
            //         <Text>phone : {phone}</Text>
            //     </View>
            // </ListItem>

            <SwipeRow 
            key={idUser}
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              // <Button success onPress={this.props.edit}>
              <Button success onPress={this.props.onPress}>
                <Icon active name="md-create" />
              </Button>
            }
            body={
                    
              <View style={{flexDirection: 'row'}}>
                   <View style={{marginHorizontal: 10, borderRadius: 35, height: 35, width: 35, backgroundColor: '#00ced1', alignItems:'center', justifyContent:'center' }}>
                    <Icon active name='md-person' />                
                 </View>
                 <View>

                 <Text>Name : {name}</Text>
                   <Text>phone : {this.props.user.phone}</Text>
                 </View>
              </View>
            }
            right={
              <Button danger onPress={() => this.handleDelete(idUser)}>
                <Icon active name="trash" />
              </Button>
            }
            />
        )
    }
}

PhonebookItem.propTypes = {
    user: propTypes.object.isRequired,
};

