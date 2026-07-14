"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";

const TrendingCourseToast = ({ courses }) => {
  useEffect(() => {
    if (!courses?.length) return;

    let index = 0;

    const interval = setInterval(() => {
      if (index >= courses.length) {
        clearInterval(interval);
        return;
      }

      const course = courses[index];

      toast(
        `📚 ${course.title}
Category: ${course.category}
Duration: ${course.duration}`,
        {
          duration: 5000,
        }
      );

      index++;
    }, 15000);

    return () => clearInterval(interval);
  }, [courses]);

  return null;
};

export default TrendingCourseToast;