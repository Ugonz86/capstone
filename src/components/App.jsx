import React from 'react';
import Header from './Header';
import CompanyList from './CompanyList';
import NewCompanyControl from './NewCompanyControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Account from './Account';
// import Moment from 'moment';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);

    const newMasterCompanyList = {};

    let newCompanyId = v4();
    newMasterCompanyList[newCompanyId] = {
      name:'Seattle Light',
      utility:'Electricity',
      contact:'www.seattle.com',
      timeAdded:''
    };
    newCompanyId = v4();
    newMasterCompanyList[newCompanyId] = {
      name:'Seattle Water',
      utility:'Water',
      contact:'www.seattle.com',
      timeAdded:''
    };
    newCompanyId = v4();
    newMasterCompanyList[newCompanyId] = {
      name:'Seattle Farm',
      utility:'Insurance',
      contact:'www.seattle.com',
      timeAdded:''
    };
    newCompanyId = v4();
    newMasterCompanyList[newCompanyId] = {
      name:'Seattle Auto',
      utility:'Car Dealer',
      contact:'www.seattle.com',
      timeAdded:''
    };
    newCompanyId = v4();
    newMasterCompanyList[newCompanyId] = {
      name:'Seattle Fi',
      utility:'Internet',
      contact:'www.seattle.com',
      timeAdded:''
    };

    this.state = {
      masterCompanyList: newMasterCompanyList,
      selectedCompany: null
    };
    this.handleAddingNewCompanyToList = this.handleAddingNewCompanyToList.bind(this);
    this.handleChangingSelectedCompany = this.handleChangingSelectedCompany.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateCompanyElapsedWaitTime(),
    5000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateCompanyElapsedWaitTime() {
    var newMasterCompanyList = Object.assign({}, this.state.masterCompanyList);
    Object.keys(newMasterCompanyList).forEach(companyId => {
      newMasterCompanyList[companyId].formattedWaitTime = (newMasterCompanyList[companyId].timeOpen).fromNow(true);
    });
    this.setState({masterCompanyList: newMasterCompanyList});
  }

  handleAddingNewCompanyToList(newCompany){
    var newCompanyId = v4();
    var newMasterCompanyList = Object.assign({}, this.state.masterCompanyList, {
      [newCompanyId]: newCompany
    });
    newMasterCompanyList[newCompanyId].formattedWaitTime = newMasterCompanyList[newCompanyId].timeOpen.fromNow(true);
    this.setState({masterCompanyList: newMasterCompanyList});
  }

  handleChangingSelectedCompany(companyId){
    this.setState({selectedCompany: companyId});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Account' component={Account} />
          <Route path='/NewCompany' render={()=><NewCompanyControl onNewCompanyCreation={this.handleAddingNewCompanyToList} />} />
          <Route path='/CompanyList' render={()=><CompanyList companyList={this.state.masterCompanyList} onCompanySelection={this.handleChangingSelectedCompany}
            selectedCompany={this.state.selectedCompany}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;