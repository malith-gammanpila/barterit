import React from 'react';
import b1 from '../assets/images/sample_images/beans_1.jpg';
import b2 from '../assets/images/sample_images/beans_2.jpg';
import Navbar from './Navbar';
import DashboardItem from './DashboardItem';
import Dashboard from './Dashboard';

const Categories = ({ data }) => {
  const test2 = () => {
    window.location = `/uploard`;
  };
  const test = () => {
    window.location = `/dashboard`;
  };

  console.log('🚀 ~ file: Item.js ~ line 6 ~ Item ~ data', data);
  return data ? (
    <>
      {/* Navbar */}
      <Navbar />
      {/* body */}
      <section id="categories_01">
        <div className="container">
          <div className="row">
            <div className="col-10">
              <form class="form-group">
                <input
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Search"
                />
              </form>
            </div>
            <div className="col-2">
              <button class="btn">
                <i class="fa-solid fa-filter"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="categories_02">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div class="card">
                <img
                  class="d-block w-100"
                  height="110"
                  src="https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg"
                  alt="First slide"
                  onClick={test}
                />
                <div class="card-body">
                  <p class="card-text text-center">Vegetables</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div class="card">
                <img
                  class="d-block w-100"
                  height="110"
                  src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="First slide"
                  onClick={test2}
                />
                <div class="card-body">
                  <p class="card-text text-center">Fruits</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div class="card">
                <img
                  class="d-block w-100"
                  height="110"
                  src="https://www.world-grain.com/ext/resources/Article-Images/2020/12/GMR_Rice_AdobeStock_64819529_E_Nov.jpg?t=1609338918&width=1080"
                  alt="First slide"
                />
                <div class="card-body">
                  <p class="card-text text-center">Rice</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div class="card">
                <img
                  class="d-block w-100"
                  height="110"
                  src="https://media.istockphoto.com/photos/seafood-on-ice-picture-id520490716?s=170667a"
                  alt="First slide"
                />
                <div class="card-body">
                  <p class="card-text text-center">Fish</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div class="card">
                <img
                  class="d-block w-100"
                  height="110"
                  src="https://reactnative-examples.com/wp-content/uploads/2022/02/default-loading-image.png"
                  alt="First slide"
                />
                <div class="card-body">
                  <p class="card-text text-center">Other</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  ) : (
    <>"No data"</>
  );
};

export default Categories;
