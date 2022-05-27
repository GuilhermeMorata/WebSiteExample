import { BrowserRouter,  Route, Switch } from 'react-router-dom';
import Showcare from './pages/showcare/showcare';
import Admin from './pages/admin/admin';
import Main from './pages/main/main';
import Detail from './pages/detail/detail'
import Fiche from './pages/fiche/fiche';


function App(){
  return (
    <BrowserRouter>
      <Switch>
          <Route exact={true} path="/admin" component={Admin}/>
          <Route exact={true} path="/" component={Showcare}/>
          <Route exact={true} path="/detail" component={Detail} />
          <Route exact={true} path="/fiche" component={Fiche} />
          <Route exact={true} path="/main" component={Main}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
