import React from "react";
import Image from "next/image";
import CompanyExperience from "../components/companyExperiace";

const ExperienceComponent = () => {
  const experienceData = [
    { src: "/image/HTML5_logo_and_wordmark.svg", label: "HTML" },
    { src: "/image/css3-original.svg", label: "CSS3" },
    { src: "/image/Unofficial_JavaScript_logo_2.svg", label: "Javascript" },
    { src: "/image/React_Logo_SVG.svg", label: "React.JS" },
    { src: "/image/vue-js.svg", label: "Vue.js" },
    { src: "/image/nodejs-original.svg", label: "Node.JS" },
    { src: "/image/mongodb-original.svg", label: "MongoDb" },
    { src: "/image/typescript-icon.svg", label: "Typescript" },
    { src: "/image/nextjs.svg", label: "Next.JS" },
    { src: "/image/brand-vite.svg", label: "Vite" },
    { src: "/image/file-type-scss.svg", label: "Scss" },
    { src: "/image/bootstrap.svg", label: "Bootstrap" },
    { src: "/image/tailwindcss-icon.svg", label: "Tailwind.css" },
    // { src: "/image/.svg", label: "" },
  ];
  const experiences = [
    {
      company: "Publicis Re: Sources",
      startDate: "Oct 2023",
      endDate: "Present",
    },
    {
      company: "Quanted Technologies Pvt Ltd",
      startDate: "May 2020",
      endDate: "Oct 2023",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-4">
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
      <div className=" text-white py-16 px-6 flex flex-col items-center">
        <div className="flex items-center justify-center gap-8 w-full">
          {experiences.map((exp, index) => (
            <CompanyExperience
              key={index}
              company={exp.company}
              startDate={exp.startDate}
              endDate={exp.endDate}
            />
          ))}
        </div>
      </div>
      <div className="container mx-auto px-28 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {experienceData.map((item, index) => (
          <div key={index} className={`flex flex-col items-center`}>
            <Image
              src={item.src}
              alt={item.label}
              width={60}
              height={60}
              className={`mb-4 ${
                item.label == "Next.JS" && "bg-white rounded-full"
              }  ${item.label == "Vite" && "bg-white rounded-full"}`}
            />
            <p className="text-xl font-semibold">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceComponent;
