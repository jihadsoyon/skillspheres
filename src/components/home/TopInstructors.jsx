import Image from "next/image";
import FadeIn from "../shared/FadeIn";
import { getInstructors } from "@/services/instructorService";

const TopInstructors = async () => {
  const instructors = await getInstructors();

  return (
    <section className="py-20">

      <div className="text-center mb-12">

        <h2 className="text-4xl font-bold">
          Top Instructors
        </h2>

        <p className="text-gray-500 mt-3">
          Learn from experienced professionals.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {instructors.map((teacher) => (
          <FadeIn key={teacher.id}>

            <div className="card bg-base-100 border shadow-md">

              <figure className="pt-6">

                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={120}
                  height={120}
                  className="rounded-full"
                />

              </figure>

              <div className="card-body text-center">

                <h3 className="font-bold text-xl">
                  {teacher.name}
                </h3>

                <p>
                  {teacher.speciality}
                </p>

              </div>

            </div>

          </FadeIn>
        ))}

      </div>

    </section>
  );
};

export default TopInstructors;