import React from 'react';

const DashboardItem = ({ data }) => {
  return (
    <>
      <div class="card dashboardItemCard">
        <img class="d-block w-100" src={data.images[0]} alt="First slide" />
        <div class="card-body">
          <p class="card-text text-center">{data.title}</p>
        </div>
      </div>
    </>
  );
};

export default DashboardItem;
