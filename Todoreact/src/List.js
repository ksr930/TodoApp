import React from 'react'
import './List.css'
class List extends React.Component{
   
    render(){

        return (
          <li className="list">
            <span
              style={{
                textDecoration: this.props.l.complete ? "line-through" : "none"
              }}
              onClick={() => {
                this.props.toggle(this.props.l)
              }}
            >
              {this.props.l.data}
            </span>
            <button
              className="btn btn-secondary cross"
              onClick={() => this.props.cross(this.props.l._id)}
            >
              X
            </button>
          </li>
        );
    }
}
export default List