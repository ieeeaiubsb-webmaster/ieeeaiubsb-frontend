"use client";
import { useState } from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import Post from "@/components/post";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: `AIUBians On Erasmus`,
    category: `Webinar`,
    imageUrl: "/images/event/Erasmus-01.png",
    date: "December 23, 2022",
    datetime: "2022/12/23",
  },

  {
    id: 2,
    title: `Seminar on International Day of Medical Physics & World Radiography Day`,
    category: `Seminar`,
    imageUrl:
      "/images/event/International-Day-of-Medical-Physics-World-Radiography-Day.jpg",
    date: "November 8, 2022",
    datetime: "2022/11/08",
  },

  {
    id: 3,
    title: `Seminar on A Journey of Unknowns in the Femto-Nano World`,
    category: `Seminar`,
    imageUrl: "/images/event/A-Journey-of-Unknowns-in-the-Femto-Nano-World.jpg",
    date: "October 18, 2022",
    datetime: "2022/10/18",
  },

  {
    id: 4,
    title: `THE IEEE AIUB Student branch celebrated “IEEE Day 2022”`,
    category: `IEEE DAY`,
    imageUrl: "/images/event/ieee_day_2022.jpg",
    date: "October 10, 2022",
    datetime: "2022/10/10",
  },

  {
    id: 5,
    title: `Seminar on “Bangladesh at Space and James Webb Space Telescope.”`,
    category: `Seminar`,
    imageUrl:
      "/images/event/Bangladesh_at_Space_and_James_Webb_space_telescope-01.png",
    date: "September 28, 2022",
    datetime: "2022/09/28",
  },

  {
    id: 6,
    title: `Members’ Orientation 2022 – IEEE AIUB Student Branch`,
    category: `Orientation`,
    imageUrl: "/images/event/Member-orientation-2022.png",
    date: "August 7, 2022",
    datetime: "2022/08/07",
  },

  {
    id: 7,
    title: `Seminar on “Biomedical Research for Sustainable Development.” organized by CBR & IEEE EMBS AIUB Chapter`,
    category: `EMBS`,
    imageUrl: "/images/event/Biomedical-Research4-01.png",
    date: "July 27, 2022",
    datetime: "2022/07/27",
  },

  {
    id: 8,
    title: `IEEE AIUB Student Branch organized “IEEE Student Professional Awareness Venture (SPAVe 5.0)”`,
    category: `Flagship Event`,
    imageUrl: "/images/event/spave.jpg",
    date: "December 18, 2021",
    datetime: "2021/12/18",
  },

  {
    id: 9,
    title: `AIUBians on ERASMUS`,
    category: `Webinar`,
    imageUrl: "/images/event/erasmus.jpg",
    date: "November 23, 2021",
    datetime: "2021/11/23",
  },

  {
    id: 10,
    title: `Webinar on “Insights into the Single Line Diagram, Layout & Panel Design of MVLV Substations”`,
    category: `IAS`,
    imageUrl: "/images/event/Cover.jpg",
    date: "November 17, 2021",
    datetime: "2021/11/17",
  },

  {
    id: 11,
    title: `IEEE AIUB Student Branch organized a Webinar on “Scope of Research on Biomedical Engineering”`,
    category: `Webinar`,
    imageUrl: "/images/event/cover.jpg",
    date: "November 06, 2021",
    datetime: "2021/11/6",
  },
  {
    id: 12,
    title: `New Era of Data Science`,
    category: `Webinar`,
    imageUrl:
      "/images/event/249774690_4545653268814803_382015203504928536_n.jpg",
    date: "November 6, 2022",
    datetime: "2022/11/06",
  },
  {
    id: 13,
    title: `Webinar session on “Towards Flexible Radio Access Networks for Massive Connectivity in 5G and Beyond” organized by IEEE AIUB Student Branch on the celebration of IEEE Day 2021`,
    category: `ias`,
    imageUrl: "/images/event/FB_IMG_1636039759078.jpg",
    date: "October 14, 2021",
    datetime: "2021/10/14",
  },
  {
    id: 14,
    title: `IEEE AIUB Student Branch organized a Distinguished Lecture Session on “Crowdsourcing IoT Wireless Energy Services in Smart Cities”`,
    category: `cs`,
    imageUrl: "/images/event/FB_IMG_1636039776191.jpg",
    date: "October 7, 2021",
    datetime: "2021/10/7",
  },
  {
    id: 15,
    title: `IEEE AIUB Student Branch in collaboration with the IEEE IAS AIUB SB Chapter & CADD Core Training Institute Successfully Organized a Workshop Series on “Workshop on SOLIDWORKS”`,
    category: `ias`,
    imageUrl: "/images/event/baner.jpg",
    date: "September 6th,7th,8th 2021",
    datetime: "2021/9/6, 2021/9/7, 2021/9/8",
  },
  {
    id: 16,
    title: `Erasmus Mundus Association Bangladesh’s Symposium Series 2021- “One Scholarship Preparation, Thousands of Opportunities; Erasmus+ Mundus, Marie Curie and Hundred other European Scholarships`,
    category: `Webinar`,
    imageUrl: "/images/event/erasmus_banner.jpg",
    date: "September 5th, 2021",
    datetime: "2021/9/5",
  },
  {
    id: 17,
    title: `IEEE AIUB Student Branch Women In Engineering (WIE) Affinity Group successfully organized a webinar on  “Personal Branding and Industrial Influence”`,
    category: `Webinar`,
    imageUrl: "/images/event/banner-5.jpg",
    date: "August 28th, 2021",
    datetime: "2021/8/28",
  },
  {
    id: 18,
    title: `Distinguished Lecture Session on “New Energy Technologies: Research and Innovation in Power and Energy”`,
    category: `distinguished-lecture`,
    imageUrl:
      "/images/event/Research_and_Innovation-in-Power-and-Energy_Report.jpg",
    date: "July 29th, 2021",
    datetime: "2021/7/29",
  },
  {
    id: 19,
    title: `Save Your Planet Using the Power of Science: IOT Automation and Environmental Engineering`,
    category: `cs`,
    imageUrl: "/images/event/up_01.jpg",
    date: "July 8, 2021",
    datetime: "2021/7/8",
  },
  {
    id: 20,
    title: `Webinar on “Banglalink- Learn from Startups”`,
    category: `Webinar`,
    imageUrl: "/images/event/1.png",
    date: "June 20, 2021",
    datetime: "2021/6/20",
  },
  {
    id: 21,
    title: `IEEE AIUB Student Branch Members’ Orientation 2021`,
    category: `Orientation`,
    imageUrl:
      "/images/event/197216919_4551266718224863_2116159990468868599_n.png",
    date: "June 12, 2021",
    datetime: "2021/6/12",
  },
  {
    id: 22,
    title: `IEEE AIUB Student Branch Organized a Webinar on  ‘Cyber Crime’`,
    category: `Webinar`,
    imageUrl:
      "/images/event/143676036_4171728829511989_1807606762368142406_n.jpg",
    date: "February 11, 2021",
    datetime: "2021/2/11",
  },
  {
    id: 23,
    title: `‘Functional Safety on Advanced Driver Assistance System Webinar’`,
    category: `Webinar`,
    imageUrl: "/images/event/functional.jpg",
    date: "December 22, 2020",
    datetime: "2020/2/11",
  },
  {
    id: 24,
    title: `Mastering Professional Etiquette: Strategies and Tips for the Workplace`,
    category: `Webinar`,
    imageUrl:
      "/images/event/127034411_3988237737861100_5134762277965125483_o.jpg",
    date: "December 05, 2020",
    datetime: "2020/12/05",
  },
  {
    id: 25,
    title: `IEEE AIUB Student Branch successfully organized the First Session of the Virtual Distinguished Lecture Series titled ‘Wonders of Electromagnets’`,
    category: `mtts`,
    imageUrl: "/images/event/banner-4.jpg",
    date: "December 04, 2020",
    datetime: "2020/12/04",
  },
  {
    id: 26,
    title: `IEEE AIUB Student Branch successfully organized a webinar titled ‘Machine Learning for Human Gait Estimations’`,
    category: `Webinar`,
    imageUrl: "/images/event/banner.jpg",
    date: "November 08, 2020",
    datetime: "2020/11/04",
  },
  {
    id: 27,
    title: `IEEE AIUB Student Branch successfully organized a Distinguished Lecture Session titled  ‘Epilepsy, Algorithms, and AI: Personalized Seizure Forecasting’`,
    category: `Web Show`,
    imageUrl: "/images/event/4.jpg",
    date: "November 05, 2020",
    datetime: "2020/11/05",
  },
  {
    id: 28,
    title: `“AIUBIANS ON ERASMUS” in Celebration of the EMA DAY 2020`,
    category: `Webinar`,
    imageUrl: "/images/event/22.jpg",
    date: "October 31, 2020",
    datetime: "2020/10/31",
  },
  {
    id: 29,
    title: `IEEE AIUB Student Branch WIE Affinity Group successfully organized a workshop series on “Web Design from Scratch: HTML, CSS & Bootstrap”`,
    category: `wie`,
    imageUrl: "/images/event/banner-3.jpg",
    date: "October 16 & 17 2020",
    datetime: "2020/10/16, 2020/10/17",
  },
  {
    id: 30,
    title: `IEEE AIUB STUDENT BRANCH successfully organized a webinar Session on  Application of Wireless Sensor Network (WSN) in Precision Agriculture: Issues and Challenges`,
    category: `cs`,
    imageUrl: "/images/event/Banner-2.jpg",
    date: "October 9,2020",
    datetime: "2020/10/9",
  },
  {
    id: 31,
    title: `IEEE Young Professionals Bangladesh and IEEE Bangladesh Section jointly presents the year’s flagship event, “IEEE Student Transition and Elevation Partnership (STEP) 2020: Transition to a Sustainable Future.”`,
    category: `flagship event`,
    imageUrl: "/images/event/FB-event-banner-1536x743-1.jpg",
    date: "September 5,2020",
    datetime: "2020/9/5",
  },
  {
    id: 32,
    title: `IEEE AIUB Student Branch in collaboration with the Faculty of Engineering successfully organized a webinar on “Scopes and Challenges in Higher Education During COVID-19 Pandemic”`,
    category: `Webinar`,
    imageUrl: "/images/event/banner-1.jpg",
    date: "August 16,2020",
    datetime: "2020/8/16",
  },
  {
    id: 33,
    title: `IEEE AIUB Student Branch organized the Third Episode of the online live show  “An Hour with The Volunteers”`,
    category: `Web Show`,
    imageUrl: "/images/event/Ep-3_Speaker_Banner.jpg",
    date: "June 5,2020",
    datetime: "2020/6/5",
  },
  {
    id: 34,
    title: `Women in Nuclear Power Engineering`,
    category: `Webinar`,
    imageUrl: "/images/event/y.png",
    date: "June 23,2020",
    datetime: "2020/6/23",
  },
  {
    id: 35,
    title: `IEEE AIUB Student Branch organized the Fourth Episode of the online live show`,
    category: `Web Show`,
    imageUrl:
      "/images/event/102404042_3501523579865854_107512186718691185_o.png",
    date: "June 12,2020",
    datetime: "2020/6/12",
  },
  {
    id: 36,
    title: `IEEE AIUB Student Branch organized the First Episode of the online live show  “An Hour with The Volunteers”`,
    category: `Web Show`,
    imageUrl: "/images/event/1st-show.png",
    date: "May 22,2020",
    datetime: "2020/5/22",
  },
  {
    id: 37,
    title: `IEEE AIUB Student Branch successfully organizes a webinar on Getting Started with Image Processing using Python`,
    category: `cs`,
    imageUrl: "/images/event/banner.png",
    date: "April 24,2020",
    datetime: "2020/4/24",
  },
  {
    id: 38,
    title: `IEEE AIUB Student Branch organized a seminar on-  “Higher Study in North America with GRE and TOEFL”`,
    category: `Web Show`,
    imageUrl: "/images/event/1.jpg",
    date: "February 19,2020",
    datetime: "2020/2/19",
  },
  {
    id: 39,
    title: `IEEE AIUB Student Branch Members’ Orientation`,
    category: `Orientation`,
    imageUrl: "/images/event/banner-1.jpg",
    date: "February 16,2020",
    datetime: "2020/2/16",
  },
  {
    id: 40,
    title: `IEEE AIUB Student Branch organized a seminar on “ROAD TO SWEDEN”`,
    category: `Seminar`,
    imageUrl: "/images/event/banner.jpg",
    date: "February 4,2020",
    datetime: "2020/2/4",
  },
  {
    id: 41,
    title: `IEEE AIUB Student Branch organized a seminar on “Optical Fiber Sensing for Healthcare”`,
    category: `seminar`,
    imageUrl: "/images/event/banner-2.jpg",
    date: "January 21,2020",
    datetime: "2020/1/21",
  },
  {
    id: 42,
    title: `IEEE AIUB Student Branch presents “Student Professional Awareness Venture (SPAVe 4.0)”`,
    category: `flagship event`,
    imageUrl: "/images/event/Picture-1-4.jpg",
    date: "December 28,2019",
    datetime: "2019/12/28",
  },
  {
    id: 43,
    title: `IEEE AIUB Student Branch successfully organized a seminar on “Microwave Transmission in Telecommunications”`,
    category: `seminar`,
    imageUrl: "/images/event/Picture-1-3.jpg",
    date: "December 4,2019",
    datetime: "2019/12/4",
  },
  {
    id: 44,
    title: `IEEE AIUB Student Branch successfully organized IEEE Student Professional Awareness Workshop (SPAW 2.0)`,
    category: `spaw`,
    imageUrl: "/images/event/Picture-1-2.jpg",
    date: "November 9,2019",
    datetime: "2019/11/9",
  },
  {
    id: 45,
    title: `SEMINAR ON BIOMEDICAL SIGNAL PROCESSING & ANALYSIS TECHNIQUES: CHALLENGES AND APPLICATIONS ORGANIZED BY IEEE AIUB STUDENT BRANCH`,
    category: `seminar`,
    imageUrl: "/images/event/Picture-1.jpg",
    date: "November 9,2019",
    datetime: "2019/11/9",
  },
  {
    id: 46,
    title: `CELEBRATION OF IEEE DAY-2019`,
    category: `Event`,
    imageUrl: "/images/event/Picture-1-1.jpg",
    date: "October 13,2019",
    datetime: "2019/10/13",
  },
  {
    id: 47,
    title: `INDUSTRIAL TOUR TO REVERIE POWER AND AUTOMATION ENGINEERING LTD`,
    category: `ias`,
    imageUrl: "/images/event/Picture-1.jpg",
    date: "October 5,2019",
    datetime: "2019/10/5",
  },
  {
    id: 48,
    title: `IEEE AIUB STUDENT BRANCH WIE AFFINITY GROUP ORGANIZED A WORKSHOP TITLED, “AN ANIMATION WORKSHOP PRINCIPLES, DIGITAL TOOLS AND GENRES”`,
    category: `wie`,
    imageUrl: "/images/event/Picture-1-6.jpg",
    date: "October 3,2019",
    datetime: "2019/10/3",
  },
  {
    id: 49,
    title: `IEEE AIUB STUDENT BRANCH ORGANIZED THE SEMINAR TITLED, “SMART POWER GRID IN THE 21ST CENTURY”`,
    category: `seminar`,
    imageUrl: "/images/event/Picture-1-5.jpg",
    date: "September 25,2019",
    datetime: "2019/9/25",
  },
  {
    id: 50,
    title: `IEEE AIUB Student Branch organized a seminar on “Road to Erasmus+ Scholarship”`,
    category: `seminar`,
    imageUrl: "/images/event/Picture-1-4.jpg",
    date: "August 1,2019",
    datetime: "2019/8/1",
  },
  {
    id: 51,
    title: `IEEE AIUB Student Branch organized a seminar on “Advantages of nuclear power for Bangladesh”`,
    category: `seminar`,
    imageUrl: "/images/event/Picture-1-3.jpg",
    date: "July 25,2019",
    datetime: "2019/7/25",
  },
  {
    id: 52,
    title: `IEEE AIUB Student Branch organized the Ambassador’s Session on ‘Introduction to IEEEmadC’`,
    category: `seminar`,
    imageUrl: "/images/event/Picture-1-2.jpg",
    date: "July 22,2019",
    datetime: "2019/7/22",
  },
  {
    id: 53,
    title: `IEEE AIUB Student Branch organizes “General Meeting Summer 2019”`,
    category: ``,
    imageUrl: "/images/event/Picture-1-1.jpg",
    date: "June 20,2019",
    datetime: "2019/6/20",
  },
  {
    id: 54,
    title: `Unofficial Iftar Party of IEEE AIUB Student Branch 2019`,
    category: `seminar`,
    imageUrl: "/images/event/",
    date: "May 22,2019",
    datetime: "2019/5/22",
  },
  {
    id: 55,
    title: `Seminar on Grid Connected Renewable Energy Sources`,
    category: `ias`,
    imageUrl: "/images/event/Picture-2.jpg",
    date: "April 11,2019",
    datetime: "2019/4/11",
  },
  {
    id: 56,
    title: `Members’ Orientation 2019`,
    category: ``,
    imageUrl: "/images/event/Picture-1.jpg",
    date: "April 10,2019",
    datetime: "2019/4/10",
  },
  {
    id: 57,
    title: `IEEE AIUB Student Branch presents “Student Professional Awareness Venture (SPAVe 3.0)”`,
    category: `spave`,
    imageUrl: "/images/event/NBI_7521.jpg",
    date: "December 1,2018",
    datetime: "2018/12/1",
  },
  {
    id: 58,
    title: `IEEE AIUB Student Branch presents a seminar on “Applications, Tools and Techniques of Data Science”`,
    category: `seminar`,
    imageUrl: "/images/event/Capture-1.jpg",
    date: "November 24,2018",
    datetime: "2018/11/24",
  },
  {
    id: 59,
    title: `IEEE AIUB Student Branch organized an Industrial Tour to “Max Power Limited: 78.5 MW Gas-Based Power Plant”`,
    category: `wie`,
    imageUrl: "/images/event/Capture-2.jpg",
    date: "November 17,2018",
    datetime: "2018/11/17",
  },
  {
    id: 60,
    title: `IEEE AIUB Student Branch organized a seminar on “Future Scopes of Firmware Engineering”`,
    category: `cs`,
    imageUrl: "/images/event/Capture-3.jpg",
    date: "November 15,2018",
    datetime: "2018/11/17",
  },
  {
    id: 61,
    title: `IEEE AIUB Student Branch WIE Affinity Group organized a workshop on “Graphics Design for Women in Engineering”`,
    category: `wie`,
    imageUrl: "/images/event/Capture-4.jpg",
    date: "October 15,2018",
    datetime: "2018/10/15",
  },
  {
    id: 62,
    title: `IEEE AIUB Student Branch organizes “Seminar For Engineers on Building Your Career Through Leadership Development”`,
    category: `seminar`,
    imageUrl: "/images/event/PICTURE03-2.jpg",
    date: "February 17,2016",
    datetime: "2016/2/17",
  },
  {
    id: 63,
    title: `IEEE AIUB Student Branch organizes “Industrial Tour 01 – Ghorashal Power Station”`,
    category: `Industrial Tour`,
    imageUrl: "/images/event/PICTURE02-1.jpg",
    date: "February 13,2016",
    datetime: "2016/2/13",
  },
  {
    id: 64,
    title: `IEEE AIUB Student Branch organizes “Industrial Tour 01 – Ghorashal Power Station”`,
    category: `workshop-series`,
    imageUrl: "/images/event/PICTURE03.jpg",
    date: "February 3,2016",
    datetime: "2016/2/3",
  },
  {
    id: 65,
    title: `IEEE AIUB Student Branch hosts “IEEE Members’ Orientation 2016`,
    category: `Orientation`,
    imageUrl: "/images/event/",
    date: "February 4,2016",
    datetime: "2016/2/4",
  },
  {
    id: 66,
    title: `Modern Control Centers and Prevention of Large-Scale Blackouts of the National Grid`,
    category: `pes`,
    imageUrl: "/images/event/PICTURE03.jpg",
    date: "February 3,2016",
    datetime: "2016/2/3",
  },
  {
    id: 67,
    title: `Seminar on “Women in Engineering”`,
    category: ``,
    imageUrl: "/images/event/wie-sem-23.jpg",
    date: "February 22,2023",
    datetime: "2023/2/22",
  },
  {
    id: 68,
    title: `IEEE Student Professional Awareness Venture (SPAVe) 6.0`,
    category: ``,
    imageUrl: "/images/gallery/2023/1.jpg",
    date: "March 16,2023",
    datetime: "2023/3/16",
  },
  {
    id: 69,
    title: `Workshop on "Microwave Antenna Design and Simulation"`,
    category: ``,
    imageUrl: "/images/event/microwave-workshop-23.jpg",
    date: "April 20,2023",
    datetime: "2023/4/20",
  },
  {
    id: 70,
    title: `IEEE AIUB Student Branch Celebrated PES Day 2023 with Engaging Webinar`,
    category: `IEEEAIUBSB`,
    imageUrl: "/images/event/pes-day-23.jpg",
    date: "May 21,2023",
    datetime: "2023/5/21",
  },
  {
    id: 71,
    title: `Unlocking Your Potentials and Pushing Your Boundaries with IEEEXtreme 17.0`,
    category: `CS`,
    imageUrl: "/images/event/ieee-xt-webinar.PNG",
    date: "May 28,2023",
    datetime: "2023/5/28",
  },
  {
    id: 72,
    title: `Seminar on “EEG Signal Processing & Application to the Neurofeedback:
    Operant Conditioning of Brain and Behaviors”.`,
    category: ``,
    imageUrl: "/images/event/eeg-signal.jpg",
    date: "June 22,2023",
    datetime: "2023/5/22",
  },
  {
    id: 73,
    title: `IEEE AIUB Student Branch WIE Affinity Group Successfully Celebrated “WIE Day”`,
    category: `WIE`,
    imageUrl: "/images/event/wie-day-23.jpg",
    date: "June 18,2023",
    datetime: "2023/5/18",
  },
  {
    id: 74,
    title: ` Seminar on ‘Terahertz and Novel Antenna Design Techniques for Next Generation 6G Technologies’`,
    category: ``,
    imageUrl: "/images/event/terahertz-banner.jpg",
    date: "July 4,2023",
    datetime: "2023/6/4",
  },

  {
    id: 75,
    title: `Seminar on ‘Climate Change and Human Health : Unraveling the nexus’`,

    imageUrl: "/images/event/climate-change-banner.jpg",
    date: "July 29,2023",
    datetime: "2023/6/29",
    category: ``,
  },
  {
    id: 76,
    title: `Members' Orientation 2023 - IEEE AIUB Student Branch`,

    imageUrl: "/images/event/member-orinetation-2023.jpg",
    date: "August 8,2023",
    datetime: "2023/8/8",
    category: ``,
  },
  {
    id: 77,
    title: ` Seminar on ‘Postgraduate Studies In Engineering	’`,

    imageUrl: "/images/event/postgraduade-banner.jpg",
    date: "August 13,2023",
    datetime: "2023/8/13",
    category: ``,
  },
  {
    id: 78,
    title: ` Seminar on ‘Reliability and Safety Risks for the AI Hardware in the Perspective of the Future Metaverse ’`,

    imageUrl: "/images/event/realiblity-img.jpg",
    date: "September 9,2023",
    datetime: "2023/9/9",
    category: ``,
  },
  {
    id: 79,
    title: ` Seminar on ‘Securing the Bits and Bytes: Navigating through Classical and Modern Measures of Digital Security’`,

    imageUrl: "/images/event/securing-bit-ab.jpg",
    date: "September 16,2023",
    datetime: "2023/9/16",
    category: ``,
  },
  {
    id: 80,
    title: `Seminar on ‘A Rapid & Low-Cost Multifrequency Electrical Impedance Tomography System for Precision Agriculture’`,

    imageUrl: "/images/event/tomography.jpg",
    date: "September 27,2023",
    datetime: "2023/9/17",
    category: ``,
  },
  {
    id: 81,
    title: `Celebration of IEEE Day 2023`,

    imageUrl: "/images/event/ieee-day-2023.jpg",
    date: "October 10,2023",
    datetime: "2023/10/10",
    category: ``,
  },
  {
    id: 82,
    title: ` Seminar on ‘A Road to Erasmus Mundus Joint Masters (EMJM) and Erasmus Mundus Scholarship’`,

    imageUrl: "/images/event/erasum-mundus-banner.jpg",
    date: "October 22,2023",
    datetime: "2023/10/22",
    category: ``,
  },
  {
    id: 83,
    title: `Webinar on “AIUBIANS on ERASMUS”`,
    imageUrl: "/images/erasmus-23.jpg",
    date: "November 19, 2023",
    datetime: "2023/11/19",
    category: ``,
  },
  {
    id: 84,
    title: `The IEEE AIUB SB successfully organized International Student Led-Conference 2023`,
    imageUrl: "/images/student-led.jpg",
    date: "December 13,2023",
    datetime: "2023/12/13",
    category: ``,
  },
  {
    id: 85,
    title: `Webinar on “Green Computing for AI: Compact and Energy-Efficient Compute-in-Memory”`,
    imageUrl: "/images/green-computing.jpg",
    date: "January 22, 2024",
    datetime: "2024/01/22",
    category: ``,
  },
  {
    id: 86,
    title: `Seminar on “Emerging Research Highlights in Power & Energy”`,
    imageUrl: "/images/power-energy.jpg",
    date: "January 31, 2024",
    datetime: "2024/1/31",
    category: ``,
  },
  {
    id: 87,
    title: `Seminar on “Beyond Boundaries: Electrochemical Sensors Shaping Tomorrow's World"`,
    imageUrl: "/images/electrochemical-sensor.jpg",
    date: "February 7, 2024",
    datetime: "2024/02/07",
    category: ``,
  },
  {
    id: 88,
    title: `Scientific visit to Secondary Standard Dosimetry Laboratory (SSDL) funded by IEEE EMBS`,
    imageUrl: "/images/ssdl-visit.jpg",
    date: "February 28, 2024",
    datetime: "2024/02/28",
    category: ``,
  },
  {
    id: 89,
    title: `Seminar on “Navigating Higher Education Opportunities at Indiana Tech University”`,
    imageUrl: "/images/indianaTech.jpg",
    date: "February 12, 2024",
    datetime: "2024/02/12",
    category: ``,
  },
  {
    id: 90,
    title: `Webinar on “Data-Driven Electric Vehicle Customer Profiling”`,
    imageUrl: "/images/data-driven-electric-vehicle.jpg",
    date: "February 12, 2024",
    datetime: "2024/02/12",
    category: ``,
  },
  {
    id: 91,
    title: `Seminar titled “IEEE USER-AWARENESS SESSION-2024”`,
    imageUrl: "/images/awareness-session-2024.jpg",
    date: "May 27, 2024",
    datetime: "2024/05/27",
    category: ``,
  },
  {
    id: 92,
    title: `IEEE Student Professional Awareness Venture (SPAVe) 7.0`,
    imageUrl: "/images/Spave7.0.png",
    date: "June 06, 2024",
    datetime: "2024/06/06",
    category: ``,
  },
];

