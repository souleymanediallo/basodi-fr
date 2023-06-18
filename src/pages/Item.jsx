import React, { useState } from "react";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db, storage } from "../firebaseConfig";
import Select from "react-select";

import categoryList from "../components/Categories";
import colors from "../components/Colors";
import sizes from "../components/Size";
import statusList from "../components/Status";

export const Item = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("Femmes");
  const [subCategory, setSubCategory] = useState("Vetements");
  const [subSubCategory, setSubSubCategory] = useState("");
  const [giveAway, setGiveAway] = useState(false);

  const [values, setValues] = useState({
    images: [],
    category: "",
    subCategory: "",
    subSubCategory: "",
    title: "",
    description: "",
    status: "",
    size: "",
    color: "",
    price: "",
    error: "",
    exchange: false,
    giveAway: false,
    loading: false,
  });

  const {
    images,
    title,
    description,
    status,
    size,
    color,
    price,
    error,
    exchange,
    loading,
  } = values;

  const handleCategoryChange = e => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSubCategory(Object.keys(categoryList[selectedCategory])[0]);
  };

  const handleChange = e => {
    setValues({ ...values, error: false, [e.target.name]: e.target.value });
  };

  const handleSubSubCategoryChange = e => {
    setSubSubCategory(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // Reset form fields
    setCategory("Femmes");
    setSubCategory("Vetements");
    setSubSubCategory("");
    setValues({
      images: [],
      category: "",
      subCategory: "",
      subSubCategory: "",
      title: "",
      description: "",
      status: "",
      size: "",
      color: "",
      price: "",
      error: false,
      exchange: "",
      giveAway: "",
      loading: false,
    });

    try {
      let imgs = [];
      // loop through images
      if (images.length) {
        for (let image of images) {
          const imgRef = ref(storage, `ads/${Date.now()} - ${image.name}`);
          const result = await uploadBytes(imgRef, image);
          const fileUrl = await getDownloadURL(
            ref(storage, result.ref.fullPath)
          );

          imgs.push({ url: fileUrl, path: result.ref.fullPath });
        }
      }
      // add data into firestore
      await addDoc(collection(db, "ads"), {
        images: imgs,
        title,
        category,
        subCategory,
        subSubCategory,
        status,
        size,
        color,
        price,
        description,
        exchange,
        giveAway,
        isSold: false,
        publishedAt: Timestamp.fromDate(new Date()),
        postedBy: auth.currentUser.uid,
      });

      navigate("/");
    } catch (error) {
      setValues({ ...values, error: error.message, loading: false });
    }
  };

  return (
    <div>
      <section className='my-5'>
        <div className='container py-5'>
          <form className='form-validate' onSubmit={handleSubmit}>
            <div className='row justify-content-center'>
              <div className='col-lg-9'>
                <div className='card mb-3'>
                  <div className='card-body'>
                    <div className='form-group'>
                      <ul className='list-group'>
                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                          <div className='ms-2 me-auto'>
                            <div className='fw-bold'>Première Catégorie</div>
                          </div>
                          <span className='w-50'>
                            <select
                              value={category}
                              onChange={handleCategoryChange}
                              className='form-select'
                            >
                              {Object.keys(categoryList).map(cat => (
                                <option key={cat} value={cat}>
                                  {cat}
                                </option>
                              ))}
                            </select>
                          </span>
                        </li>
                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                          <div className='ms-2 me-auto'>
                            <div className='fw-bold'>Deuxième Catégorie</div>
                          </div>
                          <span className='w-50'>
                            <select
                              value={subCategory}
                              onChange={e => setSubCategory(e.target.value)}
                              className='form-select'
                            >
                              {Object.keys(categoryList[category]).map(
                                subCat => (
                                  <option key={subCat} value={subCat}>
                                    {subCat}
                                  </option>
                                )
                              )}
                            </select>
                          </span>
                        </li>
                        {subCategory && (
                          <li className='list-group-item d-flex justify-content-between align-items-center'>
                            <div className='ms-2 me-auto'>
                              <div className='fw-bold'>Troisième Catégorie</div>
                            </div>
                            <span className='w-50'>
                              <div>
                                <select
                                  className='form-select'
                                  value={subSubCategory}
                                  onChange={handleSubSubCategoryChange}
                                >
                                  {categoryList[category][subCategory].map(
                                    accessory => (
                                      <option key={accessory} value={accessory}>
                                        {accessory}
                                      </option>
                                    )
                                  )}
                                </select>
                              </div>
                            </span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-9'>
                <div className='card mb-3'>
                  <div className='card-body'>
                    <div className='form-group mb-3'>
                      <label className='mb-2'>Titre de votre annonce</label>
                      <input
                        className='form-control'
                        type='text'
                        placeholder='Titre de votre annonce'
                        name='title'
                        value={title}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='form-group'>
                      <label className='mb-2'>
                        Description de votre annonce
                      </label>
                      <textarea
                        className='form-control'
                        rows='8'
                        placeholder='Description de votre annonce'
                        name='description'
                        value={description}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accessoire */}
              <div className='col-lg-9'>
                <div className='card mb-3'>
                  <div className='card-body'>
                    <div className='form-group'>
                      <ul className='list-group'>
                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                          <div className='ms-2 me-auto'>
                            <div className='fw-bold'>Etat</div>
                          </div>
                          <span className='w-50'>
                            <select
                              className='form-select'
                              name='status'
                              value={status}
                              onChange={handleChange}
                            >
                              {statusList.items.map(stat => (
                                <option key={stat.id} value={stat.title}>
                                  {stat.title}
                                </option>
                              ))}
                            </select>
                          </span>
                        </li>
                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                          <div className='ms-2 me-auto'>
                            <div className='fw-bold'>Taille</div>
                          </div>
                          <span className='w-50'>
                            <select
                              className='form-select'
                              name='size'
                              value={size}
                              onChange={handleChange}
                            >
                              {sizes.items.map(size => (
                                <option key={size.id} value={size.title}>
                                  {size.title}
                                </option>
                              ))}
                            </select>
                          </span>
                        </li>
                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                          <div className='ms-2 me-auto'>
                            <div className='fw-bold'>Couleur</div>
                          </div>
                          <span className='w-50'>
                            <select
                              className='form-select'
                              name='color'
                              value={color}
                              onChange={handleChange}
                            >
                              {colors.items.map(color => (
                                <option key={color.id} value={color.title}>
                                  {color.title}
                                </option>
                              ))}
                            </select>
                          </span>
                        </li>

                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                          <div className='ms-2 me-auto'>
                            <div className='fw-bold'>
                              Je suis intéressé(e) par les échanges, si OUI
                              cochez la case
                            </div>
                          </div>
                          <span className='w-25'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='exchange'
                              checked={exchange}
                              onChange={e =>
                                setValues({
                                  ...values,
                                  exchange: e.target.checked,
                                })
                              }
                            />
                          </span>
                        </li>
                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                          <div className='ms-2 me-auto'>
                            <div className='fw-bold'>
                              <strong>
                                Je donne cet article, si OUI cochez la case
                              </strong>
                            </div>
                          </div>
                          <span className='w-25'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value={giveAway}
                              id='giveAway'
                              checked={giveAway}
                              onChange={e => setGiveAway(e.target.checked)}
                            />
                          </span>
                        </li>
                        {!giveAway && (
                          <li className='list-group-item d-flex justify-content-between align-items-center'>
                            <div className='ms-2 me-auto'>
                              <div className='fw-bold'>Prix</div>
                            </div>
                            <span className='w-50'>
                              <input
                                className='form-control'
                                type='number'
                                placeholder='00.00'
                                name='price'
                                value={price}
                                onChange={handleChange}
                              />
                            </span>
                          </li>
                        )}
                      </ul>
                      {/* before images */}
                      <div className='py-5 d-flex justify-content-between align-items-center'>
                        <span className='w-100'>
                          <div class='mb-4'>
                            <div
                              role='presentation'
                              tabindex='0'
                              class='dropzone dz-clickable'
                            >
                              <input
                                type='file'
                                accept='image/*,.jpeg,.jpg,.png'
                                multiple=''
                                id='image'
                                className='d-none'
                                onChange={e => {
                                  setValues({
                                    ...values,
                                    images: e.target.files,
                                  });
                                }}
                              />
                              <div class='dz-message text-muted'>
                              <label className='mb-2 dz-message text-muted text-center' htmlFor="image">
                                Cliquer ici <i class="bi bi-cloud-arrow-up fx-4"></i> pour ajouter vos photos
                                </label>
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>
                      {/* images start */}
                      <div className='py-5 d-flex justify-content-between align-items-center'>
                        <span className='w-100'>
                          <div class='mb-4'>
                            <div
                              role='presentation'
                              tabindex='0'
                              class='dropzone dz-clickable'
                            >
                              <input
                                type='file'
                                accept='image/*,.jpeg,.jpg,.png'
                                multiple=''
                                id='image'
                                tabindex='-1'
                                className='d-none'
                                onChange={e => {
                                  setValues({
                                    ...values,
                                    images: e.target.files,
                                  });
                                }}
                              />
                              <div class='dz-message text-muted'>
                                <p>Ajouter vos photos</p>
                                <p>
                                  <span className='note'>
                                    (This is just a demo dropzone. Selected
                                    files are <strong>not</strong> actually
                                    uploaded.)
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>
                      {/* images end */}
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-9'>
                <button
                  type='submit'
                  className='btn btn-primary'
                  disabled={loading}
                >
                  Publier l'annonce
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Item;
