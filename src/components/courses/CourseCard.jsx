import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
    <div className="card bg-base-100 shadow-lg border hover:shadow-xl transition duration-300">

      <figure className="relative h-56">

        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />

      </figure>

      <div className="card-body">

        <div className="flex justify-between items-center">

          <div className="badge badge-primary">
            {course.category}
          </div>

          <div className="badge badge-outline">
            ⭐ {course.rating}
          </div>

        </div>

        <h2 className="card-title line-clamp-2">

          {course.title}

        </h2>

        <p className="text-sm text-gray-500">

          Instructor: {course.instructor}

        </p>

        <div className="flex justify-between text-sm mt-2">

          <span>{course.duration}</span>

          <span>{course.level}</span>

        </div>

        <div className="card-actions mt-5">

          <Link
            href={`/courses/${course.id}`}
            className="btn btn-primary w-full"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
};

export default CourseCard;