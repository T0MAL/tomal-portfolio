
import { connectToDB } from "@lib/mongodb";
import Experience from "@models/Experience";

const ExperienceView = async () => {
  await connectToDB();
  const experiences = await Experience.find({}).sort({createdAt: -1});
  return (
    <div className="flex-col md:w-1/2">
      <p className="text-2xl font-bold">Experiences</p>
      <div className="space-y-4 mt-4">
        {experiences.map((exp) => (
          <div key={exp._id} className="border p-4 rounded-md shadow-md">
            <p className="text-lg font-semibold">{exp.company} | <span className="text-sm text-gray-700">{exp.role}</span></p>
            <p className="text-md text-gray-700">{exp.timeline} | {exp.location}</p>
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-600">
              {exp.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceView;