import './App.css';
import Counter from './features/counter/Counter.js';
import Coin from './features/coin/Coin.js';
import Theme from './features/theme/Theme.js';

function App() {
  return (
         <div className='mt-5'>
            <div className='mb-3'> 
               <Counter/>
            </div>
            <div className='mb-3'> 
               <Coin />
            </div>
            <div className='mb-3'>
               <Theme />
            </div>
         </div>
  );
}

export default App;
