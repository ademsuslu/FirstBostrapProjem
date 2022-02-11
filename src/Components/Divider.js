import React from 'react';

const Divider = () => {
  return <section id="divider" className="generic bg-dark ">
      <div className="container mt-2">
          <div className="row">
              <div className="col-8 offset-2">
                  <form>
                      <div className="input-group input-group-lg">
                          <input type="email"  className="form-control rounded-2 border-danger text-white bg-transparent" placeholder="@Sent Email" />
                            <span className="input-grup-btn input-group-lg  ps-2">
                                <input  value="Send" type="submit" className='btn btn-dark text-white bg-success border-none' />
                            </span>
                      </div>
                  </form>
              </div>
          </div>
      </div>

  </section>;
};

export default Divider;
