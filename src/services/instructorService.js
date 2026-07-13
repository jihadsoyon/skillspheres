// export const getInstructors = async () => {
//   const res = await fetch("http://localhost:3000/instructors.json", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch instructors");
//   }

//   return res.json();
// };




export const getInstructors = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/instructors.json`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch instructors");
  }

  return res.json();
};