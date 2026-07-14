import SearchBar from "@/components/courses/SearchBar";
import CourseCard from "@/components/courses/CourseCard";
import { getCourses } from "@/services/courseService";

const CoursesPage = async ({ searchParams }) => {

    const { search } = await searchParams;

    const courses = await getCourses();

    const filteredCourses = search ?

        courses.filter(course =>

            course.title

                .toLowerCase()

                .includes(search.toLowerCase())

        )

        :

        courses;

    return (

        <div className="py-10">

            <h1 className="text-4xl font-bold text-center">

                All Courses

            </h1>

            <SearchBar />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map((course) => (
                        <CourseCard
                            key={course.id}
                            course={course}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center py-20">

                        <h2 className="text-3xl font-bold">

                            No Course Found

                        </h2>

                        <p className="text-gray-500 mt-3">

                            Try searching with another title.

                        </p>

                    </div>
                )}
            </div>

        </div>

    );
};

export default CoursesPage;