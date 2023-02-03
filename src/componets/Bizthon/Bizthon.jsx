import React, { useState } from "react";
import bgImg from "../../assets/Bizthon/bg.png.webp";
import { useWindowSize } from "react-use";
import "./Bizthon.css";
import { ArchiveIcon, ChartBarIcon, CloudUploadIcon, LightBulbIcon } from '@heroicons/react/solid'
import { Navbar } from "../NavbarPages";
import ProfImg1 from "../../assets/Bizthon/cont1.webp";
import ProfImg2 from "../../assets/Bizthon/cont2.webp";
import ProfImg3 from "../../assets/Bizthon/cont3.webp";
import bizthonVideo from "../../assets/Bizthon/intro.webm"


function AboutBiz(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify  h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      Bizthon is organised to evaluate the business outcomes or ideaology of a product via branding,skilling and engagement.
      This platform invites students as well as professionals to test and showcase their entrepreneurial skills and create a protoype.
      Bring forth your analytical and creative skills to expose your hidden self.
    </div>
  )
}

function StagesBiz(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify  h-full md:h-[full] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      The Bizthon is a Business Hackathon contest which consists of three unique stages
      <br /><br /><b>Stage 1 - INNOVATE</b>
      <br />Participants are given six themes. Each team has to make a video on an innovative business idea to be launched in a digital platform/App for 4-5 minutes based on the following themes:
      <ul className="list-decimal pl-10 mt-3 ">
        <li>Medical management</li>
        <li>GI Tagged heritage tourism</li>
        <li>Retail shopping experience</li>
        <li>Mutual Fund Investment using Fin Tech</li>
        <li>Gamification and fun in education</li>
      </ul>
      <br />
      <b>These videos has to be posted in the Adi Shankara B School YouTube Channel</b>
      <br /><br />Evaluation will be done based on the uniqueness of the idea by:
      <ul className="list-disc pl-10">
        <li>popularity of the video based on likes and shares.</li>
        <li>external panel of experts</li>
      </ul><br />
      <b className="text-[var(--primary-color)]">20 TEAMS WILL BE SELECTED FOR STAGE 2</b>
      <br /><br />Twenty teams of four each will be then called to the college for the 24 hours hackathon starting on April 28th morning.
      <br />Shortlisted teams will do due diligence and homework and come to campus fully prepared.
      <br /><br />
      <b>Stage 2: Strategise</b>
      <ul className="list-disc pl-10 my-3">
        <li>Each team have to make a business canvas and business plan model. The business canvas will be presented in a chart while the plan model will be a pitch deck. The deck has to be comprehensive and should incorporate the financial feasibility, marketing feasibility and the supply chain and logistics design.</li>
        <li>Mentors will be provided for each team.</li>
        <li>Those who require training sessions for preparing business canvas and pitch desk will be provided for at a minimum cost</li>
      </ul>
      Evaluation for this stage will be done by industry experts
      <br /><br /><b className="text-[var(--primary-color)]">5 TEAMS WILL BE SELECTED FOR STAGE 3 (FINALISTS)</b>
      <br /><br />
      <b>Stage 3 - DEPICT - UI & UX</b>
      <ul className="list-disc pl-10 my-3">
        <li>In Stage 3 the finalists have to make a presentation using the User Interface (UI) for the App/Website</li>
        <li>The preparation and presentation can be either as a</li>
        (i)	Demo App/Website or
        (ii)	Digital 3D or 2D Image
        <li>The design should showcase the User Experience</li>
      </ul>

      Evaluation for this stage will be done by industry experts<br />

      We are discussing with the companies to provide financial support for converting the innovative service concepts of the winners to industry ready products.

    </div>
  )
}

function PrizeBiz(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify  h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <li>First prize – Rs.1 lakh</li>
      <li>Second prize – Rs.50,000</li>
      <li>Third Prize (3 Nos) – Rs.10,000 each</li>
      <li>Gifts/surprise prizes for the participants on STAGE 2</li>
    </div>
  )
}

function RegBiz(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify  h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <li>First Round – Rs.100 per video</li>
      <li>Second Round – Rs. 1000 per team.</li>
      <li>Charges for training will be based on requirements</li>
    </div>
  )
}

