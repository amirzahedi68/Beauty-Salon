import PropTypes from "prop-types";

function ServicesCards({ title, description, imageUrl, alignLeft }) {
  const cardClass = alignLeft ? "left-card" : "right-card";

  return (
    <div
      className={`container d-flex justify-content-${
        alignLeft ? "start" : "end"
      }`}
    >
      <div className={`pt-5 ps-3 pb-3 col-md-8 ${cardClass}`}>
        <div
          className="row border border-warning-subtle border-opacity-50% rounded-4 "
          style={{ boxShadow: "#aa8c2c 1px 1px 1px 1px" }}
        >
          <div className="col-md-7 ps-4 pt-3 order-md-1 order-2">
            <h4 className="">{title}</h4>
            <div className="pb-3" style={{ textAlign: "justify" }}>
              {description}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="col-md-5 order-md-2 order-1 justify-content-md-end"
          >
            <img
              className="rounded-4 pt-1 pb-1 img-fluid"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
              }}
              src={imageUrl}
              alt={`Service ${title}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

ServicesCards.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  alignLeft: PropTypes.bool.isRequired,
};

export default ServicesCards;
