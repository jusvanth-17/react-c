import logo from './logo.svg';
import './App.css';
// import HI from './component/about';
// import Hello from './component/home';
// import Child1 from './component/child1';
// import Props from './component/Props';
// import Problem from './component/Problem';
// import Destructure from './component/destructure';
// import Counter from './component/counte  r';
// import LifeCycle from './component/if-else';
// import Calculator from './component/Calculator';
// import Form from './component/form';
// import {Moneyconversion} from './component/moneyconversion';
import Methodprops from './component/methodprops';
import { CRUD } from './component/CRUD';
function App() {
  // function handleclick(name){
  //   console.log("Button is clicked from child"+name);
  // }
  return (
    <div className="App"> 
       {/* <Methodprops handle={handleclick}/> */}
       <CRUD/>  
     </div>
  );
}

export default App;
