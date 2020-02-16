import React, { Component } from 'react';
import ItemList from '../container/ItemList';
import { connect } from 'react-redux';
import { LoadItem } from '../action';


class ListPhonebook extends Component {
    constructor(){
        super();
        this.state = {
            idUser: '',
            name: '',
            phone: '',
            nameFilter: '',
            phoneFilter: ''
        }
    }

    componentDidMount() {
        this.props.LoadItem();
    }

    handelChange = e => {
        const name = e.target.name;
        this.setState({ [name]: e.target.value })
    }
    
    filter = () => {
        const {nameFilter, phoneFilter} = this.state;
        return (
            <div>
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
                                <input type="text" 
                                className="form-control mb-2 mr-sm-2" 
                                id="inlineFormInputName2"
                                placeholder="name" 
                                name="nameFilter" 
                                value={nameFilter}
                                onChange={this.handelChange}/>
                            </div>

                            <div className="form-check mb-2 mr-sm-2">
                                <label className="form-check-label mr-3" htmlFor="inlineFormCheck">
                                    <h6>phone</h6>
                                </label>
                                <input type="text" 
                                className="form-control mb-2 mr-sm-2" 
                                id="inlineFormInputName2"
                                placeholder="phone" 
                                name="phoneFilter" 
                                value={phoneFilter}
                                onChange={this.handelChange}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

   


    render() {
        let { phonebooks } = this.props;
        console.log('data phonebooks > ', phonebooks);
        
        let {nameFilter, phoneFilter} = this.state;

        if (nameFilter && phoneFilter) {
            const filterItem = (name, phone) => {
                return phonebooks.filter(data => {
                    return (
                        data.name.toLowerCase().indexOf(name.toLowerCase()) > -1 &&
                        data.phone.indexOf(phone) > -1
                    );
                });
            };
            phonebooks = filterItem(nameFilter, phoneFilter)
        }
        if (nameFilter) {
            const filterItem = name => {
                return phonebooks.filter(data => {
                    return data.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
                });
            };
            phonebooks = filterItem(nameFilter, phoneFilter);
        };
        if (phoneFilter) {
            const filterItem = phone => {
                return phonebooks.filter(data => {
                    console.log('filter phone > ', data);
                    return data.phone.indexOf(phone) > -1;
                    
                })
            }
            phonebooks = filterItem(phoneFilter);
        };


        // data migrasi ke state atas =====================
        // let dataItem = this.props.phonebooks.map((item, index) => {
        //     return (
        //         <ItemList
        //             key={index}
        //             idUser={item.idUser}
        //             name={item.name}
        //             phone={item.phone}
        //         />
        //     )
        // })
        // console.log('data Item > ', dataItem);
        // =====================

        // tes =====================
        let dataItem = phonebooks.map((item, index) => {
            return (
                <ItemList
                    key={index}
                    idUser={item.idUser}
                    name={item.name}
                    phone={item.phone}
                />
            )
        })

        console.log('data Item > ', dataItem);
        // =====================

        return (
            <div>
            {this.filter()}
            <table className="table table-striped mt-4">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>  
                <tbody>
                    {dataItem}
                </tbody>
            </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    phonebooks: state.store
})

const mapDispatchToProps = (dispatch) => ({
    LoadItem: () => dispatch(LoadItem())
})



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPhonebook)