export default function OurEvents() {
  const postsPerPage = 9;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const getPagePosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const sortedPosts = posts.sort((a, b) => {
      // const datetimeA = new Date(a.datetime);
      // const datetimeB = new Date(b.datetime);
      // return datetimeB - datetimeA; // Sort in descending order
      return b.id - a.id;
    });

    return sortedPosts.slice(startIndex, startIndex + postsPerPage);
  };

  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 ">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="mt-1 text-center w-full text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
            Events
          </h1>
          <p className="mx-auto mt-3 max-w-4xl text-xl text-gray-500 sm:mt-4">
            Welcome to our Events section. Here, you will find a complete
            listing of exciting and engaging events hosted by IEEE AIUB Student
            Branch.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-md md:max-w-none grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {getPagePosts().map((post) => (
            // eslint-disable-next-line react/jsx-key
            <Post post={post} />
          ))}
        </div>
        <nav className="flex items-center justify-between pt-8 sm:pt-12 border-t border-gray-200 px-4 sm:px-0">
          <div className="-mt-px flex w-0 flex-1">
            <button
              onClick={handlePreviousPage}
              className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              disabled={currentPage === 1}
            >
              <ArrowLongLeftIcon
                className="mr-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Previous
            </button>
          </div>
          <div className="hidden md:-mt-px md:flex">
            {/* Render page numbers dynamically */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`inline-flex items-center border-t-2 ${
                    pageNum === currentPage
                      ? "border-cyan-500 text-cyan-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } px-4 pt-4 text-sm font-medium`}
                  aria-current={pageNum === currentPage ? "page" : undefined}
                >
                  {pageNum}
                </button>
              )
            )}
          </div>
          <div className="-mt-px flex w-0 flex-1 justify-end">
            <button
              onClick={handleNextPage}
              className="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            >
              Next
              <ArrowLongRightIcon
                className="ml-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
