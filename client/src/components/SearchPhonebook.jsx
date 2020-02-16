import React, { Component } from 'react';

class SearchPhonebook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Fname: '',
            Fphone: ''
        }
    }

    handleFilterNameChange(e) {
        this.setState({ Fname: e.target.value })
    }

    handleFilterPhoneChange(e) {
        this.setState({ Fphone: e.target.value })
    }

    

    render() {
        return (
            <div className="card mt-3">
                <div className="card-header">
                    <strong>Search Form</strong>
                </div>
                <div className="card-body">
                    <form className="form-inline">
                        <div className="form-check mb-2 mr-sm-2">
                            <label className="form-check-label mr-3" htmlFor="inlineFormCheck">
                                <h6>name</h6>
                            </label>
                            <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2"
                                placeholder="name" name="name" value={this.state.Fname} onChange={this.handleFilterNameChange.bind(this)} />
                        </div>
                        <div className="form-check mb-2 mr-sm-2">
                            <label className="form-check-label mr-3" htmlFor="inlineFormCheck">
                                <h6>phone</h6>
                            </label>
                            <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2"
                                placeholder="phone" name="phone" value={this.state.Fphone} onChange={this.handleFilterPhoneChange.bind(this)} />
                        </div>
                    </form>
                </div>
            </div>
        )
    }


}

export default SearchPhonebook;