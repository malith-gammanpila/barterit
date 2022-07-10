import React from 'react';

const DashboardItem = ({ data }) => {
  const test3 = (id) => {
    window.location = `/item`;
  };
  return (
    <>
      <div class="card dashboardItemCard">
        <img
          class="d-block w-100"
          onClick={test3}
          src={data.images[0]}
          alt="First slide"
          height="155px"
        />
        <div class="card-body">
          <p class="card-text text-center">{data.title}</p>
        </div>
      </div>
    </>
  );
};

export default DashboardItem;
