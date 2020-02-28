import React, { Component } from 'react'
import { Text, View, FlatList, SafeAreaView } from 'react-native';
import {
    Container,
    Content,
    List,
    Fab,
    Icon,
} from 'native-base';

import axios from 'axios';
import { API_URL } from '../constants';
import PhonebooksItem from '../components/PhonebooksItem';



export default class Phonebooks extends Component {
    constructor() {
        super();
        this.state = {
            // users: [],
            // users: '',
        };
    }

    componentDidMount() {
        const self = this;
        axios.get(API_URL).then((result) => {
            // console.log(result.data);
            self.setState({
                users: result.data,
            });
        })
            .catch(error => console.log(error));

        // this.setState({
        //     users:[
        //         {id: 1, name:"taufik"},
        //         {id: 2, name:"syamil"},
        //         {id: 3, name:"sakha"},

        //     ]
        // })
    }
    _keyExtractor = (item, index) => item.idUser;

    render() {
        return (
            // <Container>
            //     <Content>
            //         <List>
            <SafeAreaView>

                <FlatList
                    data={this.state.users}
                    keyExtractor={this._keyExtractor}
                    renderItem={({ item }) => <PhonebooksItem user={item} />}
                />

                <Fab
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('PhonebookAdd')}>
                    <Icon name="md-person-add" />
                </Fab>
            </SafeAreaView>
            //         </List>
            //     </Content>


            // </Container>
        );
    }
}


