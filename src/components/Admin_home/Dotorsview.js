import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./Docview.css"
function Dotorsview() {
    const [Doctor, setDoctor] = useState([]);
    const params = useParams();

    // API call
    const viewDoctor = async () => {
        const result = await axios.get(`http://localhost:8000/viewDoctor/${params.id}`);
        setDoctor(result.data.message);
    }

    useEffect(() => {
        viewDoctor();
    }, []);

    return (
        <div>
            <section className="section about-section gray-bg mt-2" id="about">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse" style={{    border:  '2px solid black',
    height: "21rem",
    width: "41rem"}}>
                        <div className="col-lg-6">
                            <div className="about-text go-to">
                                <h3 className="dark-color">{Doctor.name}</h3>
                                <h6 className="theme-color lead">{Doctor.specialization}</h6>
                                <div className="row about-list">
                                    <div className="col-md-6">
                                        <div className="media">
                                            <label>Age</label>
                                            <p>22 Yr</p>
                                        </div>
                                        <div className="media">
                                            <label>Residence</label>
                                            <p>India</p>
                                        </div>
                                        <div className="media">
                                            <label>Address</label>
                                            <p>Kochi, Kerala</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="media">
                                            <label>E-mail</label>
                                            <p>{Doctor.email}</p>
                                        </div>
                                        <div className="media">
                                            <label>Phone</label>
                                            <p>{Doctor.phone}</p>
                                        </div>
                                        <div className="media">
                                            <label>Time</label>
                                            <p>{Doctor.time}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-avatar">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dotorsview;
