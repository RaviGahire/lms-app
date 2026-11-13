import { CourseBlueprint } from './components/CourseBlueprint';
import { CourseCurriculum } from './components/CourseCurriculum';
import { CourseDetailsHero } from './components/CourseDetailsHero';
import { CourseEnrollmentCard } from './components/CourseEnrollmentCard';
import { RecommendedTracks } from './components/RecommendedTracks';
import { StudentFeedbackCard } from './components/StudentFeedbackCard';

interface CouresDetailsProps {
  courseDetails: String;
}

export const CouresDetails = ({ courseDetails }: CouresDetailsProps) => {
  return (
    <section aria-label="coures-details-page">
      {/* Course Details Hero */}
      <CourseDetailsHero />

      <div className='max-w-7xl mx-auto flex flex-wrap justify-center items-stretch gap-4 md:gap-8'>
        {/*  Course Blueprint*/}
        <CourseBlueprint />

        {/* Course Enrollment Card */}
        <CourseEnrollmentCard />
      </div>

      {/* Course Curriculum */}
      <CourseCurriculum />

      {/* Student Feedback Card */}
      <StudentFeedbackCard />

      {/* Recommended Track */}
      <RecommendedTracks />
    </section>
  );
};
