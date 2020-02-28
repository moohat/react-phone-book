import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postStore } from '../action'
// import Swal from 'sweetalert2'

class AddPhonebook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: '',
            added: false
        }

        this.handleButtonAdd = this.handleButtonAdd.bind(this)
        this.handleButtonCancel = this.handleButtonCancel.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleButtonAdd() {
        this.setState({ added: true })
    }

    handleButtonCancel() {
        this.setState({ added: false })
    }


    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handlePhoneChange(event) {
        this.setState({ phone: event.target.value });
    }

    handleSubmit(e) {
        if (this.state.name && this.state.phone) {
            this.props.postStore(this.state.name, this.state.phone)
            this.setState({ name: '', phone: '' , added:false})
        }
    }
    swalsubmit = (e) => {
        e.preventDefault();
        // Swal.fire({
        //     type: 'success',
        //     title: 'Amazing',
        //     text: 'Masuk Pak Eko!',
        //   }).then((result) => {
        //       this.handleSubmit();
        //   })
          this.handleSubmit();

    }

    swalcancel =(e) => {
        // Swal.fire({
        //     type: 'warning',
        //     title: 'Oops...',
        //     text: 'siap laksanakan dicancel!',
        //   }).then((result) => {
        //       this.handleButtonCancel()
        //   })
          this.handleButtonCancel()

          
    }
    render() {
        if (this.state.added) {
            return (
                <div className="mt-3">
                    <div className="card">
                        <div className="card-header">
                            <strong>Add Form</strong>
                        </div>
                        <div className="card-body">
                            <form className="form-inline" onSubmit={this.swalsubmit}>
                                <div className="form-check mb-2 mr-sm-2">
                                    <label className="form-check-label mr-3" htmlFor="inlineFormCheck">
                                        <h6>name</h6>
                                    </label>
                                    <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2"
                                        placeholder="name" name="name" value={this.state.name} onChange={this.handleNameChange.bind(this)} required/>
                                </div>
                                <div className="form-check mb-2 mr-sm-2">
                                    <label className="form-check-label mr-3" htmlFor="inlineFormCheck">
                                        <h6>phone</h6>
                                    </label>
                                    <input type="number" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2"
                                        placeholder="phone" name="phone" value={this.state.phone} onChange={this.handlePhoneChange.bind(this)} required/>
                                </div>
                                <div className="form-check mb-2 mr-sm-2">
                                    <button type="submit" className="btn btn-success mb-2" ><i className="fa fa-check-circle"></i> Submit</button>
                                    <button type="button" className="btn btn-danger mb-2 ml-1 text-white" onClick={this.swalcancel}><i className="fa fa-ban"></i> Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <button type="button" className="btn btn-success mb-2 mt-3" onClick={this.handleButtonAdd}><i className='fa fa-plus'></i> Add</button>
            )
        }
    }
}

const mapDispatchToProps = dispatch => ({
    postStore: (name, phone) => dispatch(postStore(name, phone))
})

export default connect(
    null,
    mapDispatchToProps
)(AddPhonebook)