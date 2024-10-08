"use client";
import styles from "../../styles/sliders/mainSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieResponse {
  page: number;
  popMovies: Movie[];
}

const MainSliderSub = ({ popMovies }: MovieResponse) => {
  console.log(popMovies);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          {popMovies.map((popMovie, idx) => (
            <div key={idx} className={styles.center}>
              <img
                src={`https://image.tmdb.org/t/p/original/${popMovie.backdrop_path}`}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MainSliderSub;
