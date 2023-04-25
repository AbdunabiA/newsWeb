import { Pagination, A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y";
// import "swiper/css/effect-fade";
import NextSlide from "./NextSlide";
import PrevSlide from "./PrevSlide";

import { Post } from "components";

const index = ({posts}) => {
  console.log(posts);
  return (
    <Swiper
      modules={[Pagination, A11y, EffectFade]}
      // effect="fade"
      spaceBetween={24}
      slidesPerView={4}
      pagination={{ clickable: true }}
      draggable
      // onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        280: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        1920: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
      }}
      className="w-full bg-white"
    >
      <div slot="container-start" className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Slider</h1>
        <div className="space-x-4">
        <PrevSlide />
        <NextSlide />
        </div>
      </div>
      {posts.map((post, i) => (
        <SwiperSlide key={i} className="">
          <Post
            flexDirection="flex-col"
            post={post}
            // title="What a Disabled Squirrel Taught Me About Life, Work, and Love"
            // description="Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner"
            // img={PostImg}
            // authorName={`Jon Kantner`}
            // authorImg={AuthorImg}
            // postedAt={`July 12 , 2022`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default index;
