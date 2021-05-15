import { useEffect, useState } from 'react';

import Header from './header';
import ContentBlock from './contentBlock';
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
      setTimeout(() => setGoods(goodList) , 3000);
    },[]);


  return (
     <div className="App">
       <Header 
            inputValue={inputValue}
            onSearchItems={onSearchItems}
       />
       <ContentBlock
            goods={goods}
       />
       <div>
           
           {
               goods.length === 0 && (
                <div class="loader"></div>
               )
           }

        </div>

     </div>
     
  );
}

export default App;
