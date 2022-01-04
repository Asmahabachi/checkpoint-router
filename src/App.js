
import './App.css';
import Navbare from './components/Navbare';
import Home from './components/Home';
import Login from './components/Login';
import Profiles from './components/Profiles';
import {Switch , Route } from 'react-router-dom'
import {users} from './components/User'
import Details from './components/Details'
import {useState} from 'react'
function App() {
  const [login, setLogin] = useState(false)
  return (
    <div className="App">
      <Navbare setLogin={setLogin} login={login}/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/Login" component={Login}></Route>
        {/* <Route path="/Profiles">
        <Profiles user={Users}/>
        </Route> */}
        <Route path="/Profiles" render={(props)=> <Profiles {...props} Liste={users}/>}></Route> 
        <Route path="/Details/:id" render={(props)=> <Details {...props} Liste={users} />}></Route> 
                     {/* //:id parametre dynamic */}
      </Switch>
    </div>
  );
}
export default App;