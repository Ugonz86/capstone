import React from 'react';

function NewCompanyForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Company Name'/>
        <input
          type='text'
          id='utility'
          placeholder='Utility Type'/>
        <textarea
          type='text'
          id='contact'
          placeholder='Contact'/>
        <button type='submit'>Submit New Company</button>
      </form>
    </div>
  );
}

export default NewCompanyForm;