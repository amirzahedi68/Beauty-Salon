import ServicesCards from "../components/ServicesCards";

function Services() {
  const servicesData = [
    {
      title: "Facials:",
      description:
        "Facials involve a series of skincare treatments for the face, including cleansing, exfoliation, extraction, and hydration. Different types of facials target specific skin issues, such as acne, anti-aging, or hydration. These treatments are not only relaxing but also contribute to improved skin texture and overall complexion.",
      imageUrl: "/ficials.jpg",
    },
    {
      title: "Chemical Peels:",
      description:
        "Chemical peels involve applying a chemical solution to the skin to exfoliate the outer layer. This helps improve skin texture, reduce fine lines, and treat issues like uneven pigmentation and acne scars. Chemical peels come in varying strengths, allowing for customization based on individual skin concerns and sensitivity levels.",
      imageUrl:
        "https://beautymadesimply.com/wp-content/uploads/2019/07/types-of-chemical-peels.jpeg",
    },
    {
      title: "Microdermabrasion:",
      description:
        "Microdermabrasion is a non-invasive procedure that exfoliates the skin using micro-crystals. It helps reduce the appearance of fine lines, sun damage, and acne scars. This treatment is known for its immediate results and minimal downtime, making it a popular choice for achieving smoother, more youthful-looking skin.",
      imageUrl: "/Microdermabrasion.jpg",
    },
    {
      title: "Dermaplaning:",
      description:
        "Dermaplaning is a manual exfoliation technique that removes dead skin cells and peach fuzz from the face, promoting smoother skin and enhancing the effectiveness of skincare products. It provides an instant brightening effect and is often combined with other facial treatments.",
      imageUrl: "/Dermaplaning.jpg",
    },
    {
      title: "Skin Analysis:",
      description:
        "Professional skin analysis helps determine the client's skin type, conditions, and concerns. This information guides the selection of appropriate skincare products and treatments. Skin analysis may involve advanced technologies, allowing for a comprehensive understanding of the skin's needs.",
      imageUrl: "/Skin Analysis.jpg",
    },
    {
      title: "Skin Tightening Treatments:",
      description:
        "Various non-surgical skin tightening treatments, such as radiofrequency or ultrasound, aim to stimulate collagen production, reducing sagging and promoting a more youthful appearance. These treatments offer a non-invasive alternative to surgical procedures for skin tightening and lifting.",
      imageUrl: "/Skin Tightening Treatments.jpg",
    },
    {
      title: "LED Light Therapy:",
      description:
        "LED light therapy uses different wavelengths of light to address various skin issues, including acne, inflammation, and signs of aging. It promotes healing and stimulates collagen production. LED therapy is a versatile and gentle treatment suitable for various skin types.",
      imageUrl: "/LED Light Therapy.jpg",
    },
    {
      title: "HydraFacial:",
      description:
        "The HydraFacial is a multi-step treatment that cleanses, exfoliates, extracts, and hydrates the skin. It combines various skincare techniques for a comprehensive facial experience. The HydraFacial is praised for its ability to address multiple skin concerns in a single session.",
      imageUrl: "/HydraFacial.jpg",
    },
    {
      title: "Laser Hair Removal:",
      description:
        "Laser hair removal utilizes laser technology to remove unwanted hair permanently. It is a popular option for achieving smooth, hair-free skin. Laser hair removal is effective on various body areas and provides long-lasting results.",
      imageUrl: "/Laser Hair Removal.jpg",
    },
    {
      title: "Skin Rejuvenation:",
      description:
        "Skin rejuvenation treatments, like IPL (Intense Pulsed Light) therapy, target issues such as sun damage, hyperpigmentation, and redness, promoting a more even skin tone. These treatments can address specific skin concerns, resulting in a revitalized complexion.",
      imageUrl: "/Skin Rejuvenation.jpg",
    },
    {
      title: "Collagen Induction Therapy (Microneedling):",
      description:
        "Microneedling involves using fine needles to create controlled micro-injuries in the skin, stimulating collagen production and improving the appearance of scars, wrinkles, and fine lines. This minimally invasive procedure promotes natural skin renewal and rejuvenation.",
      imageUrl: "/Collagen Induction Therapy (Microneedling).jpg",
    },
    {
      title: "Customized Skincare Regimens:",
      description:
        "Beauty salons often provide personalized skincare regimens tailored to individual skin types and concerns. This may include recommending specific products and routines for at-home maintenance. Customized regimens aim to support ongoing skin health and address specific needs for long-term benefits.",
      imageUrl: "/Customized Skincare Regimens.jpg",
    },
  ];

  return (
    <div>
      {servicesData.map((service, index) => (
        <ServicesCards
          key={index}
          title={service.title}
          description={service.description}
          imageUrl={service.imageUrl}
          alignLeft={index % 2 === 0}
        />
      ))}
    </div>
  );
}

export default Services;
