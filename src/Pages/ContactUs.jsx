function ContactUs() {
  return (
    <>
      <div className="container pt-3">
        <h3 className="text-center pb-5 pt-4">Contact Us</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 mb-4">
            <div
              className="border border-warning-subtle rounded-4 pt-3 ps-3 pb-3"
              style={{ boxShadow: "#aa8c2c 1px 1px 1px 1px", height: "100%" }}
            >
              <h6 className="fs-5">LOCATION:</h6>
              <span className="ps-2">
                7378 Yonge St, Unit 35B, Thornhill, ON L4J 8J1
              </span>
              <br />
              <br />
              <h6 className="fs-5">Email:</h6>
              <span className="ps-2">ESA.beautyclinic@gmail.com</span>
            </div>
          </div>

          <div className="col-12 col-lg-4 mb-4">
            <div
              className="border border-warning-subtle rounded-4 pt-3 ps-3"
              style={{ boxShadow: "#aa8c2c 1px 1px 1px 1px", height: "100%" }}
            >
              <h6 className="fs-5">Phones:</h6>
              <div className="row">
                <div className="col-6 col-sm-4 mb-3">
                  <span className="ps-2 pb-3">Afsaneh:</span>
                  <br />
                  <br />
                  <span className="ps-2 pb-3">Sana:</span>
                  <br />
                  <span className="ps-2 pb-3">Elham:</span>
                  <br />
                </div>
                <div className="col-6 col-sm-8 mb-3">
                  <span className="ps-2">+1 (437)776-6812</span>
                  <br />
                  <span className="ps-2 pb-3">+98 (912)808-7695</span>
                  <br />
                  <span className="ps-2 pb-3">+1 (416)473-5455</span>
                  <br />
                  <span className="ps-2 pb-3">+1 (416)550-2886</span>
                  <br />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4 mb-4">
            <div
              className="border border-warning-subtle rounded-4 pt-3 ps-3 pb-3"
              style={{ boxShadow: "#aa8c2c 1px 1px 1px 1px", height: "100%" }}
            >
              <h6 className="fs-5">Hours:</h6>
              <div className="ps-2">
                Monday 8 to 16 <br />
                Tuesday 8 to 16 <br />
                Wednesday 8 to 16 <br />
                Thursday 8 to 16 <br />
                Friday 8 to 16 <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <iframe
          title="Google Map"
          width="80%"
          height="300"
          frameBorder="1"
          scrolling="no"
          marginHeight="0"
          marginWidth="3"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5087040335153!2d-79.41497968473192!3d43.7961603791173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d526d5544cd5%3A0xbda1bb2714d0730d!2sYour%20Beauty%20Clinic!5e0!3m2!1sen!2sca!4v1644219301289!5m2!1sen!2sca"
        ></iframe>
      </div>
    </>
  );
}

export default ContactUs;
