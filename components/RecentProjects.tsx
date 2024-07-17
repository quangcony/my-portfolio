import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3dPin";
import { FaLocationArrow } from "react-icons/fa";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import { SimpleCard } from "./ui/Card";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Showcasing a few {""}
        <span className="text-green">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-12 mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex justify-center lg:min-h-[30rem] h-[25rem] sm:w-96 w-[80vw]"
          >
            <SimpleCard
              link={project.link}
              title={project.title}
              des={project.des}
              image={project.img}
              iconLists={project.iconLists}
            />
            {/* <PinContainer title={project.link} href={project.link}>
              <div className="relative flex justify-center items-center sm:w-96 w-[80vw] overflow-hidden lg:h-[40vh] h-[30vh]">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute z-10 bottom--"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 lg:pt-4 pt-2">
                {project.title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {project.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  <AnimatedTooltip items={project.iconLists} />
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex text-sm md:text-xs lg:text-xl text-green">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
