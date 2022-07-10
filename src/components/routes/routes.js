import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//Binuka Routes
import DashboardItem from '../DashboardItem';
import Categories from '../Categories';
import Dashboard from '../Dashboard';

import Item from '../Item';
import UploadItem from '../UploadItem';

import ItemList from '../../assets/data/items.json';

function RoutesList() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Categories data={ItemList} />} />
          <Route path="/dashboard" element={<Dashboard data={ItemList} />} />
          <Route path="/item" element={<Item data={ItemList[0]} />} />
          <Route path="/uploard" element={<UploadItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default RoutesList;
