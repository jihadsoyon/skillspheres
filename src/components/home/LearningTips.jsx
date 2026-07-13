import FadeIn from "../shared/FadeIn";

const tips = [
  {
    id: 1,
    title: "Study Consistently",
    description:
      "Spend at least 1 hour every day instead of studying many hours only once a week.",
  },
  {
    id: 2,
    title: "Take Notes",
    description:
      "Write important concepts in your own language to improve long-term memory.",
  },
  {
    id: 3,
    title: "Practice Regularly",
    description:
      "Learning without practice is incomplete. Build small projects after every lesson.",
  },
];

const LearningTips = () => {
  return (
    <section className="py-20">

      <div className="text-center mb-12">

        <h2 className="text-4xl font-bold">
          Learning Tips
        </h2>

        <p className="text-gray-500 mt-3">
          Study smarter and become more productive.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {tips.map((tip) => (
          <FadeIn key={tip.id}>

            <div className="card bg-base-100 border shadow-md">

              <div className="card-body">

                <h3 className="card-title">
                  {tip.title}
                </h3>

                <p>{tip.description}</p>

              </div>

            </div>

          </FadeIn>
        ))}

      </div>

    </section>
  );
};

export default LearningTips;