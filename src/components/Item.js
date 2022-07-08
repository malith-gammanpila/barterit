import React from 'react';
import b1 from '../assets/images/sample_images/beans_1.jpg';
import b2 from '../assets/images/sample_images/beans_2.jpg';
import Navbar from './Navbar';

const Item = ({ data }) => {
  console.log('🚀 ~ file: Item.js ~ line 6 ~ Item ~ data', data);
  return data ? (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Slider */}
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          {data.images.map((image, i) => (
            <div class={`carousel-item ${i == 0 ? 'active' : null}`}>
              <img class="d-block w-100" src={image} alt="First slide" />
            </div>
          ))}
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      {/* Title */}
      <p>
        {data.title}{' '}
        <span class={`badge badge-${data.trade_quality.hint}`}>
          {data.trade_quality.msg}
        </span>
      </p>
      {/* Quantity */}
      <p>{`${data.quantity} ${data.unit}`}</p>
      {/* Decription */}
      <p>{data.description}</p>
      {/* Decription */}
      <p>{data.description}</p>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <button
              type="button"
              class="btn btn-primary"
              style={{ width: '100%' }}
            >
              Chat
            </button>
          </div>
          <div className="col-6">
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
    </>
  ) : (
    <>"No data"</>
  );
};

export default Item;
