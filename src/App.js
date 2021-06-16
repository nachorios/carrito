import React, { Component, useState } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
// usamos la NAVBAR de bootstrap
// https://getbootstrap.com/docs/5.0/components/navbar/

export default function App() {
  //agregue a cada item su precio y el subtotal de cada uno
  const [state, setState] = useState([
    { id: 1, value: 0, name: "Tomate", price: 120, subTotal: 0 },
    { id: 2, value: 0, name: "Lechuga", price: 20, subTotal: 0 },
    { id: 3, value: 0, name: "Palta", price: 100, subTotal: 0 },
    { id: 4, value: 0, name: "Banana", price: 50, subTotal: 0 },
  ]);

  //valor total del carrito
  const [total, setTotal] = useState(0);

  // ejemplo que devuelve un array vacio de props al browser
  // constructor (props){
  //   super(props);
  //   console.log('app - constructor', this.props);
  //   this.state=this.props.something;
  //   // no podemos usar setState dentro del constructor
  //  // this.setState();
  // }
  const handleIncrement = (counter) => {
    const counters = [...state];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // clonamos el objeto recibido x parametro
    counters[index].value++;
    counters[index].subTotal = counters[index].subTotal + counters[index].price; //actualiza el subtotal del producto
    const t = total;
    setTotal(t + counters[index].price); //actualiza el total
    setState(counters);
    // console.log(this.state.counters[index]);
  };
  const handleDelete = (counterId) => {
    const counters = state.filter((c) => c.id !== counterId);
    const counter = state.find((c) => c.id === counterId); //busca el producto por id y lo devuelve
    const t = total;
    setState(counters);
    setTotal(t - counter.subTotal); //resta el subtotal del producto eliminado
  };
  const handleReset = () => {
    const counters = state.map((c) => {
      c.value = 0;
      c.subTotal = 0;
      return c;
    });
    setTotal(0); //actualiza el total a
    setState(counters);
  };

  return (
    <React.Fragment>
      <NavBar
        totalCounters={state.filter((c) => c.value > 0).length}
        totalPrice={total}
      />
      <main className="container">
        <Counters
          counters={state}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDelete={handleDelete}
        />
      </main>
    </React.Fragment>
  );
}
