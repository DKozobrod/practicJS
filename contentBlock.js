import { useEffect, useState } from 'react';
import './App.css';


function ContentBlock({ goods }) {


  return (
     <>
        <main className="main-wrapper" >
        {
            goods.map((item) => (
                <div className="item-block" >
                    <p className='item-name'>{item.name}</p>
                    <p className='item-name'>{item.brand}</p>
                    <p className='item-name'>{item.price}</p>
                </div>
            ))
        }

        </main>
    </>
  );
}

export default ContentBlock;
