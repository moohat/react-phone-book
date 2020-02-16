import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteStore } from '../action';
import axios from 'axios';

// import ListPhonebook from '../components/ListPhonebook';

class ItemList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idUser: '',
            name: '',
            phone: '',
            added: false,
            content: []
        }

        this.handleButtonDelete = this.handleButtonDelete.bind(this)
    }

    handleButtonDelete = (e) => {

        // e.preventDefault();
        const id = this.state.idUser;
        const url = `http://localhost:3001/api/phonebooks/'${id}'`;


        axios.delete(url)
            .then(response => {
                this.setState(previousState => {
                    return {
                        content: this.state.content.filter(item => item._id != previousState._id)
                    }
                })
                console.log(response.data);

            })
            .catch((err) => {
                console.log(err);

            })
    }

    render() {
        return (

            <tbody>
                {this.state.content.map((item, index) => {

                    return (
                        <tr key={index}>
                            <th scope="row" >{this.props.idUser}</th>
                            <td>{this.props.name}</td>
                            <td>{this.props.phone}</td>
                            <td>
                                <button type="submit" className="btn btn-success mb-2">Edit</button>
                                <button type="submit" className="btn btn-danger mb-2 ml-1 text-white" >Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        )

    }
}



const mapDeleteToProps = (dispatch, ownProps) => ({
    onDelete: () => dispatch(deleteStore(ownProps.id)),
})


export default connect(
    null,
    mapDeleteToProps
)(ItemList)
