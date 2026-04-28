import React from 'react'
import { CourseCategories } from './CourseCategories'
import { CourseHero } from './CourseHero'
import {Footer} from '../../components/Common/Footer'
import RecommendedCarousel from './RecommendedCarousel '
import { Banner } from '../Partials/Banner'
import { StudentReview } from '../Partials/StudentReview'

export const Courses = () => {
  return (
<>
<CourseHero/>
<CourseCategories/>
<Banner/>
<RecommendedCarousel/>
<StudentReview/>
<Banner/>
<RecommendedCarousel/>
<Footer/>




</>
  )
}
