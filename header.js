import { useEffect, useState } from 'react';
import './App.css';


function Header({ inputValue , onSearchItems}) {


  return (
     <>
         <header className="header">
             <input
                className='search-field'
                type='text'
                value={inputValue}
                onChange={onSearchItems}
             />

         </header>
     </>
  );
}

export default Header;



