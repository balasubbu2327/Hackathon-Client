import React from "react";
import imgBg from "../../img/exp.png";

const NewRecordWelcomePage = ({ isExpHandler, isIncHandler }) => {
  return (
    <section className="position-relative pb-20 bg-secondary-light overflow-hidden">
      <div className="container position-relative">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-5 mb-8 mb-lg-0">
            <img className="img-fluid ms-auto" src={imgBg} alt="" />
          </div>
          <div className="col-12 col-lg-7">
            <div className="mw-lg-md ms-lg-16 mt-lg-6 mt-xl-12">
              <h2 className="mb-5 text-primary">What Do you want to Record?</h2>
              <p className="lead text-muted lh-lg mb-6">
                Select an action to take carefully whether you want to record an
                expense or income
              </p>
              <div className="mb-16 mb-lg-24">
                <button
                  onClick={isIncHandler}
                  className="btn btn-primary d-block d-md-inline-block mb-2 mb-md-0 mb-lg-0 me-md-4"
                >
                  Income
                </button>
                <button
                  onClick={isExpHandler}
                  className="btn btn-dark d-block d-md-inline-block"
                >
                  Expenses
                </button>
              </div>
            </div>
            <div className="ms-lg-16">
              <div className="row align-items-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewRecordWelcomePage;
