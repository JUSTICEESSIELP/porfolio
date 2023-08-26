import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsBuildingDown } from "react-icons/bs";
import { SiStarlingbank, SiProbot } from "react-icons/si";
import { GiBreakingChain } from "react-icons/gi";
const About = () => {
  const skills = [
    { skill: "React" },
    { skill: "JavaScript" },
    { skill: "Typescript" },
    { skill: "React Native" },
    { skill: "Node.js" },
    { skill: "Mongoose" },
    { skill: "POSTGRESQL" },
    { skill: " Prisma" },

    { skill: "Graphql & Rest" },
    { skill: "Docker" },
    { skill: "Kubernetes" },
    { skill: "Next 13" },
    { skill: "Amazon Web Services" },
    { skill: "Solidity" },
    { skill: " Hardhat" },
    { skill: "Hyperledger Fabric " },
    { skill: "Git & Github" },
    { skill: "Firebase" },

    // Add more skills
  ];

  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 p-2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <div className="p-2 md:w-full">
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    color: "",
                  }}
                  contentArrowStyle={{
                    borderRight: "2px solid   rgb(20 184 166)",
                    margin: "20px",
                  }}
                  iconStyle={{ background: " rgb(20 184 166)", color: "#fff" }}
                  icon={<BsBuildingDown />}
                >
                  <h3 className="vertical-timeline-element-title">
                    CTO & Co-Founder Software Warehouse
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle font-semibold">
                    Remote
                  </h4>
                  <p className="text-slate-500">
                    <span className="font-2xl">
                      Coding, Creative Direction, User Experience, Visual
                      Design, Project Management, Team Leading
                    </span>
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{ background: "rgb(20 184 166)", color: "#fff" }}
                  icon={<SiStarlingbank />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Front End Developer
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle font-semibold">
                    Union System Global, Remote
                  </h4>
                  <p>
                    This company is a Fintech company. Creating software systems
                    for banks across Africa. Kenya , Ghana and Sierra Leone are
                    one of those countries. Creating mobile apps for the banks
                    mobile banking , web pages for the bank tellers as well as
                    other internal tools like ATM and all other facilities of
                    the bank
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{ background: "rgb(20 184 166)", color: "#fff" }}
                  icon={<SiProbot />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Machine Learning Engineer
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle font-semibold">
                    Sidakye
                  </h4>
                  <p>
                    Sidakye is a data consultancy and I.O.T. facilitation firm
                    giving users the insight needed to create long lasting,
                    effective and efficient change, for knowledge is power.
                    Sidakye provides the information needed for clients to make
                    key decisions about their business no matter how small while
                    protecting their homes, offices as well as factories and
                    automating redundant tasks by making things smarter with
                    I.O.T and Artificial Intelligence.
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{ background: "rgb(20 184 166)", color: "#fff" }}
                  icon={<GiBreakingChain />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Software Engineering Lead
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    BitterBit Technologies
                  </h4>
                  <p>
                    I worked with Waterfall and Agile methodologies to lead the
                    team. We created Web 3 / Blockchain Projects using Solidity,
                    Hardhat, and Blockchain Ecosystem Development Tools.
                    Additionally, we used React Native to develop Mobile
                    Applications with AWS serverless Tools and a Typescript End
                    to End Full stack, Testing inclusive code base. Graphql and
                    Node were among the Tools used in the server side.
                  </p>
                </VerticalTimelineElement>
                {/* Add another timeline element if needed */}
              </VerticalTimeline>
            </div>
            {/* Rest of the content... */}
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <img
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
