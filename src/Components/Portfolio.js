import React from "react";

const Portfolio = () => {
    return (
        <section id="latest">
            <div className="container">
                <h1 className="display-5 m-5">What I do</h1>
            </div>
            <div className="container">
                <div className="col">
                    <div className="row ">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active ">
                                    <img src="https://source.unsplash.com/random" className="d-block rounded-3 " />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://source.unsplash.com/random" className="d-block rounded-3  " />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://source.unsplash.com/random" className="d-block  rounded-3 " />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon bg-danger" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon bg-danger" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Portfolio;
