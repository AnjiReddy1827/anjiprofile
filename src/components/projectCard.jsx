import React from "react";

const ProjectCard = ({
  title,
  description,
  technologies,
  videoURL,
  livePreviewUrl,
  viewCodeUrl,
}) => {
  return (
    <div className="max-w-sm bg-gray-800/90 backdrop-blur-lg border border-gray-700 rounded-lg overflow-hidden shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="relative rounded-t-lg overflow-hidden">
        {videoURL ? (
          <video
            className="rounded-t-lg h-48 w-full object-cover hover:opacity-90 transition-opacity duration-300"
            controls
            preload="metadata"
            muted
            autoPlay
          >
            <source src={videoURL} type="video/mp4" />
            <source src={videoURL} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p className="text-white text-center p-4">Video not available</p>
        )}
      </div>
      <div className="p-5">
        <h2 className="text-2xl font-extrabold text-blue-400 mb-3">{title}</h2>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <a
            href={livePreviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-400 hover:text-blue-500 transition-colors duration-300 font-semibold"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
            Live Preview
          </a>
          {viewCodeUrl && (
            <a
              href={viewCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-400 hover:text-green-500 transition-colors duration-300 font-semibold"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
