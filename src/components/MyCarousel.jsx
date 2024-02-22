import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../App.css";
import { EffectCoverflow, Pagination } from "swiper/modules";

function MyCarousel() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="/ficials.jpg"
            style={{ display: "flex", position: "absolute" }}
          />

          <h5 className="d-flex fixed-bottom align-item-end justify-content-center">
            Ficials
          </h5>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/types-of-chemical-peels.jpg"
            style={{ display: "flex", position: "absolute" }}
          />

          <h5 className="d-flex fixed-bottom align-item-end justify-content-center">
            Types of Chemical Peels
          </h5>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="/Microdermabrasion.jpg"
            style={{ display: "flex", position: "absolute" }}
          />

          <h5 className="d-flex fixed-bottom align-item-end justify-content-center">
            Microdermabrasion
          </h5>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="/Dermaplaning.jpg"
            style={{ display: "flex", position: "absolute" }}
          />

          <h5 className="d-flex fixed-bottom align-item-end justify-content-center">
            Dermaplaning
          </h5>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="/Skin Analysis.jpg"
            style={{ display: "flex", position: "absolute" }}
          />

          <h5 className="d-flex fixed-bottom align-item-end justify-content-center">
            Skin Analysis
          </h5>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="/Skin Tightening Treatments.jpg"
            style={{ display: "flex", position: "absolute" }}
          />

          <h5 className="d-flex fixed-bottom align-item-end justify-content-center">
            Skin Tightening Treatments
          </h5>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="/LED Light Therapy.jpg"
            style={{ display: "flex", position: "absolute" }}
          />

          <h5 className="d-flex fixed-bottom align-item-end justify-content-center">
            LED Light Therapy
          </h5>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="/HydraFacial.jpg"
            style={{ display: "flex", position: "absolute" }}
          />

          <h5 className="d-flex fixed-bottom align-item-end justify-content-center">
            HydraFacial
          </h5>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="/Laser Hair Removal.jpg"
            style={{ display: "flex", position: "absolute" }}
          />

          <h5 className="d-flex fixed-bottom align-item-end justify-content-center">
            Laser Hair Removal
          </h5>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="/Skin Rejuvenation.jpg"
            style={{ display: "flex", position: "absolute" }}
          />

          <h5 className="d-flex fixed-bottom align-item-end justify-content-center">
            Skin Rejuvenation
          </h5>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="/Collagen Induction Therapy (Microneedling).jpg"
            style={{ display: "flex", position: "absolute" }}
          />

          <h5 className="d-flex fixed-bottom align-item-end justify-content-center">
            Microneedling
          </h5>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img
            src="/Customized Skincare Regimens.jpg"
            style={{ display: "flex", position: "absolute" }}
          />

          <h5 className="d-flex fixed-bottom align-item-end justify-content-center">
            Customized Skincare Regimens
          </h5>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default MyCarousel;
