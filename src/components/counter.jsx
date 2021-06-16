import React, { Component } from "react";
//borramos state, y todo lo que tenga this.state
// handleIncrement(), tambien lo borramos
// en el boton INCREMENTAR, onClick, lo modificamos
// getBadgesClasses, cambiamos this.state.count X this.props.counter.count
// formatCount, lo mismo const { count } = this.state; X  const { count } = this.props.counter;
export default function Counter(props){
// AGREGAMOS OTRO HOOK
function componentDidUpdate(prevProps, prevState){
  console.log('counter update');
  // console.log('prevProps', prevProps);
  // console.log('prevState', prevState);
  if (prevProps.counter.value !== this.props.counter.value){
    // ajax call y obtener nueva data del server
  }
}
function componentWillUnmount(){
  console.log('counter unmounted');
}
 
      console.log('counter rendered');

      return (
        <div>
          
          <span>{props.counter.name} ${props.counter.price} </span>
          
          <span> ${props.counter.subTotal}</span>
           <span className={getBadgesClasses()}>{formatCount()}</span>
          <button
               onClick={() => props.onIncrement(props.counter)}
            className="btn btn-secondary btn-sm"
            >Incrementar
          </button>
          <button onClick={() => props.onDelete(props.counter.id) } 
          className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
      );
    

  function  getBadgesClasses() {
      let classes = "badge m-2 badge-";
      classes += props.counter.value === 0 ? "warning" : "primary";
      return classes;
    }
  function  formatCount() {
      const { value } = props.counter;
      return value === 0 ? "Cero" : value;
    }
  }
  
