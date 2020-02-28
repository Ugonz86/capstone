import React from 'react';
import Header from './Header';
import Home from './Home';
import CompanyList from './CompanyList';
import NewCompanyForm from './NewCompanyForm';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/NewCompanyForm' component={NewCompanyForm} />
        <Route path='/Companylist' component={CompanyList} />
      </Switch>
    </div>
  );
}

export default App;