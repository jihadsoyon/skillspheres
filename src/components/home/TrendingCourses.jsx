import CourseCard from "../courses/CourseCard";
import { getCourses } from "@/services/courseService";
import TrendingCourseToast from "./TrendingCourseToast";

const TrendingCourses = async () => {
  const courses = await getCourses();

  // Top 3 trending (highest rating after popular)
  const trendingCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(3, 6);

  return (
    <>
  <TrendingCourseToast courses={trendingCourses} />
    <section className="py-20">

      <div className="text-center mb-12">

        <h2 className="text-4xl font-bold">
          Trending Courses
        </h2>

        <p className="text-gray-500 mt-3">
          Explore what learners are enrolling in this week.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {trendingCourses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}

      </div>

    </section>
    </>
  );
};

export default TrendingCourses;