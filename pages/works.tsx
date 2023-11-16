import Container from "$components/Container";
import SectionPreview from "$components/sections/SectionPreview";
import { works } from "../src/data/works";
import { generateNumbers } from "../src/helpers/getRandom";

// Import Swiper styles
import "swiper/css";
import { useEffect, useState } from "react";
import WorkModal from "$components/modals/WorkModal";
import { useModal } from "$hooks/modal";

const Works = () => {
  const [randomHeights, setRandomHeight] = useState<number[]>([]);
  useEffect(() => {
    if (window) {
      setRandomHeight(
        generateNumbers(works.length, 280, window.innerHeight * 0.8)
      );
    }
  }, []);

  const { currentModal, setCurrentModal } = useModal();

  return (
    <main className="h-full">
      <SectionPreview
        title="Портфолио"
        routes={[
          {
            href: "/",
            text: "Главная",
          },
        ]}
        currentRoute="Портфолио"
      />
      <section className="py-20">
        <Container className="max-w-5xl w-full mx-auto">
          <div className="hidden flex-wrap relative lg:flex gap-5">
            {works.map((work, i) => {
              return (
                <button
                  style={{
                    height: randomHeights[i],
                  }}
                  onClick={() =>
                    setCurrentModal({ name: "Work", payload: work })
                  }
                  className={`w-[48%] group relative even:right-0`}
                  key={work.title}
                >
                  <div className="absolute left-0 top-0 w-full h-full flex items-center group-hover:opacity-90 justify-center bg-brand cursor-pointer opacity-0 transition">
                    <span className="text-[black] border-b-[black] text-xl font-medium border-b text-center">
                      Подробнее
                    </span>
                  </div>
                  <img
                    className="w-full h-full object-cover"
                    src={work.img}
                    alt={work.title}
                  />
                </button>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-between lg:hidden">
            {works.map((work, i) => {
              return (
                <div
                  className={`w-full h-[70vw] md:h-[50vw] relative mb-20 group last:mb-0`}
                  key={work.title}
                >
                  <div className="absolute left-0 top-0 w-full h-full flex items-center group-hover:opacity-90 justify-center bg-brand cursor-pointer opacity-0 transition">
                    <span className="text-[black] border-b-[black] text-xl font-medium border-b text-center">
                      Подробнее
                    </span>
                  </div>
                  <img
                    className="w-full h-full object-cover"
                    src={work.img}
                    alt={work.title}
                  />
                </div>
              );
            })}
          </div>
          {/* <div className="w-full flex items-center justify-center px-5 sm:hidden pb-24">
            <div className="w-full max-w-xl">
              <Swiper
                spaceBetween={50}
                slidesPerView={2}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {works.map((work) => {
                  return (
                    <SwiperSlide key={work.title}>
                      <div className="flex flex-col items-center">
                        <img
                          className="w-full h-52 object-cover rounded mb-2"
                          alt={work.title}
                          src={work.img}
                        />
                        <span className="text-lg text-center text-white">
                          {work.title}
                        </span>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div> */}
        </Container>
      </section>
      {currentModal?.name === "Work" ? (
        <WorkModal data={currentModal?.payload} />
      ) : (
        ""
      )}
    </main>
  );
};

export default Works;
