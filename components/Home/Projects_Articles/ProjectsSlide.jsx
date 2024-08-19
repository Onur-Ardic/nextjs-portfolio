'use client'
import MuiButton from '@/components/Uİ/MuiButton'
import React, { Component } from 'react'
import Slider from 'react-slick'

function ProjetcsSlide({ projects }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    autoplay: true,
    speed: 2000,
    cssEase: 'linear',
    autoplaySpeed: 3000,

    beforeChange: function (currentSlide, nextSlide) {
      console.log('before change', currentSlide, nextSlide)
    },
    afterChange: function (currentSlide) {
      console.log('after change', currentSlide)
    },
  }
  return (
    <div className="slider-container ubuntu">
      <Slider {...settings}>
        {projects.slice(1, 15).map((project) => (
          <div aria-hidden="true" key={project.id} className="border p-3 rounded-sm ">
            <h3 className="my-3">{project.name}</h3>
            <p>{project.description}</p>
            <MuiButton link={project.html_url} variant={'outlined'} text={'View Project'} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ProjetcsSlide
