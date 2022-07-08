import React from 'react';
import b1 from '../assets/images/sample_images/beans_1.jpg';
import b2 from '../assets/images/sample_images/beans_2.jpg';
import Navbar from './Navbar';
import DashboardItem from './DashboardItem';

const Dashboard = ({ data }) => {
  console.log('🚀 ~ file: Item.js ~ line 6 ~ Item ~ data', data);
  return data ? (
    <>
      {/* Navbar */}
      <Navbar />
      {/* body */}
      <section id="dashboard_01">
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

      <section id="dashboard_02">
        <div className="container">
          <div className="row">
            {data.map((data, i) => (
              <div className="col-6 dashboardCard">
                <DashboardItem data={data} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  ) : (
    <>"No data"</>
  );
};

export default Dashboard;
