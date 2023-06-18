import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ ad }) => {
  return (
    <div>
      <div className='card h-100 border-0 shadow'>
        <div className='card-img-top overflow-hidden gradient-overlay'>
          {" "}
          <img
            className='img-fluid'
            src={ad.images[0].url}
            alt='Modern, Well-Appointed Room'
            style={{ width: "100%", height: "200px" }}
          />
          <Link className='tile-link' href='detail-rooms.html'></Link>
          <div className='card-img-overlay-bottom z-index-20'>
            <div className='d-flex text-white text-sm align-items-center'>
              <img
                className='avatar avatar-border-white flex-shrink-0 me-2'
                src={ad.images}
                alt='Pamela'
              />
              <div>Pamela</div>
            </div>
          </div>
          <div className='card-img-overlay-top text-end'>
            <Link
              className='card-fav-icon position-relative z-index-40'
              href='javascript: void();'
            ></Link>
          </div>
        </div>
        <div className='card-body d-flex align-items-center'>
          <div className='w-100'>
            <h6 className='card-title'>
              <a
                className='text-decoration-none text-dark'
                href='detail-rooms.html'
              >
                {ad.title}
              </a>
            </h6>
            <div className='d-flex card-subtitle mb-3'>
              <p className='flex-grow-1 mb-0 text-muted text-sm'>
                Private room
              </p>
              
            </div>
            <p className='card-text text-muted'>
              <span className='h4 text-primary'>{ad.price} €</span> per night
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardItem;
