import Banner from "@/components/home/Banner";
import PopularCourses from "@/components/home/PopularCourses";
import LearningTips from "@/components/home/LearningTips";
import TopInstructors from "@/components/home/TopInstructors";
import TrendingCourses from "@/components/home/TrendingCourses";
export default function Home() {
  return (
    <>
      <Banner />
      <PopularCourses />
      <LearningTips />
      <TopInstructors />
      <TrendingCourses />
    </>
  );
}