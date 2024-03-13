import logo from './logo.svg';
import './App.css';
import './index.css'
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
// import Methodprops from './component/methodprops';
// import { CRUD } from './component/CRUD';
import { Route, Routes } from 'react-router-dom';
import { Home } from './component/Home';
import { About } from './component/about';
import { Navbar } from './component/Navbar';
import { Products } from './component/Products';
import { Userpage } from './component/Userpage';
import { Services } from './component/Services';
import { Nomatch } from './component/Nomatch';
import { MostViewed } from './component/MostViewed';
import { Newnew } from './component/Newnew';
import { Users } from './component/Users';
import { UserDet } from './component/UserDet';

function App() {
  // function handleclick(name){
  //   console.log("Button is clicked from child"+name);
  // }
  return (
    <div className="App"> 
       {/* <Methodprops handle={handleclick}/> */}
       {/* <CRUD/>   */}
       <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/products' element={<Products/>}>
             <Route index element={<MostViewed/>}/>
             <Route path='mostviewed' element={<MostViewed/>}/>
             <Route path='new' element={<Newnew/>}/>
         </Route>
         <Route path='/users' element={<Userpage/>}/>
         <Route path='/services' element={<Services/>}/>
         <Route path='*' element={<Nomatch/>}/>
         <Route path='/users' element={<Users/>}>
           <Route path=':userid' element={<UserDet/>}/>
         </Route> 
      
       </Routes>
     </div>
  );
}

export default App;
