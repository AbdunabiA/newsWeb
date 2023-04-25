import { useSwiper } from "swiper/react";

const PrevSlide = () => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slidePrev()}>prev</button>;
};

export default PrevSlide;
