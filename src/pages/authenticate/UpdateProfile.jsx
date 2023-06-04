import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes, deleteObject, getMetadata } from 'firebase/storage';
import { db, storage, auth } from '../../firebaseConfig';
import moment from 'moment/moment';
import 'moment/locale/fr';

import { Link } from 'react-router-dom';

import { ReactComponent as UserProfile } from '../../assets/images/user-profile.svg';

const monthAndYear = (date) => {
  const formattedDate = moment(date.toDate()).locale('fr').format('MMMM YYYY');
  const capitalizedMonth = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  return capitalizedMonth;
};

export const UpdateProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [img, setImg] = useState('');

  const getUser = async () => {
    const docSnap = await getDoc(doc(db, 'users', id));
    if (docSnap.exists()) {
      setUser(docSnap.data());
    }
  };

  const uploadImg = async () => {
    // create a reference to the storage bucket location
    const imgRef = ref(storage, `profile/${Date.now()} - ${img.name}`);
    if (user.photoUrl) {
      // delete the previous image
      console.log('delete previous image');
      await deleteObject(ref(storage, user.photoPath));
    }
    // upload image to the storage bucket
    const result = await uploadBytes(imgRef, img);
    // get the image url
    const imgUrl = await getDownloadURL(ref(storage, result.ref.fullPath));
    // update the user profile
    await updateDoc(doc(db, 'users', auth.currentUser.uid), {
      photoUrl: imgUrl,
      photoPath: result.ref.fullPath,
    });
    // update the user state
    setImg();
  };

  useEffect(() => {
    getUser();
    if (img) {
        uploadImg();
    }
  }, [img]);


  const deleteImg = async () => {
    const confirm = window.confirm('Voulez-vous supprimer votre photo de profil ?');
    if (confirm) {
      try {
        const metadata = await getMetadata(ref(storage, user.photoPath));
        if (metadata.exists) {
          await deleteObject(ref(storage, user.photoPath));
          await updateDoc(doc(db, 'users', auth.currentUser.uid), {
            photoUrl: '',
            photoPath: '',
          });
        } else {
          // L'objet n'existe pas dans le stockage Firebase
          console.log("L'objet n'existe pas dans le stockage Firebase");
        }
      } catch (error) {
        // Une erreur s'est produite lors de la suppression de l'image
        console.log("Une erreur s'est produite lors de la suppression de l'image :", error);
      }
    }
  };

  return user && (
    <div>
      <main>
        <section className="py-5">
          <div className="container py-5">
            <div className="row">
              <div className="me-lg-auto col-lg-3">
                <div className="border-1 shadowf mb-6 mb-lg-0 card">
                  <div className="bg-gray-100 py-5 border-0 text-center card-header">
                    <Link to="/" className="d-inline-block">
                      <div className="avatar avatar-xxl p-2 mb-2">
                        <div className="position-relative h-100 overflow-hidden rounded-circle">
                          {user.photoUrl ? (
                            <img
                              className="avatar-img rounded-circle border border-white border-3"
                              src={user.photoUrl}
                              alt=""
                              width="144"
                              height="144"
                            />
                          ) : (
                            <UserProfile
                              className="avatar-img rounded-circle border border-white border-3"
                              width="144"
                              height="144"
                            />
                          )}
                        </div>
                      </div>
                    </Link>
                    <h5>{user.firstname}</h5>
                    <p className="text-muted text-sm mb-0">Los Angeles, CA</p>
                  </div>
                  <div className="p-4 card-body">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-rounded icon-rounded-sm bg-primary-light me-2"></div>
                      <div>
                        <p className="mb-0">2877 reviews</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-rounded icon-rounded-sm bg-primary-light me-2">
                        <svg className="svg-icon text-primary svg-icon-md"></svg>
                      </div>
                      <div>
                        <p className="mb-0">Verified</p>
                      </div>
                    </div>
                    <hr />
                    <h6>Jack provided</h6>
                    <ul className="text-muted card-text">
                      <li>Membre depuis : {monthAndYear(user.createdAt)}</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="ps-lg-5 col-lg-9">
                <div className="text-block">
                  <div className="card border">
                    <div className="card-header border-bottom">
                      <h4 className="card-header-title">Modifier mes informations</h4>
                    </div>

                    <div className="card-body">
                      <form className="row g-3">
                        <div className="col-12">
                          <label className="form-label">Télécharger votre photo<span className="text-danger">*</span></label>
                          <div className="d-flex align-items-center">
                            <label className="position-relative me-4" htmlFor="uploadfile-1" title="Replace this pic">
                              {user.photoUrl ? (
                                <img
                                  className="avatar-img rounded-circle border border-white border-3"
                                  src={user.photoUrl}
                                  alt=""
                                  width="144"
                                  height="144"
                                />
                              ) : (
                                <UserProfile
                                  className="avatar-img rounded-circle border border-white border-3"
                                  width="144"
                                  height="144"
                                />
                              )}
                            </label>
                            <label className="btn btn-sm btn-dark mb-0" htmlFor="photo">Modifier</label>
                            <input
                              id="photo"
                              className="form-control d-none"
                              accept="image/*"
                              type="file"
                              onChange={(e) => setImg(e.target.files[0])}
                            />
                            {user.photoUrl && (
                                <ul>
                              <li
                                className="btn btn-sm btn-danger ms-2 mb-0"
                                onClick={deleteImg}
                              >
                                Supprimer
                              </li>
                              </ul>
                            )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Prénom<span className="text-danger">*</span></label>
                          <input type="text" className="form-control" value={user.firstname} placeholder="Enter your full name" />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Nom<span className="text-danger">*</span></label>
                          <input type="text" className="form-control" value={user.lastname} placeholder="Enter your full name" />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Select Gender<span className="text-danger">*</span></label>
                          <div className="d-flex gap-4">
                            <div className="form-check radio-bg-light">
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Mme
                              </label>
                            </div>
                            <div className="form-check radio-bg-light">
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                              <label className="form-check-label" htmlFor="flexRadioDefault2">
                                M
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Code Postal / Ville<span className="text-danger">*</span></label>
                          <input type="text" className="form-control" value="Ville" placeholder="Ville" />
                        </div>

                        <div className="col-12">
                          <label className="form-label">Présentation</label>
                          <textarea className="form-control" rows="3" spellCheck="false">2119 N Division Ave, New Hampshire, York, United States</textarea>
                        </div>

                        <div className="col-12 text-end">
                          <a href="#" className="btn btn-primary mb-0">Save Changes</a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
