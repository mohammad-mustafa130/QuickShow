import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturedSection from '../components/FeaturedSection'
import MovieCard from '../components/MovieCard'
import TrailersSection from '../components/TrailersSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <MovieCard />
      <TrailersSection />
    </>
  )
}

export default Home