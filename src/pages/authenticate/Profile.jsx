import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc} from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export const Profile = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    const getUser = async () => {
        const docSnap = await getDoc(doc(db, "users", id));
        if (docSnap.exists()) {
            setUser(docSnap.data());
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    console.log(user);
  return (
    <div>
          <main>
                    <section className="py-5">
                        <div className="container py-5">
                            <div className="row">
                                {user && (
                                    <>
                                <div className="me-lg-auto col-lg-3">
                                    <div className="border-1 shadowf mb-6 mb-lg-0 card">
                                        <div className="bg-gray-100 py-4 border-0 text-center card-header">
                                            <a href="#" className="d-inline-block">
                                                <div className="avatar avatar-xxl p-2 mb-2">
                                                    <div className="position-relative h-100 overflow-hidden rounded-circle">
                                                        <span className="box-sizing:border-box;display:inline-block;overflow:hidden;width:144px;height:144px;background:none;opacity:1;border:0;margin:0;padding:0;position:relative">
                                                            <noscript>
                                                            </noscript>
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                            <h5>{user.firstname}</h5>
                                            <p className="text-muted text-sm mb-0">Los Angeles, CA</p>
                                        </div>
                                        <div className="p-4 card-body">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="icon-rounded icon-rounded-sm bg-primary-light me-2">
                                                   
                                                </div>
                                                <div>
                                                    <p className="mb-0">2877
                                                   
                                                    reviews</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="icon-rounded icon-rounded-sm bg-primary-light me-2">
                                                    <svg className="svg-icon text-primary svg-icon-md">
                                                        
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="mb-0">Verified</p>
                                                </div>
                                            </div>
                                            <hr/>
                                            <h6>Jack
                                            
                                            provided</h6>
                                            <ul className="text-muted card-text">
                                                <li>Government ID</li>
                                                <li>Email address</li>
                                                <li>Phone number</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                </>
                                )}
                                <div className="ps-lg-5 col-lg-9">
                                    <h1 className="hero-heading mb-0"> Présentation !</h1>
                                    
                                    <div className="text-block">
                                        <p>
                                            <span className="badge text-secondary bg-secondary-light">Joined in 
                                            
                                            2011</span>
                                        </p>
                                        <div>
                                            <p className='text-muted'>Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.  </p>
                                            <p className='text-muted'>He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before.  </p>
                                        </div>
                                    </div>
                                    <div className="text-block">
                                        <h4 className="mb-5">Mon dressing</h4>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
    </div>
  )
}
