
import './App.css';
import  React ,{useState} from "react"
import HocRed from './Componets/HocRed';
import HocGreen from './Componets/HocGreen';
import Counter from './Componets/Counter';
// hoc function red ,green , yellow  ek counter componet 
// What are the higher-order components in React?
// A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React's compositional nature. Concretely, a higher-order component is a function that takes a component and returns a new component.
function App() {
  return (
    <div className="App">
      <h1>High order componet</h1>
     
    <HocRed cmp = {Counter}/>
    <HocGreen cmp = {Counter}/>
     </div>
  );
}








export default App;
