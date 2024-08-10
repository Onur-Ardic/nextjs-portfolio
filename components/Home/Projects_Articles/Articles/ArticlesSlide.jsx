'use client'
import React from 'react'
import Slider from 'react-slick'
import ArticleCard from './ArticlesCard'

function ArticlesSlide({ articlesData }) {
  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    slidesToScroll: 2,
  }
  return (
    <div className="slider-container mt-10">
      <Slider {...settings}>
        {articlesData.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </Slider>
    </div>
  )
}

export default ArticlesSlide
