import React, { Component } from 'react'
import { Text, View, FlatList, SafeAreaView, YellowBox } from 'react-native';
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
//avoid yellow error componentWillReceiveProps
import _ from 'lodash';

YellowBox.ignoreWarnings(['componentWillReceiveProps']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('componentWillReceiveProps') <= -1) {
        _console.warn(message);
    }
};


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
        axios.get(`${API_URL}/phonebooks`).then((result) => {
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
                    renderItem={({ item }) => <PhonebooksItem user={item} 
                    // edit={() => this.props.navigation.navigate('PhonebookEdit', {item})}
                    onPress={() => this.props.navigation.navigate('PhonebookEdit', {...item})}
                    />}
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


