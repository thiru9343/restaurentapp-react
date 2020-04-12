import React,{Component} from 'react';
import Header from './Header';

const url = "http://localhost:8900/resturents";

class FormsComponent extends Component{

    constructor(){
        super()

        this.state={
            name:'',
            backgroundImageURL:'',
            category:'',
            contact:''
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangebackgroundImageURL = this.handleChangebackgroundImageURL.bind(this)
        this.handleChangeCategory = this.handleChangeCategory.bind(this)
        this.handleChangeContact = this.handleChangeContact.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeName(event){
        this.setState({name:event.target.value})
    }
    handleChangebackgroundImageURL(event){
        this.setState({backgroundImageURL:event.target.value})
    }
    handleChangeCategory(event){
        this.setState({category:event.target.value})
    }
    handleChangeContact(event){
        this.setState({contact:event.target.value})
    }

    handleSubmit(){
        var random = Math.floor(Math.random()*10000);
        var data={
            "id":random,
            "name":this.state.name,
            "backgroundImageURL":this.state.backgroundImageURL,
            "category":this.state.category,
            "contact":this.state.contact
        }

        fetch(url,{
            method:'POST',
            headers:{
               'Accept':'application/json',
               'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(this.props.history.push('/'))

    }

    render(){

        return(
            <React.Fragment>
                <Header/>
                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            Restaurent Forms
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control"
                                value={this.state.name}
                                onChange={this.handleChangeName}>
                                </input>
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>BackgroundImageURL</label>
                                <input type="text" className="form-control"
                                value={this.state.backgroundImageURL}
                                onChange={this.handleChangebackgroundImageURL}>
                                </input>
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>Category</label>
                                <input type="text" className="form-control"
                                value={this.state.category}
                                onChange={this.handleChangeCategory}>
                                </input>
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>Contact</label>
                                <input type="text" className="form-control"
                                value={this.state.contact}
                                onChange={this.handleChangeContact}>
                                </input>
                            </div>
                        </div>
                        <button type="button" className="btn btn-success"
                        onClick={this.handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default FormsComponent;