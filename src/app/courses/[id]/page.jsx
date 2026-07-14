import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourseById } from "@/services/courseService";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const course = await getCourseById(id);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: course.title,
    description: course.description,
  };
}

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(`/login?next=/courses/${id}`);
  }

  const course = await getCourseById(id);

  if (!course) {
    notFound();
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="relative h-[420px] rounded-xl overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <div className="badge badge-primary mb-4">
            {course.category}
          </div>

          <h1 className="text-4xl font-bold">
            {course.title}
          </h1>

          <p className="mt-5 text-gray-500">
            {course.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-gray-500">Instructor</p>
              <h3 className="font-semibold">{course.instructor}</h3>
            </div>

            <div className="p-4 border rounded-lg">
              <p className="text-sm text-gray-500">Rating</p>
              <h3 className="font-semibold">⭐ {course.rating}</h3>
            </div>

            <div className="p-4 border rounded-lg">
              <p className="text-sm text-gray-500">Duration</p>
              <h3 className="font-semibold">{course.duration}</h3>
            </div>

            <div className="p-4 border rounded-lg">
              <p className="text-sm text-gray-500">Level</p>
              <h3 className="font-semibold">{course.level}</h3>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">
              Course Curriculum
            </h2>

            <ul className="space-y-3">
              {course.curriculum.map((lesson, index) => (
                <li
                  key={index}
                  className="border rounded-lg p-3"
                >
                  Lesson {index + 1}: {lesson}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/courses"
            className="btn btn-outline mt-8"
          >
            ← Back to Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsPage;