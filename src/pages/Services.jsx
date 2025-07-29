import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { IoIosArrowForward } from "react-icons/io";
import "swiper/css/pagination";

const services = [
  {
    title: "Strategic Planning",
    desc: "Nunc a scelerisque dolor, in cursus sem. Aenean turpis elit, tempus vel dictum consectetur.",
    image: "/img/team.jpg",
  },
  {
    title: "Employee Training",
    desc: "Nunc a scelerisque dolor, in cursus sem. Aenean turpis elit, tempus vel dictum consectetur.",
    image: "/img/team.jpg",
  },
  {
    title: "Portfolio Manage",
    desc: "Nunc a scelerisque dolor, in cursus sem. Aenean turpis elit, tempus vel dictum consectetur.",
    image: "/img/team.jpg",
  },
  {
    title: "Team Leadership",
    desc: "Nunc a scelerisque dolor, in cursus sem. Aenean turpis elit, tempus vel dictum consectetur.",
    image: "/img/team.jpg",
  },
  {
    title: "Portfolio Manage",
    desc: "Nunc a scelerisque dolor, in cursus sem. Aenean turpis elit, tempus vel dictum consectetur.",
    image: "/img/team.jpg",
  },
  {
    title: "Team Leadership",
    desc: "Nunc a scelerisque dolor, in cursus sem. Aenean turpis elit, tempus vel dictum consectetur.",
    image: "/img/team.jpg",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-700  to-teal-700 h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Human Resources Services</h2>
          <p className="text-black-800 mt-3 max-w-xl mx-auto text-sm md:text-base">
            Nunc a scelerisque dolor, in cursus sem. Aenean turpis elit, tempus vel dictum consectetur.
          </p>
        </div>

        <div className="mt-12">
          <Swiper
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="mx-2 my-4 border rounded-2xl shadow-md px-6 py-10 bg-white hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300">
                  <div className="relative flex justify-center mb-5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-16 h-16 sm:w-14 sm:h-14 rounded-full object-cover border-4 border-white shadow-lg -mt-12"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500 mb-6">{service.desc}</p>
                  <div className="w-10 h-10 mx-auto bg-teal-800 text-white rounded-full flex items-center justify-center hover:bg-teal-900 hover:scale-110 transition duration-300">
                   <IoIosArrowForward />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;
