import React, {Component} from 'react'



class Counter extends Component{
	state ={
	   count: this.props.value
		
	}

	



	handleDecrement = () => {
       this.setState({count: this.state.count -1})
	}

    handleIncrement= () =>{
     this.setState({count: this.state.count + 1})
    }


	render() {
		return (<React.Fragment><div className="container item-position">
<span className={this.changeColorWhenZero(), this.changeColorWhenZeroDecreament()}>{this.ChangeZeroOne()}</span>
<button className="btn btn bg-success color-white m-2"  onClick={this.handleDecrement}>-</button>
<button className="btn btn bg-warning color-white"  onClick={this.handleIncrement }>+</button>
<button className="btn btn-danger m-2" onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
    
</div>

</React.Fragment>);
	}

   ChangeZeroOne(){
   const {count} = this.state;
   	
   	return count === 0 ? "Zero" : count;

   }
   
   changeColorWhenZero(){
   	let {count} = this.state;
     return count === 0  ? 'badge badge bg-warning' : 'badge badge bg-primary'
   }
  
  changeColorWhenZeroDecreament(){
   return this.state.count <= -1 ? 'badge badge bg-danger' : this.changeColorWhenZero()
  }
}

export default Counter;