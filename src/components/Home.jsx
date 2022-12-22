import React, { useState } from 'react'
import home1 from '../img/home2.jpg'
import home2 from '../img/home3.jpg'
import home3 from '../img/home1.jpg'
import '../css/hom.css'
import { BsFacebook } from 'react-icons/bs';
import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';
import { Modal } from 'antd';
function Home() {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };



    // 
    const [isModalOpen2, setIsModalOpen2] = useState(false);

    const showModal2 = () => {
        setIsModalOpen2(true);
    };

    const handleOk2 = () => {
        setIsModalOpen2(false);
    };

    const handleCancel2 = () => {
        setIsModalOpen2(false);
    };

    const royhat = () => {
        setIsModalOpen(false);
        setIsModalOpen2(true)
    };
    const kirish = () => {
        setIsModalOpen2(false)
        setIsModalOpen(true);
    };
    return (
        <>
            <div className="container-fluid  hom-bg karusel">

                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={home1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={home2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={home3} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className='reg '>
                    <h1 className='text-white biz'>Biz bilan dunyo kezing</h1>
                    <button className='button-h' onClick={showModal}><span></span>Kirish</button>
                    <button className='button-h' onClick={showModal2}><span></span> Ro'yhatdan o'tish</button>
                </div>

                <Modal title="Kirish" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label color">Login</label>
                        <input required type="text" class="form-control" id="formGroupExampleInput" placeholder="Login..." />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label color">Parol</label>
                        <input required type="password" class="form-control" id="formGroupExampleInput2" placeholder="Parol..." />
                    </div>

                    <div className='text-center'>
                        <button className='button-h w-75' ><span></span> Tizimga kirish</button>
                    </div>
                    <div className="icons w-50 d-flex justify-content-evenly mx-auto my-3">
                        <i className='h3'><AiFillGoogleCircle /></i>
                        <i className='h3'><BsFacebook /></i>
                        <i className='h3'><AiFillGithub /></i>
                    </div>

                    <div className='d-flex justify-content-between align-items-center'>
                        <p>Tarmoqda yangimisiz...</p>
                        <button className='btn btn-warning bg text-white' onClick={royhat}>Ro'yhatdan o'tish</button>
                    </div>
                </Modal>

                <Modal title="Ro'yhatdan o'tish" open={isModalOpen2} onOk={handleOk2} onCancel={handleCancel2}>
                   <form >
                   <div class="row g-3">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label color">Ism</label>
                            <input required type="text" class="form-control" id="inputEmail4" placeholder='ism' />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label color">Familya</label>
                            <input required type="text" class="form-control" id="inputPassword4" placeholder='familya' />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress" class="form-label color">Email</label>
                            <input required type="email" class="form-control" id="inputAddress" placeholder="Exsample@gmail.com" />
                        </div>
                        <label className='color'>Tug'ilgan kuningiz</label>
                        <div className="row mb-3 ">
                            <div className="col-md-4 my-1">
                                <select className="form-select" aria-label="Default select example" required>
                                <option value="">kun</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">4</option>
                                    <option value="3">5</option>
                                    <option value="3">6</option>
                                    <option value="3">7</option>
                                    <option value="3">8</option>
                                    <option value="3">9</option>
                                    <option value="3">10</option>
                                    <option value="3">11</option>
                                    <option value="3">12</option>
                                    <option value="3">13</option>
                                    <option value="3">14</option>
                                    <option value="3">15</option>
                                    <option value="3">16</option>
                                    <option value="3">17</option>
                                    <option value="3">18</option>
                                    <option value="3">19</option>
                                    <option value="2">20</option>
                                    <option value="2">21</option>
                                    <option value="2">22</option>
                                    <option value="2">23</option>
                                    <option value="2">24</option>
                                    <option value="2">25</option>
                                    <option value="2">26</option>
                                    <option value="2">27</option>
                                    <option value="2">28</option>
                                    <option value="2">29</option>
                                    <option value="2">30</option>
                                    <option value="2">31</option>
                                </select>
                            </div>
                            <div className="col-md-4 my-1">
                                <select className="form-select" aria-label="Default select example" required>
                                    <option value="">Oy</option>
                                    <option value="Yanvar">Yanvar</option>
                                    <option value="Fevral">Fevral</option>
                                    <option value="Mart">Mart</option>
                                    <option value="Aprel">Aprel</option>
                                    <option value="May">May</option>
                                    <option value="Iyun">Iyun</option>
                                    <option value="Iyul">Iyul</option>
                                    <option value="Avgust">Avgust</option>
                                    <option value="Sentyabr">Sentyabr</option>
                                    <option value="Oktiyabr">Oktiyabr</option>
                                    <option value="Noyabr">Noyabr</option>
                                    <option value="Dekabr">Dekabr</option>
                                </select>
                            </div>
                            <div className="col-md-4 my-1">
                                <select className="form-select" aria-label="Default select example" required>
                                    <option value="">Yil</option>
                                    <option value="1">2022</option>
                                    <option value="2">2021</option>
                                    <option value="2">2020</option>
                                    <option value="2">2019</option>
                                    <option value="2">2018</option>
                                    <option value="2">2017</option>
                                    <option value="2">2016</option>
                                    <option value="2">2015</option>
                                    <option value="2">2014</option>
                                    <option value="2">2013</option>
                                    <option value="2">2012</option>
                                    <option value="2">2011</option>
                                    <option value="2">2010</option>
                                    <option value="2">2009</option>
                                    <option value="3">...</option>
                                </select>
                            </div>
                        </div>

                    </div>


                    <label className='color'>Jinsingiz</label>
                    <div className='d-flex'>
                        <div class="form-check mx-2">
                            <input required class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label " for="flexRadioDefault1">
                                Erkak
                            </label>
                        </div>
                        <div class="form-check mx-2">
                            <input required class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label " for="flexRadioDefault2">
                                Ayol
                            </label>
                        </div>
                    </div>

                    <div className='text-center'>
                        <button className='button-h w-75'     ><span></span> Ro'yhatdan o'tish</button>
                    </div>

                    <div className='d-flex justify-content-between align-items-center my-3'>
                        <p>Akkauntingiz bormi...</p>
                        <button className='btn btn-warning bg text-white' onClick={kirish}>Kirish</button>
                    </div>
                   </form>
                </Modal>



            </div>

        </>
    )
}

export default Home
