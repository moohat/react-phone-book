import React, { Component } from 'react'
import { StyleSheet} from 'react-native'
import {
    Container,
    Content,
    Text,
    Form,
    Item,
    Label,
    Input,
    Button,
    Icon
  } from 'native-base';
import { API_URL } from '../constants';
import axios from 'axios';
//   import Icon from 'react-native-vector-icons/FontAwesome';

export default class PhonebookAdd extends Component {

    constructor(){
        super();
        this.state = {
            idUser: Date.now(),
            name : '',
            phone: '',
        }
    }

    handleSubmit() {
      const idUser = this.state.idUser;
      const name = this.state.name;
      const phone = this.state.phone;
      const {goBack} = this.props.navigation;
      if(name.length > 3 && phone.length == 12){  
        axios
          .post(`${API_URL}/phonebooks`, {
            idUser: idUser,
            name: name,
            phone: phone,
          })
          .then(result => {
            goBack();
          });
      }else{
        alert('input tidak boleh boleh kosong, nama min 3 huruf, phone number harus 12 digit')
      }
    }
    render() {
        return (
            <Container style ={{backgroundColor: '#FFF'}}>
            <Content>
              <Form>
                <Item >
                <Icon active name='md-person' />
                  <Input 
                  placeholder='Name'
                  onChangeText={name => this.setState({name})} />
                </Item>
                <Item>
            <Icon active name='md-phone-portrait' />
            <Input placeholder='Phone' onChangeText={phone => this.setState({phone})} keyboardType={'numeric'}  />
          </Item>
              </Form>
            </Content>
            
                <Button full primary onPress={() => this.handleSubmit() } style={styles.btnFooter}>
                  <Text>Submit</Text>
                </Button>
          </Container>
        )
    }
}


const styles = StyleSheet.create({
    btnFooter: {
      position:'absolute', bottom: 0, left:0, right:0
    }
  
  })