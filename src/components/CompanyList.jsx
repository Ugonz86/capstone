import React from 'react';
import Company from './Company';

var masterCompanyList = [
    {
        Name="Seattle Light",
        Utility="Electricity",
        Contact="www.seattle.com"
    },
    {
        Name="Seattle Water",
        Utility="Water",
        Contact="www.seattle.com"
    },
    {
        Name="Seattle Farm",
        Utility="Insurance",
        Contact="www.seattle.com"
    },
    {
        Name="Seattle Auto",
        Utility="Car Dealer",
        Contact="www.seattle.com"
    },
    {
        Name="Seattle Fi",
        Utility="Internet",
        Contact="www.seattle.com"
    },
    
];

function CompanyList(){
  return (
    <div>
        <hr/>
        {masterCompanyList.map((company, index) =>
        <Company
        name={company.name}
        utility={company.utility}
        contact={company.contact}
        key={index}/>
        )}
    </div>
  );
}

export default CompanyList;