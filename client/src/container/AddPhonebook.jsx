import React, { Component } from "react";
import { connect } from "react-redux";
import { postStore } from "../action/index";
import Swal from "sweetalert2";

class AddPhonebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      added: false // default condition : false. jika kondisi true, maka form add phone book muncul
    };

    this.handleButtonAdd = this.handleButtonAdd.bind(this);
    this.handleButtonCancel = this.handleButtonCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleButtonAdd() {
    this.setState({ added: true });
  }

  handleButtonCancel() {
    // this.setState({ added: false });
    this.setState( state =>({
        added: !state.added
    }))
  }

  handleSubmit() {
    // if (this.state.name && this.state.phone) {
    //   this.props.postStore(this.state.name, this.state.phone);
    //   this.setState({ name: "", phone: "", added: false });
    // }
    alert('nama: '+this.state.name+ "phone "+ this.state.phone)
  }

  handleInputChange = (event) =>{
      this.setState({[event.target.name]: event.target.value})
  }

  swalSubmit = event => {
    event.preventDefault();
    Swal.fire({
      type: "success",
      title: "Data",
      text: "Data berhasil diinput"
    }).then(result => {
      this.handleSubmit();
    });
  };

  swalCancel = (event) => {
    Swal.fire({
      type: "warning",
      title: "Oopss",
      text: "Cancel input data"
    }).then(result => {
      this.handleButtonCancel();
    });
  };

  render() {
    if (this.state.added) {
      return (
        <div>
          <p>halaman form</p>
          <div className="mt-3">
            <div className="container">
              <div className="card-header">
                <strong>Add Form</strong>
              </div>
              <div className="card-body">
                <form className="form-inline" onSubmit={this.swalSubmit}>
                  <div className="form-check mb-2 mr-sm-2">
                    <label
                      className="form-check-label mr-3"
                      htmlFor="inlineFormCheck"
                    >
                      <h6>name</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control mb-2 mr-sm-2"
                      id="inlineFormInputName1"
                      placeholder="name"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-check mb-2 mr-sm-2">
                    <label
                      className="form-check-label mr-3"
                      htmlFor="inlineFormCheck"
                    >
                      <h6>phone</h6>
                    </label>
                    <input
                      type="text"
                      className="form-control mb-2 mr-sm-2"
                      id="inlineFormInputName2"
                      placeholder="phone"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-check mb-2 mr-sm-2">
                      <button type="submit" className="btn btn-success mb-2"><i className="fa fa-check-circle"></i> Submit</button>
                      <button type="submit" className="btn btn-danger mb-2 ml-1 text-white" onClick={this.handleButtonCancel}><i className="fa fa-ban"></i> Cancel</button>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <button
          type="button"
          className="btn btn-success mb-2 mt-3"
          onClick={this.handleButtonAdd}
        >
          <i className="fa fa-plus"></i>
        </button>
      );
    }
  }
}

const mapDispatchToProps = dispatch => ({
  postStore: (name, phone) => dispatch(postStore(name, phone))
});

// export default connect(
//     null,
//     mapDispatchToProps
// )(AddPhonebook)

export default AddPhonebook;
