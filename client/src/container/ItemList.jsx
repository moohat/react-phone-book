import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { putPhonebook, deleteStore } from '../action'
import Swal from 'sweetalert2'

class ItemList extends Component{
    constructor(props){
        super(props)
        this.state = {
            editButton: false,
            idUser: props.idUser,
            name: props.name,
            phone: props.phone
        }

        this.handleEditOn = this.handleEditOn.bind(this);
        this.handleEditOff = this.handleEditOff.bind(this);

    }

    handleNameChange = e =>{
        const name = e.target.name;
        this.setState({name: e.target.value})
    }

    handleEditOn(e){
        e.preventDefault();
        this.setState({editButton: true})
    }
    handleEditOff(e){
        e.preventDefault();
        this.setState({editButton: false})
    }
    handleEditSave = (e) =>{
        e.preventDefault();
        const {idUser, name, phone} = this.state;
        if(name && phone){
            this.props.putPhonebook(idUser, name, phone)
            this.setState({editButton: false});
        }
        console.log('data handleEditSave > ', idUser, name, phone);        
    }

    handleDelete = (e) =>{
        const {idUser} = this.state
        this.props.deleteStore(idUser);
    }

    swalDelete = (e) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to restore data',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete!',
            cancelButtonText: 'No, keep it'
        }).then((result) =>{
            if(result.value){
                Swal.fire(
                    'Deleted',
                    'Data has been deleted',
                    'success'
                )
                this.handleDelete();
            }else if(result.dismiss === Swal.DismissReason.cancel){
                Swal.fire(
                    'Canceled',
                    'Cancel delete data',
                    'error'
                )
            }
        })
    }

    render (){

    }
}

export default  ItemList;