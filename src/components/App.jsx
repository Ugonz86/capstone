import React from 'react';
import Header from './Header';
import Home from './Home';
import CompanyList from './CompanyList';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/newcompany' component={NewCompanyForm} />
      <Route path='/companylist' component={CompanyList} />
      </Switch>
    </div>
  );
}

export default App;