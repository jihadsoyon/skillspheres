export const getCourses = async () => {
  const res = await fetch("http://localhost:3000/courses.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
};