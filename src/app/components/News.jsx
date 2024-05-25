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
  };

  return (
    <div className="container mx-auto py-10">
      <Slider {...settings}>
        {articles.map((article, index) => (
          <div key={index} className="p-4">
            <div className="bg-white shadow-md h-[450px] rounded-lg overflow-hidden flex flex-col">
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p
                  className={`text-gray-700 flex-grow text-sm overflow-hidden line-clamp-2`}
                >
                  {article.description}
                </p>
                <button
                  onClick={() => window.open(article.url, "_blank")}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
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
