import MyCarousel from "../components/MyCarousel";

function HomePage() {
  return (
    <>
      <div className="d-flex justify-content-center position-relative w-100 p-0">
        <img
          src="https://www.rejeuvine.com/wp-content/uploads/2018/08/7-Steps-That-the-Best-Spa-F.jpg"
          className="d-block w-100"
          alt="photo"
        />
        <div
          className="position-absolute"
          style={{ color: "#001F3F", zIndex: "3", top: "20%" }}
        >
          <p className="fw-semibold fst-italic fs-4">
            Hello There! Welcome To…
          </p>
          <h5 className="fw-bolder fst-italic fs-2">ESA BEAUTY CLINIC</h5>
          <p className="fw-semibold fst-italic">
            Your Sanctuary of Radiance and Well-Being!
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-1"></div>
        <div
          className="col-10 border border-warning-subtle border-opacity-50% rounded-4 mt-5 mb-5"
          style={{ boxShadow: "#aa8c2c 1px 1px 1px 1px" }}
        >
          <div className="p-4">
            {" "}
            <p>
              Welcome to ESA Beauty Clinic – Your Sanctuary of Radiance and
              Well-Being!
            </p>
            <p>
              Step into a world where beauty meets serenity, and let ESA Beauty
              Clinic be your haven for skin care excellence. Nestled in the
              heart of tranquility, we invite you to embark on a transformative
              journey towards radiant and rejuvenated skin.
            </p>
            <p>
              At ESA Beauty Clinic, we redefine beauty with a holistic approach,
              offering a diverse range of premium skin care services tailored to
              elevate your natural glow. Our dedicated team of experienced
              aestheticians and skincare specialists are committed to delivering
              personalized treatments that cater to your unique needs.
            </p>
            <p>
              Indulge in the luxury of our state-of-the-art facilities, where
              innovation meets relaxation. From revitalizing facials to
              cutting-edge treatments, we pride ourselves on creating an oasis
              where beauty, science, and wellness harmoniously converge.
            </p>
            <p>
              <strong>Why Choose ESA Beauty Clinic?</strong>
            </p>
            <ul>
              <li>
                <strong>Expertise:</strong> Our team of skilled professionals
                brings a wealth of expertise to address diverse skin concerns.
                Trust us to provide expert advice and customized solutions that
                enhance your skin's health and vitality.
              </li>

              <li>
                <strong>Innovation:</strong> Explore the latest advancements in
                skincare technology with our innovative treatments. ESA Beauty
                Clinic stays at the forefront of industry trends to bring you
                the most effective and transformative experiences.
              </li>

              <li>
                <strong>Pampering Experience:</strong> Immerse yourself in an
                atmosphere of tranquility and indulgence. Our spa-like ambiance
                and personalized care ensure every visit is a rejuvenating
                escape from the stresses of daily life.
              </li>

              <li>
                <strong>Tailored Solutions:</strong> No two skins are alike, and
                neither are our treatments. Experience the luxury of bespoke
                skincare regimens designed to address your specific needs,
                leaving you with luminous and youthful skin.
              </li>
            </ul>
            <p>
              Discover the ESA Beauty Clinic difference – where each visit is a
              celebration of your unique beauty. Join us on this journey towards
              skin perfection, and let your radiant transformation begin. Your
              luminous future awaits at ESA Beauty Clinic!
            </p>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <div>
        <MyCarousel />
      </div>
    </>
  );
}

export default HomePage;