function FAQBiz(props) {
  return (
    <div className='md:p-10 p-3 text-base md:text-justify  h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <b>1. How many participants can there be in a team?</b>
      <br/>Ans: Minimum 2 and Maximum 4
      <br/><br/><b>2. Should all the participants be from the same institute?</b>
      <br/>Ans: Yes. All of the must be from the same institute but can be from different departments
      <br/><br/><b>3. Who can register for the Bizthon?</b>
      <br/>Ans: Under graduate students – both arts and science as well as technical
      <br/><br/><b>4. Can the members be changed after registration?</b>
      <br/>Ans: They can be changed as long as the full team is not changed
      <br/><br/><b>5. Should the participants bring any material?</b>
      <br/>Ans: They should bring their laptops for creating the business model and the final user interface design
      <br/><br/><b>6. Will accommodation be provided for the participants?</b>
      <br/>Ans: No. Accommodation can be arranged only at a cost. The event will be for 24 continuous hours and hence there will be need only for rest.
      <br/><br/><b>7. Will there be elimination?</b>
      <br/>Ans: There is elimination at the end of each stage
      <br/><br/><b>8. Will training sessions be provided?</b>
      <br/>Ans: Training sessions will be provided for preparing the business canvas as well as the presentation deck for the business plan
    </div>
  )
}

