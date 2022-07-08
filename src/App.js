import logo from './logo.svg';
import './App.css';

import Item from './components/Item';
import ItemList from './assets/data/items.json';
import UploadItem from './components/UploadItem';

function App() {
  // return <Item data={ItemList[0]} />;
  return <UploadItem />;
}

export default App;
