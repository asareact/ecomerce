import img from "../../assets/images/rebookLegacy.jpg";
import img1 from "../../assets/images/AcerNitro5.jpg";
import img3 from "../../assets/images/Img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img7.jpg";

export const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 2000,
  adaptiveHeight: true,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const productCarousel = [
  {
    id: 21,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    cat: "men's clothing",
    image: img,
    rating: 3.9,
    inCart: 0,
    quantity: 300,
  },
  {
    id: 22,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    cat: "men's clothing",
    image: img1,
    rating: 3.9,
    inCart: 0,
    quantity: 300,
  },
  {
    id: 23,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    cat: "men's clothing",
    image: img3,
    rating: 3.9,
    inCart: 0,
    quantity: 300,
  },
  {
    id: 24,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    cat: "men's clothing",
    image: img4,
    rating: 3.9,
    inCart: 0,
    quantity: 300,
  },
  {
    id: 25,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    cat: "men's clothing",
    image: img5,
    rating: 3.9,
    inCart: 0,
    quantity: 300,
  },
  {
    id: 29,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    cat: "men's clothing",
    image: img6,
    rating: 3.9,
    inCart: 0,
    quantity: 300,
  },
  {
    id: 26,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    cat: "men's clothing",
    image: img7,
    rating: 3.9,
    inCart: 0,
    quantity: 300,
  },
];
