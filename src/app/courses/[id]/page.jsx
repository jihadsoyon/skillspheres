import Image from "next/image";
import { notFound } from "next/navigation";
import { getCourseById } from "@/services/courseService";

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

  const course = await getCourseById(id);

  if (!course) {
    notFound();
  }

  // rest of your code...
};

export default CourseDetailsPage;