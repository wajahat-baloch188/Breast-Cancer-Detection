"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch(
          "https://newsapi.org/v2/everything?q=breast-cancer&apiKey=d2f2f5dbad844d34a3231e2f375a563f"
        );
        let data = await res.json();
        const filteredArticles = data.articles.filter(
          (article) => article.urlToImage && article.urlToImage.trim() !== ""
        );
        setArticles(filteredArticles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024, // Below this breakpoint
        settings: {
          slidesToShow: 2, // Show two slides
        },
      },
      {
        breakpoint: 768, // Below this breakpoint
        settings: {
          slidesToShow: 1, // Show only one slide
          arrows: false, // Hide arrows
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-10 md:w-[95%] w-full">
      <Slider {...settings}>
        {articles.map((article, index) => (
          <div key={index} className="p-4">
            <div className="bg-white shadow-md h-[330px] md:h-[450px] rounded-lg overflow-hidden flex flex-col">
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-[180px] md:h-[250px] object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-sm md:text-lg font-semibold text-black">
                  {article.title}
                </h3>
                <p className="text-gray-700 flex-grow text-xs md:text-sm overflow-hidden line-clamp-2">
                  {article.description}
                </p>
                <button
                  onClick={() => window.open(article.url, "_blank")}
                  className="mt-4 bg-blue-500 text-white py-1 md:py-2 px-2 md:px-4 rounded hover:bg-blue-700 transition"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default News;
