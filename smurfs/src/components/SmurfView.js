import React from 'react';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions';
import SmurfCard from './SmurfCard';

class SmurfView extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        console.log('Componenet is mounted')
        this.props.getSmurfs();
    }

    render(){
        if(this.props.fetchingSmurfs)
        {
            return(
                <div>Fetching Smurfs...</div>
            )
        }
        return(
            <div>
                <SmurfCard smurfs={this.props.smurfs} />
            </div>
        )
    }
}

const mapStateToProps = state =>({
    smurfs: state.smurfs,
    error: state.error,
    fetchingSmurfs: state.fetchingSmurfs
})

export default connect(
    mapStateToProps,
    {
        getSmurfs
    }
)(SmurfView)