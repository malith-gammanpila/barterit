import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Navbar from './Navbar';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const UploadItem = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDtLMbtPI_Zzw9ryNZyroxNA5XQZ7-QZ1g',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar navTitle={'New Item'} />
      {/* Upload form */}
      <form>
        {/* Category */}
        <div class="form-group">
          <label for="exampleFormControlSelect1">Category</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        {/* Product */}
        <div class="form-group">
          <label for="exampleFormControlSelect1">Product</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        {/* Title */}
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Enter item title"
          />
        </div>
        {/* Description */}
        <div>
          <label for="exampleFormControlTextarea1" class="form-label">
            Description
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        {/* Quantity */}
        <div class="form-group">
          <label for="title">Quantity</label>
          <input
            type="number"
            class="form-control"
            id="quantity"
            placeholder="Enter the quantity"
          />
        </div>
        {/* Price range */}
        <div class="form-group">
          <label for="customRange3" class="form-label">
            Price Range
          </label>
          <input
            type="range"
            class="form-range"
            min="-1"
            max="1"
            step="0.1"
            id="priceRange"
          />
        </div>
        {/* upload files */}
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="customFile" />
          <label class="custom-file-label" for="customFile">
            Image 1
          </label>
        </div>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="customFile" />
          <label class="custom-file-label" for="customFile">
            Image 2
          </label>
        </div>
        <div className="custom-file">
          <input type="file" class="custom-file-input" id="customFile" />
          <label className="custom-file-label" for="customFile">
            Image 3
          </label>
        </div>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        ) : (
          <></>
        )}
      </form>
    </>
  );
};

export default UploadItem;
