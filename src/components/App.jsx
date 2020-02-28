import React from 'react';
import Header from './Header';
import Home from './Home';
import CompanyList from './CompanyList';
import NewCompanyControl from './NewCompanyControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
// import { render } from 'react-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterCompanyList: []
    };
    this.handleAddingNewCompanyToList = this.handleAddingNewCompanyToList.bind(this);
  }

  handleAddingNewCompanyToList(newCompany){
    var newMasterCompanyList = this.state.masterCompanyList.slice();
    newMasterCompanyList.push(newCompany);
    this.setState({masterCompanyList: newMasterCompanyList});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/NewCompany' render={()=><NewCompanyControl onNewCompanyCreation={this.handleAddingNewCompanyToList} />} />
          {/* <Route path='/CompanyList' render={()=><CompanyList companyList={this.state.masterCompanyList} />} /> */}
          <Route path='/CompanyList' render={()=><CompanyList companyList={this.state.masterCompanyList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;