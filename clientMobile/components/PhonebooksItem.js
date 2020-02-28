import React, { Component } from 'react';
import { Text, View, ListView, YellowBox } from 'react-native';
import propTypes from 'prop-types';
import { ListItem } from 'native-base';

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
    render() {
        const { user: { idUser, name, phone } } = this.props;

        return (
            <ListItem key={idUser}>
                <View>
                    <Text>Name : {name}</Text>
                    <Text>phone : {phone}</Text>
                </View>
            </ListItem>
        )
    }
}

PhonebookItem.propTypes = {
    user: propTypes.object.isRequired,
};

