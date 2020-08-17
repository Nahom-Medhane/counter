import React, {Component} from 'react'


import Counter from './counter';

class Counters extends Component{
	state = {

		Counters:[
          
          {id:1, value: 0},
          {id:2, value: 0},
          {id:3, value: 0},
          {id:4, value: 0},
          {id:5, value: 0},

		]
	}
    
   	handleRecycle = () => {
		window.location.reload(true)
		
	}
    
    handleDelete = counterID => {
   	 const Counters = this.state.Counters.filter(c => c.id !== counterID);
    this.setState({Counters})
    }
	render(){
		return(
        
		<div>

    

		<div className="jumbotron  jumbotronn" >
	<h3> Counters : Happy Counting To You!!!!</h3>
</div>
<button className="btn btn bg-primary color-white btn-sm m-2" 
onClick={this.handleRecycle}>Realod</button><br/>

			{ this.state.Counters.map(
				counter => <Counter key={counter.id} 
				onDelete={this.handleDelete} id={counter.id} 
				value={counter.value}/>)}
		</div>)
	}
}


export default Counters;