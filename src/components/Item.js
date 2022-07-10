import React from 'react';
import b1 from '../assets/images/sample_images/beans_1.jpg';
import b2 from '../assets/images/sample_images/beans_2.jpg';
import Navbar from './Navbar';

const Item = ({ data }) => {
  console.log('🚀 ~ file: Item.js ~ line 6 ~ Item ~ data', data);
  return data ? (
    <>
      {/* Navbar */}
      <Navbar
      // navTitle={data.title}
      />
      {/* Slider */}
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-inner">
            {data.images.map((image, i) => (
              <div class={`carousel-item ${i == 0 ? 'active' : null}`}>
                <img class="d-block w-100" src={image} alt="First slide" />
              </div>
            ))}
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* Title */}
      <div className="item">
        <p>
          <span className="itemhead">{data.title} </span>
          <span class={`badge bg-${data.trade_quality.hint}`}>
            {data.trade_quality.msg}
          </span>

          {/* Quantity */}
          <br />
          {`${data.quantity} ${data.unit}`}
          <br />
          {/* Decription */}
          {data.description}
        </p>
        <div className="container">
          <div className="row itemButtons">
            <div className="col-4">
              <button
                type="button"
                class="btn btn-primary"
                style={{ width: '100%' }}
              >
                Chat
              </button>
            </div>
            <div className="col-8">
              <button
                type="button"
                class="btn btn-success"
                style={{ width: '100%' }}
              >
                Propose Trade
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>"No data"</>
  );
};

export default Item;
