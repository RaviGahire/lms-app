import { Routes, Route } from 'react-router-dom';
import { CourseLayout } from '../layouts/CourseLayout';
import { CourseCreationPage } from '../features/course-creation';

export const CourseRoutes = () => {
  return (
    <CourseLayout>
      <Routes>
        <Route element={<CourseCreationPage />} path="/create" />
      </Routes>
    </CourseLayout>
  );
};
