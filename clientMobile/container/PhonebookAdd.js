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
//   import Icon from 'react-native-vector-icons/FontAwesome';

export default class PhonebookAdd extends Component {

    constructor(){
        super();
        this.state = {
            userId: '',
            name : '',
            phone: '',
        }
    }
    render() {
        return (
            <Container style ={{backgroundColor: '#FFF'}}>
            <Content>
              <Form>
                <Item>
                <Icon active name='md-person' />
                  <Input 
                  placeholder='Name'
                  onChangeText={name => this.setState({name})} />
                </Item>
                <Item>
            <Icon active name='md-phone-portrait' />
            <Input placeholder='Icon Alignment in Textbox'/>
          </Item>
              </Form>
            </Content>
                <Button full primary  style={styles.btnFooter}>
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