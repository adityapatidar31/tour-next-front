import { useParams } from "react-router-dom";
import ImageCarousel from "./Carousel";

const tour = {
  startLocation: {
    description: "Aspen, USA",
    type: "Point",
    coordinates: [-106.822318, 39.190872],
    address: "419 S Mill St, Aspen, CO 81611, USA",
  },
  ratingsAverage: 4.5,
  ratingsQuantity: 6,
  images: ["tour-3-1.jpg", "tour-3-2.jpg", "tour-3-3.jpg"],
  startDates: [
    "2022-01-05T10:00:00.000Z",
    "2022-02-12T10:00:00.000Z",
    "2023-01-06T10:00:00.000Z",
  ],
  _id: "5c88fa8cf4afda39709c295a",
  name: "The Snow Adventurer",
  duration: 4,
  maxGroupSize: 10,
  difficulty: "difficult",
  guides: [
    "5c8a21d02f8fb814b56fa189",
    "5c8a23412f8fb814b56fa18c",
    "5c8a1f4e2f8fb814b56fa185",
  ],
  price: 997,
  summary: "Exciting adventure in the snow with snowboarding and skiing",
  description:
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
  imageCover: "tour-3-cover.jpg",
  locations: [
    {
      _id: "5c88fa8cf4afda39709c295c",
      name: "Aspen Highlands",
      type: "Point",
      coordinates: [-106.855385, 39.182677],
      day: 1,
      image: "aspen-highlands.jpg",
      description:
        "Aspen Highlands is a breathtaking mountain destination known for its challenging ski slopes and stunning alpine scenery. Offering deep powder runs, scenic vistas, and a laid-back atmosphere, it is a favorite among experienced skiers and nature lovers. The Highlands Bowl provides an exhilarating experience, rewarding adventurers with unparalleled panoramic views. During summer, visitors enjoy hiking, mountain biking, and peaceful nature walks through the majestic Colorado wilderness.",
    },
    {
      _id: "5c88fa8cf4afda39709c295b",
      name: "Beaver Creek",
      type: "Point",
      coordinates: [-106.516623, 39.60499],
      day: 2,
      image: "beaver-creek.jpg",
      description:
        "Beaver Creek is a world-class ski resort known for its luxurious charm and family-friendly atmosphere. With impeccably groomed slopes, upscale accommodations, and a welcoming village, it provides a premium winter getaway. Skiers of all levels enjoy its diverse terrain, while summer visitors explore scenic hiking trails. Renowned for its warm chocolate chip cookies at the base, Beaver Creek offers an unforgettable blend of adventure and relaxation.",
    },
  ],
};

function Product() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <ImageCarousel images={tour.images} coverImage={tour.imageCover} />
    </>
  );
}

export default Product;
