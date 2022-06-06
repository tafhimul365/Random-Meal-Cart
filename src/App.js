import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';
import Allproducts from './Components/Allproducts/Allproducts';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';


function App() {


  const [cart, setcart] = useState([])

  const addToCart = meal => {

    const newCart = [...cart, meal]

    if (cart.length < 4 && cart.includes(meal) === false) {
      setcart(newCart)
    }


  }
  const nullTheCart = () => {

    setcart([])
    setRandMeal([])


  }

  const [randMeal, setRandMeal] = useState([])
  const randItem = () => {
    const len = cart.length
    const n = Math.floor(Math.random() * len)
    setRandMeal(cart[n])

  }



  return (
    <div className="App">
      <Menubar></Menubar>
      <div className='row d-flex'>
        <div className='col col-6 col-md-8'>
          <Allproducts addToCart={addToCart}></Allproducts>
        </div>
        <div className='col col-6 col-md-4'>
          <Cart randItem={randItem} randMeal={randMeal} nullCart={nullTheCart} items={cart}></Cart>
        </div>
      </div >

      <div className='QnA'>
        <h1>How REACT works?</h1>
        <h5>React is a JavaScript library that creates user interfaces in a predictable and efficient way. We can use it to build single page applications and mobile apps, or to build complex apps if it is utilised with other libraries.In React,we use declarative code to create components, which is how it display informations. Essentially, components are reusable UIs which allow us to split the app into separate blocks that act independently of each other. Components accept an arbitrary input with data (a prop) and return a React element to declare what should appear on screen. They can interact with other components via props to create a complex UI.</h5>
      </div>
      <div className='QnA'>
        <h1>What are the differences between props and state?</h1>
        <h5>Props is short for properties and they are used to pass data between React components.Props allow us to pass data from one component to other components as an argument and they are immutable.Data flow between components is uni-directional.It makes any component reusable.
        </h5><br />
        <h5>
          On the other hand state allows components to create and manage their own data. So unlike props, components cannot pass data with state, but they can create and manage it internally.States hold information about the components and they are mutable.States cannot be accessed by child components and they cannot make components reusable.
        </h5>
      </div>

      <div className='QnA'>
        <h1>How useState works?</h1>
        <h5>The React useState Hook allows us to track state in a function component.It is a function that return a state variable and a function when called.We can pass the initial state to this function and it returns a variable with the current state value and another function to update this value.We can include useState anywhere in our component.To update state value, we use state updater function.

        </h5>
      </div>

    </div >

  );
}

export default App;
