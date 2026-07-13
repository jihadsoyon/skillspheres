import { cache } from "react";

export const getCourses = cache(async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/courses.json`, {
  cache: "no-store",
});
  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
});

export const getCourseById = cache(async (id) => {
  const courses = await getCourses();

  return courses.find((course) => course.id === Number(id));
});