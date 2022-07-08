import logo from './logo.svg';
import './App.css';

import Item from './components/Item';
import ItemList from './assets/data/items.json';

function App() {
  return <Item data={ItemList[0]} />;
}

export default App;
