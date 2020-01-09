import React from 'react'
import Nav from './Nav'
import List from './List'
import Addtodo from './Addtodo'

class App extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
          list:[]   
        }
    }

componentWillMount = () => {
    fetch('/karan/')
    .then(d=>(
        d.json()
    ))
    .then((data)=>{
        this.setState({list:data})
    })
}


    add=(e)=>{
        fetch("/karan/", {
          method: "POST",
          headers: new Headers({
              'Content-Type':'application/json',
          }),
         
          body: JSON.stringify({ data: e,id:Math.floor(Math.random()*100) })
        }).then(d => {
            if(!d.ok){
                if(d.status>=400&&d.status<500){
                    return d.json().then(data=>{
                        let err ={errorMessage:data.message};
                        throw err;
                    })
                }
                else{
                    let err = {errorMessage:'please try again'}
                    throw err;
                }
                
            }
            return d.json();
            
        })
        .then(newtodo=>{
            this.setState({list:[...this.state.list,newtodo]})
        })
        
    }

    cross=(e)=>{
       
        fetch("/karan/"+e, {
          method: "DELETE",
       
        })
          .then(d => {
            if (!d.ok) {
              if (d.status >= 400 && d.status < 500) {
                return d.json().then(data => {
                  let err = { errorMessage: data.message };
                  throw err;
                });
              } else { 
                let err = { errorMessage: "please try again" };
                throw err;
              }
            }
           
            return d.json();
          })
          .then(() => {
              var newlist = this.state.list.filter(d=>d._id!=e)
              
            this.setState({ list:newlist});
          });
        
    }


   toggle=(e)=>{
          fetch("/karan/" + e._id, {
            method: "put",
            headers: new Headers({
              "Content-Type": "application/json"
            }),

            body: JSON.stringify({
              complete:!e.complete
            })
          }).then(d => {
            if (!d.ok) {
              if (d.status >= 400 && d.status < 500) {
                return d.json().then(data => {
                  let err = { errorMessage: data.message };
                  throw err;
                });
              } else {
                let err = { errorMessage: "please try again" };
                throw err;
              }
            }

            return d.json();
          })
          .then(updatetodo=>{
            
             
              const todo=this.state.list.map(t=>
                  (t._id==updatetodo._id)?{...t,complete:!t.complete}:t
          
              )

              
              this.setState({list:todo})
          })

       
   }

 render(){
     return (
         <div > 
             <Nav/>
             <Addtodo add={this.add}/>
             <ul style={{marginLeft:'30%'}}>
                 {this.state.list.map((m, k) => (
                     <List l={m} toggle={this.toggle} cross={this.cross} />
                 ))
                 }
             </ul>
            
             
         </div>
     )
 }
    
}

export default App