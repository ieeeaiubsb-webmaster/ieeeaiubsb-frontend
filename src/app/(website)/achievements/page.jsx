"use client";
import { useEffect, useId, useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

function DiamondIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 6 6" {...props}>
      <path d="M3 0L6 3L3 6L0 3Z" strokeWidth={2} strokeLinejoin="round" />
    </svg>
  );
}

const achievements = [
  {
    year: "2022",
    records: [
      {
        title:
          "IEEE Regional Exemplary Student Branch Award 2022’ in IEEE Region 10",
        icon: "/images/icon/award1.png",
      },
    ],
  },
  // {
  //   year: "2021",
  //   records: [
  //     {
  //       title: "Damaris Kimura",
  //       icon: "/images/icon/award1.png",
  //     },
  //     {
  //       title: "Ibrahim Frasch",
  //       icon: "/images/icon/award1.png",
  //     },
  //     {
  //       title: "Cathlene Burrage",
  //       icon: "/images/icon/award1.png",
  //     },
  //     {
  //       title: "Rinaldo Beynon",
  //       icon: "/images/icon/award1.png",
  //     },
  //     {
  //       title: "Waylon Hyden",
  //       icon: "/images/icon/award1.png",
  //     },
  //     {
  //       title: "Giordano Sagucio",
  //       icon: "/images/icon/award1.png",
  //     },
  //   ],
  // },
  {
    year: "2020",
    records: [
      {
        title: `IEEE AIUB Student Branch has been awarded the IEEE "Darrel Chong Student Activity Award 2020" in Bronze Category`,
        icon: "/images/icon/award5.png",
      },
      {
        title: `IEEE AIUB Student Branch has been awarded the IEEE REGIONAL EXEMPLARY STUDENT BRANCH 2020`,
        icon: "/images/icon/award1.png",
      },
    ],
  },
  {
    year: "2019",
    records: [
      {
        title: `Dr. Mohammad Hasan Imam was awarded the ‘Best Student Branch Counselor’ at IEEE Bangladesh Section SYW Congress 2019`,
        icon: "/images/icon/award14.png",
      },
      {
        title: `‘Best Student Branch–Honorable Mention’ at IEEE Bangladesh Section SYW Congress 2019`,
        icon: "/images/icon/award12.png",
      },
      {
        title: `‘IEEE Regional Exemplary Student Branch Award 2019’ in IEEE Region 10`,
        icon: "/images/icon/award1.png",
      },
      {
        title: `Runners Up - ‘IEEE Region 10 Website Contest 2019’`,
        icon: "/images/icon/award13.png",
      },
    ],
  },
  {
    year: "2018",
    records: [
      {
        title: `IEEE AIUB Student Branch is the Second Runners Up of the IEEE Region 10 Website Contest 2018`,
        icon: "/images/icon/award13.png",
      },
      {
        title: `IEEE AIUB Student Branch won the IEEE Region 10 SYWL Congress 2018 Info-Graphic Poster Presentation Competition`,
        icon: "/images/icon/award14.png",
      },
      {
        title: `IEEE AIUB SB has achieved “Best Student Branch –Honorable Mention” award at IEEE Bangladesh Section Award Night and Annual Dinner 2018`,
        icon: "/images/icon/award12.png",
      },
      {
        title: `IEEE AIUB SB secured the 1st runner-up position in the Infographic Poster Presentation Contest at IEEE BDS SYWMC 2018`,
        icon: "/images/icon/award10.png",
      },
      {
        title: `IEEE AIUB Student Branch won the IEEE Bangladesh Section SYWM Congress 2018 Video Contest`,
        icon: "/images/icon/award8.png",
      },
    ],
  },
  {
    year: "2017",
    records: [
      {
        title: ` IEEE AIUB Student Branch is the winner of the IEEE MGA Regional Exemplary Student Branch Award 2017IEEE AIUB Student Branch is the winner of the IEEE MGA Regional Exemplary Student Branch Award 2017`,
        icon: "/images/icon/award1.png",
      },
      {
        title: ` Anindo Saha, Former Vice Chair of IEEE AIUB Student Branch has been awarded the Larry K. Wilson Regional Student Activities Award 2017`,
        icon: "/images/icon/award9.png",
      },
      {
        title: ` IEEE AIUB Student Branch is the Champion of "The Inter IEEE Football Fiesta 2017" organized by IEEE NSU Student Branch`,
        icon: "/images/icon/award6.png",
      },
      {
        title: ` 1st place - Website Contest at IEEE Bangladesh Section SYW Congress 2017`,
        icon: "/images/icon/award2.png",
      },
      {
        title: ` Dr. M. Tanseer Ali, Counselor, IEEE AIUB Student Branch has won the IEEE Region 10 Outstanding Branch Counselor & Branch Chapter Advisor Award 2017`,
        icon: "/images/icon/award12.png",
      },
      {
        title: ` 1st place - Poster Presentation Contest at IEEE Bangladesh Section SYW Congress 2017`,
        icon: "/images/icon/award2.png",
      },
      {
        title: ` Winner - IEEE Bangladesh Section 25 years Anniversary Logo Contest`,
        icon: "/images/icon/award7.png",
      },
      {
        title: ` Anindo Saha has been awarded the Larry K. Wilson Regional Student Activities Award 2017.Selected as Outreach Programme Coordinator for IEEE Region 10 Student Activities Committee.Selected as an Ambassador for IEEE Day 2017.`,
        icon: "/images/mem_ach_img/Anindo-1-300x300-1.png",
      },
      {
        title: ` Shabab Iqbal has been selected as the Website Coordinator for IEEE Region 10 Student Activities Committee.`,
        icon: "/images/mem_ach_img/shababpng-300x300-1.png",
      },
      {
        title: ` Zobair Ahmed Khan has been selected as the Sub-Zonal Student Representative (South-East Asia)  for IEEE Region 10 Student Activities Committee.`,
        icon: "/images/mem_ach_img/Zobair-300x300-1.jpg ",
      },
      {
        title: ` Selected as an Ambassador for IEEE madC 2017.Selected as a Logistics Executive for IEEE Bangladesh Section Student Activities Committee.Selected as the Team Lead (Logistics Team) for the IEEE Bangladesh Section Student/YP/WIE Congress 2017.Selected as a Volunteer for IEEE R10HTC 2017.`,
        icon: "/images/mem_ach_img/Raihanul-300x300-1.jpg",
      },
      {
        title: ` Selected as the Graphics Designer for IEEE Bangladesh Section Student Activities Committee.Selected as the Team Lead (Graphics Design Team) for the IEEE Bangladesh Section Student/YP/WIE Congress 2017.Selected as a Volunteer for IEEE R10HTC 2017.`,
        icon: "/images/mem_ach_img/Ahmed-sakib-sadman-300x300-1.jpg",
      },
      {
        title: ` Selected as a Designer for IEEE Region 10 Newsletter.Selected as a Sub-Editor for IEEE Bangladesh Section Newsletter Team (The Frontiers). Selected as a Publication Coordinator for IEEE Bangladesh Section Student/YP/WIE Congress 2017.`,
        icon: "/images/mem_ach_img/Tajwar-300x300-1-1.jpg",
      },
      {
        title: ` Selected as an Ambassador for the IEEE Xtreme 11.0`,
        icon: "/images/mem_ach_img/Thasina-300-300-300x300-1.jpg",
      },
      {
        title: ` Selected as a Logistics Coordinator for IEEE Bangladesh Section Student/YP/WIE Congress 2017.`,
        icon: "/images/mem_ach_img/moin-300x300-1.jpg",
      },
      {
        title: ` Selected as a Photography and Video Editing Coordinator for the IEEE Bangladesh Section Student/YP/WIE Congress 2017.`,
        icon: "/images/mem_ach_img/Md.Delower-Hossain-Sohan-300x300-1.jpg",
      },
      {
        title: ` Selected as an Ambassador for the IEEE Bangladesh Section Student/YP/WIE Congress 2017.`,
        icon: "/images/mem_ach_img/17362549_772949649546008_5185975764847155144_n-300x300-1.jpg",
      },
      {
        title: ` Selected as an Ambassador for the IEEE Bangladesh Section Student/YP/WIE Congress 2017.`,
        icon: "/images/mem_ach_img/17457626_2281045455368088_8142368744015656393_n-300x300-1.jpg",
      },
      {
        title: ` Selected as a Content Writing Coordinator for the IEEE Bangladesh Section Student/YP/WIE Congress 2017.`,
        icon: "/images/mem_ach_img/Mohd-300x300-1.png",
      },
      {
        title: ` Selected as a Photography and Video Editing Coordinator for the IEEE Bangladesh Section Student/YP/WIE Congress 2017.`,
        icon: "/images/mem_ach_img/Romana-1-300x300-1.png ",
      },
      {
        title: ` Selected as a Registrations Coordinator for the IEEE Bangladesh Section Student/YP/WIE Congress 2017.`,
        icon: "/images/mem_ach_img/Doulah-Md-300x300-1.png",
      },
      {
        title: ` Selected as a Graphic Design Coordinator for the IEEE Bangladesh Section Student/YP/WIE Congress 2017.Selected as a Graphic Design Coordinator for the IEEE Bangladesh Section Student/YP/WIE Congress 2017.`,
        icon: "/images/mem_ach_img/Md.-Tauhidur-Rahman-300x300-1.jpg",
      },
    ],
  },
  {
    year: "2016",
    records: [
      {
        title: ` 1st place - Outstanding New Chapter Award at IEEE Industry Applications Society (IA-S) Outstanding Chapter Award Contest 2016`,
        icon: "/images/icon/award14.png",
      },
      {
        title: ` 1st place - Best Student Branch Activities Presentation Award at IEEE Bangladesh Section Student Branch EX-COM Summit 2016`,
        icon: "/images/icon/award8.png",
      },
      {
        title: ` 3rd place - IEEE Region 10 Student Branch Website Contest 2016`,
        icon: "/images/icon/award4.png",
      },
      {
        title: ` 3rd place - IEEE Global Website Contest 2016`,
        icon: "/images/icon/award5.png",
      },
      {
        title: ` 1st place - Best Student Branch Infographics Award at IEEE Region 10 Student/YP/WIE/Life Members Congress 2016`,
        icon: "/images/icon/award10.png",
      },
      {
        title: ` 1st place - Best Student Branch Activities Poster Presentation Award at IEEE Bangladesh Section Student/YP/WIE Congress 2016`,
        icon: "/images/icon/award3.png",
      },
      {
        title: ` 1st place - Student Branch Activities Poster Quiz Contest at IEEE Bangladesh Section Student/YP/WIE Congress 2016`,
        icon: "/images/icon/award6.png",
      },
      {
        title: ` 1st place - IEEE Spectrum Quiz Contest at IEEE Bangladesh Section Student/YP/WIE Congress 2016`,
        icon: "/images/icon/award8.png",
      },
      {
        title: ` 1st place - Best Student Volunteer Award 2014 at IEEE Bangladesh Section Annual Dinner & Awards Ceremony`,
        icon: "/images/icon/award10.png",
      },
      {
        title: ` 1st place - Best Student Volunteer Award 2016 at IEEE Bangladesh Section Annual Dinner & Awards Ceremony`,
        icon: "/images/icon/award2.png",
      },
      {
        title: ` 1st place - Best Counselor Award 2016 at IEEE Bangladesh Section Annual Dinner & Awards Ceremony`,
        icon: "/images/icon/award11.png",
      },
      {
        title: ` Elected as Vice-Chair of the IEEE Young Professionals Affinity Group, IEEE Montreal Section in 2016.`,
        icon: "/images/mem_ach_img/taufiq-300x300-1.png",
      },
      {
        title: ` Mahmudul Haque Jishan became the Section Ambassador of IEEE Day 2015.Selected as the Publicity Coordinator for IEEE Bangladesh Section Young Professionals Affinity Group in 2015.Inaugurated and served as the first IA-S Chapter Chair for IEEE AIUB Student Branch, in 2015 - 2016 - claiming the "Outstanding New Chapter Award" in the IEEE IA-S Outstanding Chapters Contest 2016.`,
        icon: "/images/mem_ach_img/Jishan-vai-300x300-1.jpg",
      },
      {
        title: ` Contributed as one of the Founders of the official IEEE AIUB Student Branch website, which went on to claim 3rd place in the IEEE Region 10 Student Branch Website Contest 2016.Served as the Co-Chair for the 2016 IEEE Region 10 Student Professional Awareness Venture (SPAVe) - the first IEEE SPAVe to be held in Bangladesh.Selected as the Logistics Executive for the IEEE Bangladesh Section Student Activities Committee in 2016.Became the Section Ambassador of IEEE Day 2015 and 2016 consecutively.`,
        icon: "/images/mem_ach_img/jubaer-300x300-1.png",
      },
      {
        title: ` Became the Section Ambassador of IEEE Day 2015 and 2016 consecutively.Served as the Vice Chair for the 2016 IEEE Region 10 Student Professional Awareness Venture (SPAVe) - the first IEEE SPAVe to be held in Bangladesh.`,
        icon: "/images/mem_ach_img/tushar-300x300-1.png",
      },
      {
        title: ` Received the "Best Student Volunteer Award - 2016" at the IEEE Bangladesh Section Annual Dinner & Awards Ceremony 2016.Anindo Saha was selected as the Meeting Coordinator for the IEEE Region 10 Student Activities Committee (SAC) in 2016.Became the Best Ambassador (Bi-Weekly Deadline) among 117 selected global Ambassadors, for IEEEmadC - Mobile Application Development Contest in 2016.Received the Best Presenter Award at the IEEE Bangladesh Section Student Branch EX-COM Summit 2016.Designed and presented the entry for IEEE AIUB Student Branch, and won 1st place in the IEEE Region 10 SYWL Congress Student Branch Infographics Contest 2016 in Bangalore, India.Selected as the Public Relations Lead in Bangladesh for IEEEXtreme 10.0, in 2016.Selected as an Editor for the IEEE Bangladesh Section Newsletter Editorial Team in 2016.Selected as the Facilitator for the IEEE Region 10 Revamping Student Branches Project in 2016.Selected as one of the Student Track & Awards Ceremony Coordinators for the IEEE Region 10 SYWL Congress 2016 in Bangalore, India.Designed and presented the entry for IEEE AIUB Student Branch, and won 1st place in the IEEE Bangladesh Section SYW Congress Student Branch Activities Poster Presentation Contest 2016.Received the "Best Student Volunteer Award - 2016" at the IEEE Bangladesh Section Annual Dinner & Awards Ceremony 2016.Contributed as one of the Founders of the official IEEE AIUB Student Branch website, which went on to claim 3rd place in the IEEE Region 10 Student Branch Website Contest 2016.`,
        icon: "/images/mem_ach_img/anindo-300x300-1.jpg",
      },
      {
        title: ` Became the Section Ambassador of IEEE Day 2015.Received the "Best Student Volunteer Award - 2015" at the IEEE Bangladesh Section Annual Dinner & Awards Ceremony 2016.Inaugurated and served as the first MTT-S Chapter Chair for IEEE AIUB Student Branch, in 2015 - 2016Nasim Al Islam became a member of theIEEE Region 10 Student Activities Committee (SAC) in 2015.Became the Section Student Representative (SSR) of IEEE Bangladesh Section in 2015.Placed 3rdin the Engineer&epos; Wiz Contest at the IEEE Region 10 Student/YP/WIE Congress 2015.Presented the entry for IEEE AIUB Student Branch, and won 1st place in the IEEE Region 10 SYWL Congress Student Branch Poster Presentation Contest 2015 in Colombo, Sri Lanka.Presented the entry for IEEE AIUB Student Branch, and won 1st place in the IEEE Bangladesh Section SYW Congress Student Branch Activity Plan Contest 2015.`,
        icon: "/images/mem_ach_img/nasim-300x300-1.jpg",
      },
      {
        title: ` Tanvir Hossain served as the Public Relations Committee Chair for the 2016 IEEE Region 10 Student Professional Awareness Venture (SPAVe) - the first IEEE SPAVe to be held in Bangladesh.`,
        icon: "/images/mem_ach_img/Tanvir-Hossain-400-x-500-300x300-1.jpg",
      },
      {
        title: ` Diponkor Talukdar won 1st place in the IEEE Bangladesh Section Humanitarian Idea & App Contest 2016.`,
        icon: "/images/mem_ach_img/10897903_402036253298058_5982162132675745313_n-300x300-1.jpg",
      },
      {
        title: ` Shabab Iqbal won 1st prize in the IEEE Region 10 SYWL Congress Photography Contest 2016 in Bangalore, India.Selected as a member of the IEEE Bangladesh Section Membership Development Team in 2016.Contributed as one of the Founders of the official IEEE AIUB Student Branch website, which went on to claim 3rd place in the IEEE Region 10 Student Branch Website Contest 2016.Served as the Website & IT Committee Chair for the 2016 IEEE Region 10 Student Professional Awareness Venture (SPAVe) - the first IEEE SPAVe to be held in Bangladesh.`,
        icon: "/images/mem_ach_img/shababpng-300x300-1.png",
      },
      {
        title: ` A.N.M. Nahid Hasan served as the Publicity Committee Chair for the 2016 IEEE Region 10 Student Professional Awareness Venture (SPAVe) - the first IEEE SPAVe to be held in Bangladesh.`,
        icon: "/images/mem_ach_img/A.-N.-M.-Nahid-Hasan-Designer-300x300-1.jpg",
      },
      {
        title: ` Rupu Chowdhury became the Section Ambassador of IEEE Day 2016.`,
        icon: "/images/mem_ach_img/Rupu-Chowdhury-300x300-1.jpg",
      },
      {
        title: ` Alif Mohammad Asif served as the Finances Committee Chair for the 2016 IEEE Region 10 Student Professional Awareness Venture (SPAVe) - the first IEEE SPAVe to be held in Bangladesh.`,
        icon: "/images/mem_ach_img/Alif-1-300x300-1.jpg",
      },
      {
        title: ` Abu Tanvir Khan served as the Logistics Committee Chair for the 2016 IEEE Region 10 Student Professional Awareness Venture (SPAVe) - the first IEEE SPAVe to be held in Bangladesh.Selected as an Ambassador for the IEEE Bangladesh Section SYW Congress 2016.`,
        icon: "/images/mem_ach_img/tanvir-1-300x300-1.jpg",
      },
      {
        title: ` Zayadul Hasan served as the Registration Committee Chair for the 2016 IEEE Region 10 Student Professional Awareness Venture (SPAVe) - the first IEEE SPAVe to be held in Bangladesh.`,
        icon: "/images/mem_ach_img/rana-1-300x300-1.jpg",
      },
      {
        title: ` Symum Rezwan became the Section Ambassador of IEEE Day 2016.Served as the Event Coordination Committee Chair for the 2016 IEEE Region 10 Student Professional Awareness Venture (SPAVe) - the first IEEE SPAVe to be held in Bangladesh.`,
        icon: "/images/mem_ach_img/symum2-300x300-1.jpg",
      },
      {
        title: ` Moin Abir served as the Logistics Committee Chair for the 2016 IEEE Region 10 Student Professional Awareness Venture (SPAVe) - the first IEEE SPAVe to be held in Bangladesh.`,
        icon: "/images/mem_ach_img/moin-1-300x300-1.jpg",
      },
      {
        title: ` Ashiqur Rahman contributed as one of the Founders of the official IEEE AIUB Student Branch website, which went on to claim 3rd place in the IEEE Region 10 Student Branch Website Contest 2016.`,
        icon: "/images/mem_ach_img/ashiq-300x300-1.jpg",
      },
      {
        title: ` Thasina Tabashum was selected as an Ambassador for IEEEXtreme 10.0,in 2016 which is for the very first time from IEEE AIUB SB.`,
        icon: "/images/mem_ach_img/Thasina-300-300-300x300-1.jpg",
      },
      {
        title: ` Jannatul Ferdous Tania became the Section Ambassador of IEEE Day 2016.`,
        icon: "/images/mem_ach_img/Jannatul-Tania-400-x-500-300x300-1.jpg",
      },
      {
        title: ` Al Emran became the Section Ambassador of IEEE Day 2016.`,
        icon: "/images/mem_ach_img/Al-Imran-400-x-500-300x300-1.jpg",
      },
      {
        title: ` Symum Rezwan became the Section Ambassador of IEEE Day 2016.Served as the Event Coordination Committee Chair for the 2016 IEEE Region 10 Student Professional Awareness Venture (SPAVe) - the first IEEE SPAVe to be held in Bangladesh.`,
        icon: "/images/mem_ach_img/tajwar-300x300-1.jpg ",
      },
      {
        title: ` Zakia Khatun was selected as an Ambassador for the IEEE Bangladesh Section SYW Congress 2016.`,
        icon: "/images/mem_ach_img/Zakia-Rahman-400-x-500-300x300-1.jpg",
      },
    ],
  },
  {
    year: "2015",
    records: [
      {
        title: ` 1st place - Best Activity Plan Award at IEEE Bangladesh Section Student/YP/WIE Congress 20151st place - Best Activity Plan Award at IEEE Bangladesh Section Student/YP/WIE Congress 2015`,
        icon: "/images/icon/award14.png",
      },
      {
        title: ` 1st place - Best Student Branch Activities Poster Presentation Award at IEEE Region 10 Student/YP/WIE Congress 2015`,
        icon: "/images/icon/award9.png",
      },
      {
        title: ` 1st place - Best Student Volunteer Award 2014 at IEEE Bangladesh Section Annual Dinner & Awards Ceremony`,
        icon: "/images/icon/award8.png",
      },
      {
        title: ` 1st place - Best Student Volunteer Award 2015 at IEEE Bangladesh Section Annual Dinner & Awards Ceremony`,
        icon: "/images/icon/award6.png",
      },
      {
        title: ` Jubayer Rahman stood 2nd place in the IEEE Region 10 Member-Get-A-Member (MGM) Program in 2015.`,
        icon: "/images/mem_ach_img/Jubaer-vai-300-x-300-300x300-1.jpg",
      },
      {
        title: ` Mahmudul Haque Jishan became the Section Ambassador of IEEE Day 2015.Selected as the Publicity Coordinator for IEEE Bangladesh Section Young Professionals Affinity Group in 2015.Inaugurated and served as the first IA-S Chapter Chair for IEEE AIUB Student Branch, in 2015 - 2016 - claiming the "Outstanding New Chapter Award" in the IEEE IA-S Outstanding Chapters Contest 2016.`,
        icon: "/images/mem_ach_img/Jishan-vai-300x300-1.jpg",
      },
      {
        title: ` Saimon Mahmood became the Section Ambassador of IEEE Day 2015.`,
        icon: "/images/mem_ach_img/saimon-300x300-1.jpg",
      },
      {
        title: ` Farhana Choudhury was selected as an Editor for the IEEE Region 10 Newsletter Editorial Team in 2015.`,
        icon: "/images/mem_ach_img/farhana-300x300-1.jpg",
      },
      {
        title: ` Nayeem Abrar Ahmed was selected as an Editorial Follow-Up Reviewer for the IEEE Region 10 Newsletter Editorial Team in 2015.`,
        icon: "/images/mem_ach_img/nayeem-300x300-1.jpg",
      },
      {
        title: ` Md. Jubaear Alam became the Section Ambassador of IEEE Day 2015 .`,
        icon: "/images/mem_ach_img/jubaer-300x300-1.png",
      },
      {
        title: ` Fakrul Islam Tushar became the Section Ambassador of IEEE Day 2015.`,
        icon: "/images/mem_ach_img/tushar-300x300-1.png",
      },
      {
        title: ` Selected as an Editor for the IEEE Region 10 Newsletter Editorial Team in 2015.`,
        icon: "/images/mem_ach_img/anindo-300x300-1.jpg ",
      },
      {
        title: ` Became the Section Ambassador of IEEE Day 2015.Received the "Best Student Volunteer Award - 2015" at the IEEE Bangladesh Section Annual Dinner & Awards Ceremony 2016.Inaugurated and served as the first MTT-S Chapter Chair for IEEE AIUB Student Branch, in 2015 - 2016Nasim Al Islam became a member of theIEEE Region 10 Student Activities Committee (SAC) in 2015.Became the Section Student Representative (SSR) of IEEE Bangladesh Section in 2015.Placed 3rdin the Engineer&epos; Wiz Contest at the IEEE Region 10 Student/YP/WIE Congress 2015.Presented the entry for IEEE AIUB Student Branch, and won 1st place in the IEEE Region 10 SYWL Congress Student Branch Poster Presentation Contest 2015 in Colombo, Sri Lanka.Presented the entry for IEEE AIUB Student Branch, and won 1st place in the IEEE Bangladesh Section SYW Congress Student Branch Activity Plan Contest 2015.`,
        icon: "/images/mem_ach_img/nasim-300x300-1.jpg",
      },
    ],
  },
  {
    year: "2014",
    records: [
      {
        title: ` 1st place - Best Student Branch Award 2014 at IEEE Bangladesh Section Annual Dinner & Awards Ceremony1st place - Best Student Branch Award 2014 at IEEE Bangladesh Section Annual Dinner & Awards Ceremony`,
        icon: "/images/icon/award1.png",
      },
      {
        title: ` 1st place - Best Student Volunteer Award 2014 at IEEE Bangladesh Section Annual Dinner & Awards Ceremony1st place - Best Student Volunteer Award 2014 at IEEE Bangladesh Section Annual Dinner & Awards Ceremony`,
        icon: "/images/mem_ach_img/taufiq-300x300-1.png",
      },
    ],
  },
];

