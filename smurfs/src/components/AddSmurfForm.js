import React from 'react';
import {connect} from 'react-redux'
import {addSmurf} from '../actions'

class AddSmurfForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            newSmurf:{
                name:'',
                age:'',
                height:''
            }
        }
    }

    changeHandeler = e =>{
        console.log([e.target.name] + ' ' + e.target.value)
        this.setState({newSmurf: {...this.state.newSmurf,[e.target.name]: e.target.value}})
        
    }

    addSmurf = (e) =>{
        e.preventDefault();
        // this.setState({newSmurf: {...this.state.newSmurf, id: this.props.smurfs.length}})
        this.props.addSmurf(this.state.newSmurf)
    }

    render(){
        return(
            <form onSubmit={this.addSmurf}>
                <input type='text'
                    placeholder='name'
                    name='name'
                    value={this.state.name}
                    onChange={this.changeHandeler}>
                </input>
                <input type='text'
                    placeholder='age'
                    name='age'
                    value={this.state.age}
                    onChange={this.changeHandeler}>
                </input>
                <input type='text'
                    placeholder='height'
                    name='height'
                    value={this.state.height}
                    onChange={this.changeHandeler }>
                </input>
                <button>Submit</button>
            </form>
        )
    }
}
const mapStateToProps = (state) => {
    return {smurfs: state.smurfs}
}

export default connect(
    mapStateToProps,{
        addSmurf
    }
)(AddSmurfForm)