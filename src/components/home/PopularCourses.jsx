import { getCourses } from "@/services/courseService";
import CourseCard from "../courses/CourseCard";

const PopularCourses = async () => {

  const courses = await getCourses();

  const popularCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (

    <section className="py-20">

      <div className="text-center mb-12">

        <h2 className="text-4xl font-bold">

          Popular Courses

        </h2>

        <p className="text-gray-500 mt-3">

          Top 3 highest-rated courses

        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {popularCourses.map(course => (

          <CourseCard
            key={course.id}
            course={course}
          />

        ))}

      </div>

    </section>

  );
};

export default PopularCourses;