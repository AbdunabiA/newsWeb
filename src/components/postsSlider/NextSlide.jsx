import { useSwiper } from "swiper/react";

const NextSlide = () => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slideNext()}>next</button>;
};

export default NextSlide;