function ConBiz() {
  const team = [
    {
      id: 1,
      fullName: "Dr.Hari Sunder",
      contact: "+91 8547721994",
      imgSrc: ProfImg1,
      imgAlt: "profile picture",
    },
    {
      id: 2,
      fullName: "Prof. Nimal CN",
      contact: "+91 8870590178",
      imgSrc: ProfImg2,
      imgAlt: "profile picture",
    },
    {
      id: 3,
      fullName: "Prof. Renjith KR",
      contact: "+91 8547538749",
      imgSrc: ProfImg3,
      imgAlt: "profile picture",
    },
  ];

  return (
    <div className="md:p-10 p-3 text-base md:text-justify  h-full md:h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      <div className="mx-auto max-w-5xl flex flex-col">
        {/* :TEAM CONTAINER */}
        <div className="mt-10">
          {/* ::Members Row 1 */}
          <div className="flex flex-wrap justify-center items-center">
            {team.slice(0, 4).map((member) => (
              <div
                key={member.id}
                className="flex-shrink-0 group relative m-5 p-5 w-56 h-56 flex justify-center items-center rounded-full bg-black overflow-hidden"
              >
                {/* :::picture */}
                <img
                  src={member.imgSrc}
                  alt={member.imgAlt}
                  className="z-1 group-hover:z-0 absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-10 transition duration-200"
                />
                {/* :::details */}
                <div className="absolute bottom-[10%] flex flex-col justify-center items-center space-y-2">
                  <p className="text-sm text-white font-bold">
                    {member.fullName}
                  </p>
                  <p className="text-sm text-gray-300 font-medium">
                    {member.contact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Bizthon() {
  const tabs = [
    {
      name: "About",
      icon: ArchiveIcon,
      page: <AboutBiz />
    },
    { name: "Stages", icon: CloudUploadIcon, page: <StagesBiz /> },
    { name: "Prize", icon: ChartBarIcon, page: <PrizeBiz /> },
    { name: "Registration", icon: ChartBarIcon, page: <RegBiz /> },
    { name: "FAQ", icon: ChartBarIcon, page: <FAQBiz /> },
    { name: "Contact", icon: LightBulbIcon, page: <ConBiz /> },
  ]

  const [currentTab, setCurrentTab] = useState("About")

  const translateValue = tabs.findIndex(tab => tab.name === currentTab) / tabs.length * 100

  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="relative h-screen">
        <div className="absolute z-50 w-full ">
          <Navbar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            // countDate="Mar 28, 2023 00:00:00"
          />
        </div>
        <div className="absolute top-0 h-screen flex justify-center items-center w-full z-40 ">
          {/* navbar */}
          <video autoPlay muted loop className="md:h-full w-full object-cover">
            <source src={bizthonVideo} type='video/mp4; codecs="avc1"' />
          </video>
        </div>
      </div>
      <div
        className="Bizthon"
        style={
          width > 640
            ? {
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "right 0",
              backgroundRepeat: "no-repeat",
              height: "140vh",
              backgroundColor: "var(--bg-color)",
              boxShadow: "0px 0px 50px 0px var(--bg-color)",
            }
            : {
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "150vh",
              boxShadow: "0px 0px 50px 0px var(--bg-color)",
            }
        }
      >
        {/* navbar */}
        {/* <Navbar isOpen={isOpen} setIsOpen={setIsOpen} /> */}

        {/* main content */}
        <div className="flex flex-col justify-center h-screen p-5 md:p-10  2xl:p-24">
          <h1
            className="text-4xl font-bold  text-[var(--primary-color)] uppercase md:text-7xl 2xl:text-8xl pt-[5vh] "
            style={{ fontFamily: "Azonix" }}
          >
            Bizthon
          </h1>
          {/* sub heading */}
          <h2 className="text-lg font-bold text-[var(--secondary-color)] uppercase md:text-xl 2xl:text-2xl md:pt-7">
            Service with a tech twist
          </h2>
          {/* description */}
          <p className="text-base text-[var(--secondary-color)] 2xl:text-2xl md:pt-10 md:w-1/3 2xl:w-1/2 leading-6">
            Bizthon is organised to evaluate the overall business acumen of the participant through a three stage process from ideation to business model to the actual user inteface and engagemant. This event is aimed at the undergraduate students whether it be arts & science or technical.All you need be is creative in designing a product analyzing its feasibility, creating a business canvas and desgning a user interface.
            Lakhs of rupees worth of prizes await you.

            So, grab your ticket to success and may be a beautiful career!

          </p>
          {/* basic rounded line button */}
          <button
            className="md:w-1/4 text-center text-[var(--secondary-color)] rounded-full duration-300 py-5 px-6 text-sm font-bold uppercase mt-10 hover:bg-[#f0f0f054] hover:text-[var(--primary-color)] flex items-center justify-center border border-[var(--primary-color)] hover:border-[var(--secondary-color)]"
            style={{
              boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.6)",
            }}
          >
            Register Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="Bizthon  my-10 mb-16">
        <div className="bg-animation -z-10">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
        <div className="py-2 sticky top-0 z-10">
          <div className="w-[90vw] mx-auto md:w-full md:max-w-5xl rounded-full border border-gray-200 bg-black/70 overflow-hidden" >


            {/* :LARGE DEVICES */}
            <div className="relative  sm:block overflow-hidden">
              {/* ::Navigation Tabs */}
              <nav aria-label="Tabs">
                <ul className="grid grid-flow-col auto-cols-fr">
                  {tabs.map(tab => {
                    const Icon = tab.icon
                    return (
                      <li key={tab.name} className={`relative z-10 rounded-full text-base ${tab.name === currentTab ? "transition duration-300 text-black" : "text-gray-400 hover:text-gray-500"}`}>
                        <button type="button" className="md:p-4 p-2 w-full inline-flex justify-center items-center text-center md:text-sm text-[.6rem] font-semibold" onClick={() => setCurrentTab(tab.name)}>
                          {width > 640 ? <Icon className="mr-1.5 w-5 h-5" /> : ""}
                          {tab.name}
                        </button>
                      </li>
                    )
                  })
                  }
                </ul>
              </nav>
              {/* ::Sliding Background */}
              <div className="absolute inset-0 mx-auto w-full h-full rounded-full">
                <div className="relative h-full transition-all duration-300 ease-in" style={{ transform: `translateX(${translateValue}%)` }} >
                  <div className="h-full rounded-full bg-[var(--primary-color)]" style={{ width: `${1 / (tabs.length) * 100}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {tabs.map(tab => {
          return (
            <div className="md:mx-16 mx-6 my-10 text-[var(--secondary-color)]">
              {tab.name === currentTab ? tab.page : ""}
            </div>
          )
        })
        }
      </div>
    </>
  );
}

export default Bizthon;
