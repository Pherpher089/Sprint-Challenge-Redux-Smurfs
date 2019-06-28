import React from 'react';

class SmurfCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
             <div>
                 {this.props.smurfs.map(smurf =>{
                     return(
                         <div>
                             <h3>{smurf.name}</h3>
                             <h4>age: {smurf.age}</h4>
                             <h4>height: {smurf.height}</h4>
                             <h5>id: {smurf.id}</h5>
                         </div>
                     )
                 })}
             </div>
        )
    }
}

export default SmurfCard;