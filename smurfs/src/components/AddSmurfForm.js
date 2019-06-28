import React from 'react';

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
        this.setState({newSmurf: {...this.state.newSmurf,[e.target.name]: e.target.value}})
    }

    render(){
        return(
            <form>
                <input type='text'
                placeholder='name'
                name='name'
                value={this.state.name}
                onChage={this.onChage}></input>
                <input type='text'
                placeholder='age'
                name='age'
                value={this.state.age}
                onChage={this.onChage}></input>
                <input type='text'
                placeholder='height'
                name='height'
                value={this.state.height}
                onChage={this.onChage}></input>
            </form>
        )
    }
}
export default AddSmurfForm;