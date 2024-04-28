import React from "react";
import Image from "next/image";
import TitleDesc from "../TitleDesc";
import { imagesData, videoData } from "@/utils/getData";

const Gallery = () => {
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6 flex flex-col gap-12">
        <TitleDesc
          desc="Explore our state-of-the-art facilities, modern classrooms, and
            vibrant student community."
          title="Welcome to Our Pleasant English Academy"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Our Facilities and Student Life
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {imagesData.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg"
              >
                <Image
                  alt={image.alt}
                  src={image.src}
                  layout="responsive"
                  width={400}
                  height={300}
                  className="object-cover transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-900/50 transition-all duration-300 group-hover:bg-gray-900/0" />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-center">
                  <h3 className="text-lg font-semibold text-white">
                    {image.alt}
                  </h3>
                  <p className="text-sm text-gray-300">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Student Engagements and Activities
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {videoData.map((video, index) => {
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <video controls width="100%" className="object-cover">
                    <source src={video.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gray-900/50 transition-all duration-300 group-hover:bg-gray-900/0" />
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-center">
                    <h3 className="text-lg font-semibold text-white">
                      {video.alt}
                    </h3>
                    <p className="text-sm text-gray-300">{video.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;