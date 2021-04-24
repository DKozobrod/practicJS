import { useEffect, useState } from 'react';
import './App.css';

const goodList = [
    {
        name:'Кроссовки 1',
        price:'1000р',
        brand:'Adidas',
    },
    {
        name:'Кроссовки 2',
        price:'2000р',
        brand:'Nike',
    },
    {
        name:'Кроссовки 3',
        price:'3000р',
        brand:'Adidas',
    },
    {
        name:'Кроссовки 4',
        price:'999р',
        brand:'Asics',
    },
    {
        name:'Кроссовки 5',
        price:'1500р',
        brand:'Puma',
    },
    {
        name:'Кроссовки 6',
        price:'1250р',
        brand:'Adidas',
    },

];

function App() {

    const [inputValue, setInputValue] = useState('');
    const [goods, setGoods] = useState([]);

    const onSearchItems =(e) => { 
      
      const { value } = e.target;
        setInputValue(value);


        const newItems = goodList.filter(( { name } ) => 
name.toLowerCase().includes(value.toLowerCase())
        )

        setGoods(newItems);
        console.log(newItems);
    };

    useEffect(() => {
      setGoods(goodList);
    },[]);


  return (
     <div className="App">
         <header className="header">

             <input
                className='search-field'
                type='text'
                value={inputValue}
                onChange={onSearchItems}
             />

         </header>
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

     </div>
  );
}

export default App;
