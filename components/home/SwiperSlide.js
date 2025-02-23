"use client";

import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import GetNewCollection from "@/actions/api-actions";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Product from "./Product";

export default function Slider() {
  const [products, setProducts] = useState([]);
  const paginationRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const data = await GetNewCollection();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <div className="relative w-full ">
      <Swiper
        className="w-full"
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          720: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{
          el: paginationRef.current,
          type: "custom",
          renderCustom: (swiper, current, total) => {
            return `Page ${current} of ${total}`;
          },
        }}
        onSwiper={(swiper) => {
          if (paginationRef.current) {
            swiper.params.pagination.el = paginationRef.current;
            swiper.pagination.init();
            swiper.pagination.update();
          }
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Product prod={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination & Navigation */}
      <div className="flex items-center justify-center gap-4 mt-4 text-gray-700">
        {/* Left Arrow Button */}
        <button className="custom-prev px-4 py-2 border-2 border-gray-200  rounded-lg transition">
          ◀
        </button>

        {/* Pagination Text (Page X of Y) */}
        <div ref={paginationRef} className="font-semibold text-lg"></div>

        {/* Right Arrow Button */}
        <button className="custom-next px-4 py-2 border-2 border-gray-200 rounded-lg transition">
          ▶
        </button>
      </div>
    </div>
  );
}
