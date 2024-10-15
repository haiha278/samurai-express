import { useSwiper } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const SwiperNivation = () => {
  const swiper = useSwiper();
  return (
    <div>
      <button
        className="bg-[rgba(64,121,176,255)] absolute right-[80px] top-[50%] py-2 px-4 rounded-full text-white"
        onClick={() => swiper.slideNext()}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      <button
        className="bg-[rgba(64,121,176,255)] absolute left-[80px] top-[50%] py-2 px-4 rounded-full text-white"
        onClick={() => swiper.slidePrev()}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </div>
  );
};
