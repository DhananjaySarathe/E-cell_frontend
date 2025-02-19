"use client";
import Image from "next/image";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { ABOUT_GALLARY_3, ABOUT_GALLARY_2 } from "../constants/imageLinks";
export default function About() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center  items-center lg:min-h-screen  w-full">
      <div className="w-full md:w-1/2 px-4">
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-offset="90"
        >
          <div className="text-5xl font-bold mt-10">About</div>
          <div className="text-sm mt-10 leading-relaxed">
            {/* Your Lorem Ipsum text */}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente assumenda minima nam illo ipsam debitis nostrum exercitationem, aut et error! Numquam dolore, natus qui, distinctio pariatur cum voluptatem velit voluptates suscipit dolorum, molestiae asperiores? Enim aliquid quibusdam aspernatur dolorem nobis et asperiores labore recusandae, reprehenderit beatae unde, ab assumenda illum. Aperiam magnam vel aspernatur! Animi sit inventore aliquam? Odio voluptatibus amet repellendus delectus optio atque sint voluptas provident aperiam tempora nam, sunt modi nisi temporibus animi reiciendis ipsa quos officiis sit iure in porro officia fugit! Fugiat alias earum, unde maiores, nulla asperiores nihil nisi explicabo id reiciendis ab atque.
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 my-8 mx-4 md:mt-0">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          data-aos="fade-left"
          data-aos-easing="linear"
        >
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={ABOUT_GALLARY_2}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={ABOUT_GALLARY_3}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