export default function Records() {
  let id = useId();
  let [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    let lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <section
      id="records"
      aria-labelledby="records-title"
      className="grid place-items-center"
    >
      <div className="max-w-7xl w-full p-8">
        <div className="mx-auto w-full lg:mx-0 grid place-items-center">
          <h1 className="mt-6 md:mt-12 max-w-fit text-3xl font-extrabold bg-gradient-to-r from-cyan-600 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
            Achievements
          </h1>
        </div>
        <Tab.Group
          as="div"
          vertical={tabOrientation === "vertical"}
          className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
        >
          <div className="relative flex pb-4 sm:mx-0 sm:block sm:pb-0 p-5 md:justify-self-center lg:justify-self-end">
            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 w-full px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) =>
                achievements.map((achievement, dayIndex) => (
                  <div key={achievement.year} className="relative lg:pl-8">
                    <DiamondIcon
                      className={clsx(
                        "absolute top-[0.5625rem] left-[0.3px] hidden h-1.5 w-1.5 lg:block",
                        dayIndex === selectedIndex
                          ? "fill-cyan-600 stroke-cyan-600"
                          : "fill-transparent stroke-slate-400"
                      )}
                    />
                    <div className="relative">
                      <div
                        className={clsx(
                          "font-mono text-sm",
                          dayIndex === selectedIndex
                            ? "text-cyan-600"
                            : "text-slate-500"
                        )}
                      >
                        <Tab className="">
                          {/* <span className="absolute inset-0" /> */}
                          {/* {achievement.title} */}
                          <dev
                            year={achievement.year}
                            className="inset-0 mt-1.5 pb-3 block text-2xl font-semibold tracking-tight text-cyan-900"
                          >
                            {achievement.year}
                          </dev>
                        </Tab>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {achievements.map((achievement) => (
              <Tab.Panel
                key={achievement.year}
                className="flex flex-row flex-wrap justify-around gap-x-8 gap-y-10 sm:gap-y-16"
                unmount={false}
              >
                {achievement.records.map((record, recordIndex) => (
                  <div key={recordIndex} className="w-fit">
                    {/* <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl"> */}
                    {/* <div
                        className={clsx(
                          "absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6",
                          [
                            "border-cyan-300",
                            "border-indigo-300",
                            "border-sky-300",
                          ][recordIndex % 3]
                        )}
                      />
                      <div className="absolute inset-0 bg-indigo-50" style={{ clipPath: `url(#${id}-${recordIndex % 3})` }}>
                        <img
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src="https://keynote.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsteven-mchail.4e94472e.jpg&w=384&q=75"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900"> {record.title} </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500"> {record.icon} </p> */}
                    <div class="text-gray-900">
                      <div class="grid place-items-center">
                        <img
                          class="h-60 w-60 rounded-md"
                          src={record.icon}
                          alt=""
                        />
                      </div>
                      <p class="mt-4 max-w-sm text-lg text-center text-justify font-medium leading-6 before:content-['“'] after:content-['”']">
                        {record.title}
                      </p>
                    </div>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
        {/* <ImageClipPaths id={id} />
      <Container>
      </Container> */}
      </div>
    </section>
  );
}
