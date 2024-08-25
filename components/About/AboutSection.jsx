import { connectToDB } from "@lib/mongodb";
import Education from "@models/Education";

const AboutSection = async () => {
  await connectToDB();
  const educations = await Education.find({}).sort({createdAt: -1});

  return (
    <section id="about" className="px-10 md:px-28 py-10 md:py-20 flex flex-col-reverse gap-4 md:flex-row">
      <div className="flex-col md:w-1/2">
        <p className="text-2xl font-bold">About Me</p>
        <div className="w-full space-y-4 mt-4">
          <p>
            I am an undergraduate student of Computer Science and Engineering at
            BUET, with a passion for solving complex problems and a drive to
            achieve excellence in everything I do. My academic journey has
            equipped me with a strong foundation in various languages like
            Python, Java, and C++, while my hands-on experience includes working
            with technologies like React, Next.js, and MongoDB for web
            development.
          </p>

          <p>
            I am particularly fascinated by the fields of AI and machine
            learning. I am deeply committed to making a positive impact on
            society and the environment, using my skills and knowledge to
            contribute to meaningful and sustainable change.
          </p>

          <p>
            I am always keen to develop myself, continuously learning and
            adapting to new technologies to stay up-to-date in this
            ever-evolving field. I thrive in environments where I can tackle
            challenging tasks, optimize processes for efficiency, and
            collaborate with others to create impactful solutions. Whether it’s
            managing multiple tasks simultaneously or working as part of a team,
            I am committed to delivering top-quality work and pushing the
            boundaries of what's possible in the tech world.
          </p>
        </div>
      </div>
      <div className="flex-col md:w-1/2">
        <p className="text-2xl font-bold">Education</p>
        <div className="space-y-4 mt-4">
          {educations.map((e) => (
            <div key={e._id} className="border p-4 rounded-md shadow-md">
              <p className="text-lg font-semibold">{e.institution}</p>
              <p className="text-md text-gray-700">{e.major}</p>
              <p className="text-sm text-gray-500">{e.timeline}</p>
              <p className="text-sm text-gray-600">GPA: {e.gpa}</p>
              {e.description && <p className="text-sm mt-2">{e.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
