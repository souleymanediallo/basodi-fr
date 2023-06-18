import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db, storage, auth } from "../../firebaseConfig";

import CardItem from "../../components/CardItem";

export const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [ads, setAds] = useState([]);

  const getUser = async () => {
    const docSnap = await getDoc(doc(db, "users", id));
    if (docSnap.exists()) {
      setUser(docSnap.data());
    }
  };

  const getAds = async () => {
    // create collection reference
    const adsRef = collection(db, "ads");
    // execute query
    const q = query(
      adsRef,
      where("postedBy", "==", id),
      orderBy("publishedAt", "desc")
    );
    // get data from firestore
    const docs = await getDocs(q);
    let ads = [];
    docs.forEach(doc => {
      ads.push({ ...doc.data(), id: doc.id });
    });
    setAds(ads);
  };

  useEffect(() => {
    getUser();
    getAds();
  }, []);

  console.log(getAds);
  return (
    <div>
      <main>
        <section className='py-5'>
          <div className='container py-5'>
            <div className='row'>
              {user && (
                <>
                  <div className='me-lg-auto col-lg-3'>
                    <div className='border-1 shadowf mb-6 mb-lg-0 card'>
                      <div className='bg-gray-100 py-4 border-0 text-center card-header'>
                        <Link href='#' className='d-inline-block'>
                          <div className='avatar avatar-xxl p-2 mb-2'>
                            <div className='position-relative h-100 overflow-hidden rounded-circle'>
                              <span className='box-sizing:border-box;display:inline-block;overflow:hidden;width:144px;height:144px;background:none;opacity:1;border:0;margin:0;padding:0;position:relative'>
                                <noscript></noscript>
                              </span>
                            </div>
                          </div>
                        </Link>
                        <h5>{user.firstname}</h5>
                        <p className='text-muted text-sm mb-0'>
                          Los Angeles, CA
                        </p>
                      </div>
                      <div className='p-4 card-body'>
                        <div className='d-flex align-items-center mb-3'>
                          <div className='icon-rounded icon-rounded-sm bg-primary-light me-2'></div>
                          <div>
                            <p className='mb-0'>2877 reviews</p>
                          </div>
                        </div>
                        <div className='d-flex align-items-center mb-3'>
                          <div className='icon-rounded icon-rounded-sm bg-primary-light me-2'>
                            <svg className='svg-icon text-primary svg-icon-md'></svg>
                          </div>
                          <div>
                            <p className='mb-0'>Verified</p>
                          </div>
                        </div>
                        <hr />
                        <h6>Jack provided</h6>
                        <ul className='nav nav-pills-primary-soft flex-column'>
                          <li className='nav-item'>
                            <Link className='nav-link' href='account-profile.html'>
                              <i className='bi bi-person fa-fw me-2'></i>My Profile
                            </Link>
                          </li>
                          <li className='nav-item'>
                            <Link className='nav-link' href='account-bookings.html'>
                              <i className='bi bi-ticket-perforated fa-fw me-2'></i>
                              My Bookings
                            </Link>
                          </li>
                          
                         
                          <li className='nav-item'>
                            <Link className='nav-link' href='account-wishlist.html'>
                              <i className='bi bi-heart fa-fw me-2'></i>Wishlist
                            </Link>
                          </li>
                          <li className='nav-item'>
                            <Link className='nav-link' href='account-settings.html'>
                              <i className='bi bi-gear fa-fw me-2'></i>Settings
                            </Link>
                          </li>
                          <li className='nav-item'>
                            <Link className='nav-link' href='account-delete.html'>
                              <i className='bi bi-trash fa-fw me-2'></i>Delete
                              Profile
                            </Link>
                          </li>
                          <li className='nav-item'>
                            <Link
                              className='nav-link text-danger bg-danger-soft-hover'
                              href='#'
                            >
                              <i className='fas fa-sign-out-alt fa-fw me-2'></i>Sign
                              Out
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className='ps-lg-5 col-lg-9'>
                <h1 className='hero-heading mb-0'> Présentation !</h1>

                <div className='text-block'>
                  <p>
                    <span className='badge text-secondary bg-secondary-light'>
                      Joined in 2011
                    </span>
                  </p>
                  <div>
                    <p className='text-muted'>
                      Samsa was a travelling salesman - and above it there hung
                      a picture that he had recently cut out of an illustrated
                      magazine and housed in a nice, gilded frame.{" "}
                    </p>
                    <p className='text-muted'>
                      He must have tried it a hundred times, shut his eyes so
                      that he wouldn't have to look at the floundering legs, and
                      only stopped when he began to feel a mild, dull pain there
                      that he had never felt before.{" "}
                    </p>
                  </div>
                </div>
                <div className='text-block'>
                  <h4 className='mb-5'>Mon dressing</h4>
                </div>
                {/* Items start */}
                {ads.length > 0 ? (
                  <div className='row mt-5'>
                    {ads?.map(ad => (
                      <div
                        key={ad.id}
                        className='col-sm-6 col-lg-4 mb-30px hover-animate'
                        data-marker-id='59c0c8e33b1527bfe2abaf92'
                      >
                        <CardItem ad={ad} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className='text-center'>
                    <p className='text-muted'>
                      Vous n'avez pas encore publié d'annonce
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
