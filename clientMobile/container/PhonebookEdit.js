import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Button,
    Icon
} from 'native-base';

import { API_URL } from '../constants';
import axios from 'axios';
export default class PhonebookEdit extends Component {

    state = {
        name: this.props.navigation.state.params.name,
        phone: this.props.navigation.state.params.phone,
        idUser: this.props.navigation.state.params.idUser,
    };
    handleSubmit = () => {
        const name = this.state.name;
        const phone = this.state.phone;
        const idUser = this.state.idUser;
        const { goBack } = this.props.navigation;
        if (name.length > 3 && phone.length == 12) {
            axios
                .put(`${API_URL}/phonebooks/${idUser}`, {
                    name: name,
                    phone: phone,
                })
                .then(result => {
                    alert("Data has been update");
                    console.log(idUser);
                    
                    goBack();
                });
        } else {
            alert('input tidak boleh boleh kosong, nama min 3 huruf, phone number harus 12 digit')
        }
    }

    render() {
        return (
            // <View>
            //     <Text> {this.state.name} </Text>
            //     <Text> {this.state.phone} </Text>
            // </View>

            <Container style={{ backgroundColor: '#FFF' }}>
                <Content>
                    <Form>
                        <Item >
                            <Icon active name='md-person' />
                            <Input
                                onChangeText={name => this.setState({ name })}
                                value={this.state.name}
                            />
                        </Item>
                        <Item>
                            <Icon active name='md-phone-portrait' />
                            <Input onChangeText={phone => this.setState({ phone })} keyboardType={'numeric'} value={this.state.phone} />
                        </Item>
                    </Form>
                </Content>

                <Button full primary onPress={() => this.handleSubmit()} style={styles.btnFooter}>
                    <Text style={styles.txtUpdate}>Update</Text>
                </Button>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    btnFooter: {
        position: 'absolute', bottom: 0, left: 0, right: 0,
    },
    txtUpdate: {
        fontSize: 15, color: 'white'
    }

})
