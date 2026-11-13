import { Navbar } from "../shared/components/Navbar";

interface CourseLayoutProps {
  children?: React.ReactNode;
}

export const CourseLayout = ({children}:CourseLayoutProps) => {
 return (
     <div aria-label='course-creation-layout-section' className='bg-app'>
       {/* Navbar */}
       <Navbar />
       <div>{children}</div>
     </div>
   );
}
