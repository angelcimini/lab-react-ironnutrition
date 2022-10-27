import './App.css';
import foods from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';
import Search from './components/Search';
// import FoodBoxList from './components/FoodBoxList'

const foodCopy = [...foods]
function App() {

  const [food, setFood] = useState(foods);
  
  const filterHandler = newText => {
    const foodMapeada = foodCopy.filter(element => element.name.toLowerCase().includes(newText.toLowerCase()))
    return newText.length < 1 ? setFood(foodCopy) : setFood(foodMapeada)
  }
  const foodHandler = newElement => setFood( [...food, newElement] )

  return (
    <div className="App">
      {/* ITERATION 1 */}
      {/* { foods.map(element => {
              return <div>
                <p> {element.name} </p>
                <img src={element.image} width={160} />
              </div> 
      })} */}

      {/* ITERATION 2 */}
      {/* <FoodBox
            foods = {{
              name: "Orange",
              calories: 85,
              image: "https://i.imgur.com/abKGOcv.jpg",
              servings: 1
            }}
      /> */}

      {/* ITERATION 5 */}
      <Search
          food = { food }
          filterHandler = { filterHandler }
        />

      {/* ITERATION 4 */}
      <AddFoodForm 
          foodHandler = { foodHandler }
        />

      {/* ITERATION 3 */}
        <FoodBox
          food = { food }
        />

    </div>
  );
}

export default App;
