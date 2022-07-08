import logo from './logo.svg';
import './App.css';

import Item from './components/Item';
import Dashboard from './components/Dashboard';
import ItemList from './assets/data/items.json';
import Categories from './components/Categories';

function App() {
  return <Categories data={ItemList} />;
}

export default App;
