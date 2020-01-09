import React,{Component} from 'react'
import './Addtodo.css'
class Addtodo extends Component{
 
constructor(props) {
    super(props)

    this.state = {
         text:''
    }
}




    change=(e)=> {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }
    submit=(e)=> {

        e.preventDefault();

        this.props.add(this.state.text);
        this.setState({ text:''})
        

    }

    render(){
        return(
            <div>
                
                <form className='form' onSubmit={this.submit}>
                    <h1 style={{textAlign:'center'}}>TODO APP</h1>
                    <input type ='text' placeholder='Insert your task here' id='todoinput' name='text' value={this.state.text} onChange={this.change}></input>
              
                </form>
            </div>
        )
    }
}
export default Addtodo;