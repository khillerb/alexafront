import logo from './logo.svg';
import './bootstrap.min.css';
import UserPage from './pages/App/userPage.jsx';
import ResponsePage from './pages/App/responsePage.jsx';
import ResponseSearch from './components/ResponseSearch/responseSearch.jsx';
import UserSearch from './components/UserSearch/userSearch.jsx';
import UserCreate from './components/UserCreate/userCreate'
import ResponseCreate from './components/ResponseCreate/responseCreate'
import NavBar from './components/NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Switch>
      <Route exact path='/users' render={({history}) => 
        <UserPage history={history}/>
      }/>
      <Route exact path='/users/search' render={({history}) =>
        <UserSearch history={history} ></UserSearch>
      }/>
      <Route exact path='/users/create' render={({history}) =>
        <UserCreate history={history} ></UserCreate>
      }/>
      
      <Route exact path='/responses' render={({history}) => 
        <ResponsePage history={history}/>
      }/>
      <Route exact path='/responses/search' render={({history}) =>
        <ResponseSearch history={history} ></ResponseSearch>
      }/>
      <Route exact path='/responses/create' render={({history}) =>
        <ResponseCreate history={history} ></ResponseCreate>
      }/>
      
      </Switch>
    </div>
    
  )
}

export default App;
