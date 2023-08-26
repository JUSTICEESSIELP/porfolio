import React from "react";
import SlideUp from "../SlideUp/SlideUp.tsx";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Mining BlockTrack",
    description:
      "BlockTrack is a web app build with React ,Express , MongoDB, Dynamo DB , Solidity , ChainLink . So the web app is a dashboard for the traders to visualize their rubber and or Gold farms as well as track customers and their trades.  A mobile app also built to facilitate mining trades for small scale miners  ",
    image: "/thankfulthoughts.png",
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://thankfulthoughts.io/",
  },
  {
    name: "Nax Cosmetics",
    description:
      "A scalable backend was created with Kubernetes and Docker with the power of Node js and React this Ecommerce Platform was built for an Ecommerce Brand to handle current and future sales of their cosmetic products",
    image: "/platoio.png",
    github: "https://github.com/hqasmei/platoio",
    link: "https://platoio.com/register",
  },
  {
    name: "NineEleven Blockchain",
    description:
      "A Blockchain I personally built from scratch using Typescript's OOP and reading of the Satoshi White paper to get the underlining understanding behind the Blockchain. I also created REST API endpoints to enable my Next 13 powered front end to display a custom built Block Explorer. This project was fun and would be great for anyone trying to understand blockchain in its bare self  ",
    image: "/familyphotos.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
  {
    name: "WooBlock Car Rental",
    description:
      "With solidity and hardhat this Dapp was built to faciliate the rental of cars on the blockchain and deployed on the polygon network. This project was submitted when I participated in the Polygon Hackathon. Built using Next 13 and Typescript ",
    image: "/familyphotos.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },

  {
    name: "React Native Restaurant Mobile App on Playstore ",
    description:
      "React Native is a cross platform library. I used this to create a restuarant app that has features like Google Maps, Google Places to get Restaurants, Stripe  for Payment, Authentication and the great thing is that its Powered by Firebase functions as the Backend ",
    image: "/familyphotos.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
  {
    name: "DrawKolab ",
    description:
      "Minified Version of Canva with collaborative features based on the Web Socket architecture. Powered once again by Next 13 and Typescript",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
  {
    name: "SilverBird",
    description:
      "Mobile App built once again with React Native and Deployed on the App store ",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <a href={project.link}>
                      <img
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </a>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <a href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </a>
                      <a href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
