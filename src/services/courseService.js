import { cache } from "react";

export const getCourses = cache(async () => {
  const res = await fetch("http://localhost:3000/courses.json");

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
});

export const getCourseById = cache(async (id) => {
  const courses = await getCourses();

  return courses.find((course) => course.id === Number(id));
});