import React from 'react'

export const SliderHome = () => {
  return (
    <div>
       <section className="hero-home">
      <div className="swiper-container hero-slider">
        <div className="swiper-wrapper dark-overlay">
          <div className="swiper-slide" style={{ backgroundImage:`url(https://cdn.shopify.com/s/files/1/0086/4095/4426/articles/WAX1_1200x.jpg?v=1582299334)` }}></div>
          <div className="swiper-slide" style={{ backgroundImage:`url(https://cdn.shopify.com/s/files/1/0086/4095/4426/articles/WAX1_1200x.jpg?v=1582299334)` }}></div>
          <div className="swiper-slide" style={{ backgroundImage:`url(https://cdn.shopify.com/s/files/1/0086/4095/4426/articles/WAX1_1200x.jpg?v=1582299334)` }}></div>
          <div className="swiper-slide" style={{ backgroundImage:`url(https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/photo/photo-1534850336045-c6c6d287f89e.jpg)` }}></div>
        </div>
      </div>
      <div className="container py-6 py-md-7 text-white z-index-20">
        <div className="row">
          <div className="col-xl-12">
            <div className="text-center text-lg-start">
              <p className="subtitle letter-spacing-1 mb-2 text-light text-shadow text-center display-5">Offrir une seconde vie</p>
              <p className="subtitle letter-spacing-1 mb-2 text-light text-shadow text-center">à vos vêtements, chaussures et accessoires africains.</p>
            </div>
            <div className="search-bar mt-5 p-3 p-lg-1 ps-lg-4">
              <form action="#">
                <div className="row">
                  <div className="col-lg-4 d-flex align-items-center form-group">
                    <input className="form-control border-0 shadow-0" type="text" name="search" placeholder="Que rechercher vous ?" />
                  </div>
                  <div className="col-lg-3 d-flex align-items-center form-group">
                    <div className="input-label-absolute input-label-absolute-right w-100">
                      <label className="label-absolute" htmlFor="location"><i className="fa fa-crosshairs"></i><span className="sr-only">Ville</span></label>
                      <input className="form-control border-0 shadow-0" type="text" name="location" placeholder="Ville" id="location" />
                    </div>
                  </div>
                  <div className="col-lg-3 d-flex align-items-center form-group no-divider">
                    <select className="selectpicker" title="Categories" data-style="btn-form-control">
                      <option value="small">Femmes</option>
                      <option value="medium">Hommes</option>
                      <option value="large">Enfants</option>
                      <option value="x-large">Maisons</option>
                    </select>
                  </div>
                  <div className="col-lg-2 d-grid">
                    <button className="btn btn-dark rounded-pill bg-dark-b h-100" type="submit">Rechercher </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}
