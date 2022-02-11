import React from 'react';

const Modal = () => {
    return <section id="team" className="generic">
        <div className="container">
            <h2 className="display-5 text-danger mb-5">The Team</h2>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-3 col-sm-6 p-0">
                    <div className="d-grid bg-warning py-5">
                        <button type="button" class="btn btn-warning rounded-0 py-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <span className="lead">Html</span>
                        </button>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6  p-0">
                    <div className="d-grid bg-danger py-5">
                        <button type="button" class="btn btn-danger rounded-0 py-5" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                            <span className="lead">Boostrap5</span>
                        </button>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6  p-0">
                    <div className="d-grid bg-dark py-5">
                        <button type="button" class="btn btn-dark rounded-0 py-5" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                            <span className="lead">javaScript</span>
                        </button>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6  p-0">
                    <div className="d-grid bg-info py-5">
                        <button type="button" class="btn btn-info rounded-0 py-5" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                            <span className="lead">ReactJs</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {/* ModalOne */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <button type="button" className="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
                    <div className="modal-body">
                        <img src="https://source.unsplash.com/random" className="img-fluid" />
                        <h5 className="lead text-danger mt-2">John Doe</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea fugiat deleniti deserunt fugit quidem maxime sed quasi repellat, consectetur expedita!</p>
                        <ul className="list-unstyled">
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <ul>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit.</li>
                            </ul>
                            <li>Lorem ipsum dolor sit.</li>
                        </ul>
                        <div class="btn-group w-100" role="group" aria-label="Basic mixed styles example">
                            <button type="button" class="btn btn-danger">Linkedin</button>
                            <button type="button" class="btn btn-warning">Github</button>
                            <button type="button" class="btn btn-success">netflify</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* ModalTwo */}
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <button type="button" className="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
                    <div className="modal-body">
                        <img src="https://source.unsplash.com/random" className="img-fluid" />
                        <h5 className="lead text-danger mt-2">John Doe</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea fugiat deleniti deserunt fugit quidem maxime sed quasi repellat, consectetur expedita!</p>
                        <ul className="list-unstyled">
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <ul>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit.</li>
                            </ul>
                            <li>Lorem ipsum dolor sit.</li>
                        </ul>
                        <div class="btn-group w-100" role="group" aria-label="Basic mixed styles example">
                            <button type="button" class="btn btn-danger">Linkedin</button>
                            <button type="button" class="btn btn-warning">Github</button>
                            <button type="button" class="btn btn-success">netflify</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        {/* ModalTheree */}
        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <button type="button" className="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
                    <div className="modal-body">
                        <img src="https://source.unsplash.com/random" className="img-fluid" />
                        <h5 className="lead text-danger mt-2">John Doe</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea fugiat deleniti deserunt fugit quidem maxime sed quasi repellat, consectetur expedita!</p>
                        <ul className="list-unstyled">
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <ul>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit.</li>
                            </ul>
                            <li>Lorem ipsum dolor sit.</li>
                        </ul>
                        <div class="btn-group w-100" role="group" aria-label="Basic mixed styles example">
                            <button type="button" class="btn btn-danger">Linkedin</button>
                            <button type="button" class="btn btn-warning">Github</button>
                            <button type="button" class="btn btn-success">netflify</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        {/* ModalFour */}
        <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <button type="button" className="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
                    <div className="modal-body">
                        <img src="https://source.unsplash.com/random" className="img-fluid " />
                        <h5 className="lead text-danger mt-2">John Doe</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea fugiat deleniti deserunt fugit quidem maxime sed quasi repellat, consectetur expedita!</p>
                        <ul className="list-unstyled">
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <ul>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem ipsum dolor sit.</li>
                            </ul>
                            <li>Lorem ipsum dolor sit.</li>
                        </ul>
                        <div class="btn-group w-100" role="group" aria-label="Basic mixed styles example">
                            <button type="button" class="btn btn-danger">Linkedin</button>
                            <button type="button" class="btn btn-warning">Github</button>
                            <button type="button" class="btn btn-success">netflify</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid pt-2">
            <div className="row bg-dark">
                <div className="col d-flex flex-column py-2 justify-content-center align-items-center text-align-center">
                    <div className="col">
                        <div className="btn-group p-2" role="group" aria-label="Basic mixed styles example">
                            <button type="button" className="btn btn-success me-2 rounded-2">Linkedin</button>
                            <button type="button" className="btn btn-success me-2 rounded-2">Github</button>
                            <button type="button" className="btn btn-success me-2 rounded-2">YouTue</button>
                        </div>
                    </div>
                    <h4 className="text-light">© 2021 Company, Inc</h4>
                </div>
            </div>
        </div>
    </section>

};

export default Modal;
