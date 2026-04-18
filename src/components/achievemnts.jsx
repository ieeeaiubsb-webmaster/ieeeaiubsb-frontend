"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const achievements = [
  {
    title:
      "IEEE Regional Exemplary Student Branch Award 2022 in IEEE Region 10",
    icon: "/images/icon/award1.png",
    year: "2022",
  },
  {
    title:
      "IEEE AIUB Student Branch has been awarded the IEEE 'Darrel Chong Student Activity Award 2020' in Bronze Category",
    icon: "/images/icon/award5.png",
    year: "2020",
  },
  {
    title:
      "IEEE AIUB Student Branch has been awarded the IEEE REGIONAL EXEMPLARY STUDENT BRANCH 2020",
    icon: "/images/icon/award1.png",
    year: "2020",
  },
  {
    title:
      "Dr. Mohammad Hasan Imam was awarded the ‘Best Student Branch Counselor’ at IEEE Bangladesh Section SYW Congress 2019",
    icon: "/images/icon/award14.png",
    year: "2019",
  },
  {
    title:
      "‘Best Student Branch–Honorable Mention’ at IEEE Bangladesh Section SYW Congress 2019",
    icon: "/images/icon/award12.png",
    year: "2019",
  },
  {
    title:
      "‘IEEE Regional Exemplary Student Branch Award 2019’ in IEEE Region 10",
    icon: "/images/icon/award1.png",
    year: "2019",
  },
  {
    title: "Runners Up - ‘IEEE Region 10 Website Contest 2019’",
    icon: "/images/icon/award13.png",
    year: "2019",
  },
  {
    title:
      "IEEE AIUB Student Branch is the Second Runners Up of the IEEE Region 10 Website Contest 2018",
    icon: "/images/icon/award13.png",
    year: "2018",
  },
  {
    title:
      "IEEE AIUB Student Branch won the IEEE Region 10 SYWL Congress 2018 Info-Graphic Poster Presentation Competition",
    icon: "/images/icon/award14.png",
    year: "2018",
  },
  {
    title:
      "IEEE AIUB SB has achieved “Best Student Branch –Honorable Mention” award at IEEE Bangladesh Section Award Night and Annual Dinner 2018",
    icon: "/images/icon/award12.png",
    year: "2018",
  },
  {
    title:
      "IEEE AIUB SB secured the 1st runner-up position in the Infographic Poster Presentation Contest at IEEE BDS SYWMC 2018",
    icon: "/images/icon/award10.png",
    year: "2018",
  },
  {
    title:
      "IEEE AIUB Student Branch won the IEEE Bangladesh Section SYWM Congress 2018 Video Contest",
    icon: "/images/icon/award8.png",
    year: "2018",
  },
  {
    title:
      " IEEE AIUB Student Branch is the winner of the IEEE MGA Regional Exemplary Student Branch Award 2017IEEE AIUB Student Branch is the winner of the IEEE MGA Regional Exemplary Student Branch Award 2017",
    icon: "/images/icon/award1.png",
    year: "2017",
  },
  {
    title:
      " Anindo Saha, Former Vice Chair of IEEE AIUB Student Branch has been awarded the Larry K. Wilson Regional Student Activities Award 2017",
    icon: "/images/icon/award9.png",
    year: "2017",
  },
  {
    title:
      " IEEE AIUB Student Branch is the Champion of 'The Inter IEEE Football Fiesta 2017' organized by IEEE NSU Student Branch",
    icon: "/images/icon/award6.png",
    year: "2017",
  },
  {
    title:
      " 1st place - Website Contest at IEEE Bangladesh Section SYW Congress 2017",
    icon: "/images/icon/award2.png",
    year: "2017",
  },
  {
    title:
      " Dr. M. Tanseer Ali, Counselor, IEEE AIUB Student Branch has won the IEEE Region 10 Outstanding Branch Counselor & Branch Chapter Advisor Award 2017",
    icon: "/images/icon/award12.png",
    year: "2017",
  },
  {
    title:
      " 1st place - Poster Presentation Contest at IEEE Bangladesh Section SYW Congress 2017",
    icon: "/images/icon/award2.png",
    year: "2017",
  },
  {
    title:
      " Winner - IEEE Bangladesh Section 25 years Anniversary Logo Contest",
    icon: "/images/icon/award7.png",
    year: "2017",
  },
  {
    title:
      " 1st place - Outstanding New Chapter Award at IEEE Industry Applications Society (IA-S) Outstanding Chapter Award Contest 2016",
    icon: "/images/icon/award14.png",
    year: "2016",
  },
  {
    title:
      " 1st place - Best Student Branch Activities Presentation Award at IEEE Bangladesh Section Student Branch EX-COM Summit 2016",
    icon: "/images/icon/award8.png",
    year: "2016",
  },
  {
    title: " 3rd place - IEEE Region 10 Student Branch Website Contest 2016",
    icon: "/images/icon/award4.png",
    year: "2016",
  },
  {
    title: " 3rd place - IEEE Global Website Contest 2016",
    icon: "/images/icon/award5.png",
    year: "2016",
  },
  {
    title:
      " 1st place - Best Student Branch Infographics Award at IEEE Region 10 Student/YP/WIE/Life Members Congress 2016",
    icon: "/images/icon/award10.png",
    year: "2016",
  },
  {
    title:
      " 1st place - Best Student Branch Activities Poster Presentation Award at IEEE Bangladesh Section Student/YP/WIE Congress 2016",
    icon: "/images/icon/award3.png",
    year: "2016",
  },
  {
    title:
      " 1st place - Student Branch Activities Poster Quiz Contest at IEEE Bangladesh Section Student/YP/WIE Congress 2016",
    icon: "/images/icon/award6.png",
    year: "2016",
  },
  {
    title:
      " 1st place - IEEE Spectrum Quiz Contest at IEEE Bangladesh Section Student/YP/WIE Congress 2016",
    icon: "/images/icon/award8.png",
    year: "2016",
  },
  {
    title:
      " 1st place - Best Student Volunteer Award 2014 at IEEE Bangladesh Section Annual Dinner & Awards Ceremony",
    icon: "/images/icon/award10.png",
    year: "2016",
  },
  {
    title:
      " 1st place - Best Student Volunteer Award 2016 at IEEE Bangladesh Section Annual Dinner & Awards Ceremony",
    icon: "/images/icon/award2.png",
    year: "2016",
  },
  {
    title:
      " 1st place - Best Counselor Award 2016 at IEEE Bangladesh Section Annual Dinner & Awards Ceremony",
    icon: "/images/icon/award11.png",
    year: "2016",
  },
  {
    title:
      " 1st place - Best Activity Plan Award at IEEE Bangladesh Section Student/YP/WIE Congress 20151st place - Best Activity Plan Award at IEEE Bangladesh Section Student/YP/WIE Congress 2015",
    icon: "/images/icon/award14.png",
    year: "2015",
  },
  {
    title:
      " 1st place - Best Student Branch Activities Poster Presentation Award at IEEE Region 10 Student/YP/WIE Congress 2015",
    icon: "/images/icon/award9.png",
    year: "2015",
  },
  {
    title:
      " 1st place - Best Student Volunteer Award 2014 at IEEE Bangladesh Section Annual Dinner & Awards Ceremony",
    icon: "/images/icon/award8.png",
    year: "2015",
  },
  {
    title:
      " 1st place - Best Student Volunteer Award 2015 at IEEE Bangladesh Section Annual Dinner & Awards Ceremony",
    icon: "/images/icon/award6.png",
    year: "2015",
  },

  {
    title:
      " 1st place - Best Student Branch Award 2014 at IEEE Bangladesh Section Annual Dinner & Awards Ceremony1st place - Best Student Branch Award 2014 at IEEE Bangladesh Section Annual Dinner & Awards Ceremony",
    icon: "/images/icon/award1.png",
    year: "2014",
  },
];

export function Container({ className, ...props }) {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

function Achievement({ title, icon, year, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = [
      "0s",
      "0.1s",
      "0.2s",
      "0.3s",
      "0.4s",
      "0.5s",
    ];
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  return (
    <figure
      className={clsx(
        "animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <div className="text-gray-900">
        <div className="grid place-items-center">
          <img className="h-32" src={icon} alt="" />
        </div>
        <p className="mt-4 text-lg text-center font-medium leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
      </div>
      <figcaption className="mt-3 text-sm text-gray-600 text-center before:content-['–_']">
        {year}
      </figcaption>
    </figure>
  );
}

function splitArray(array, numParts) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

function AchievementColumn({
  className,
  achievements,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef();
  let [columnHeight, setColumnHeight] = useState(0);
  let duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef?.current?.offsetHeight);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={clsx("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration }}
    >
      {achievements.concat(achievements).map((review, reviewIndex) => (
        <Achievement
          key={reviewIndex}
          aria-hidden={reviewIndex >= achievements.length}
          className={reviewClassName(reviewIndex % achievements.length)}
          {...review}
        />
      ))}
    </div>
  );
}

function AchievementGrid() {
  let containerRef = useRef();
  let isInView = useInView(containerRef, { once: true, amount: 0.4 });
  let columns = splitArray(achievements, 3);
  columns = [columns[0], columns[1], splitArray(columns[2], 2)];

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <AchievementColumn
            achievements={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  "md:hidden",
                reviewIndex >= columns[0].length && "lg:hidden"
              )
            }
            msPerPixel={10}
          />
          <AchievementColumn
            achievements={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && "lg:hidden"
            }
            msPerPixel={15}
          />
          <AchievementColumn
            achievements={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  );
}

export default function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <Container>
        <h2
          id="achievements-title"
          className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl tracking-tight text-gray-900 text-center"
        >
          Achievements
        </h2>
        {/* <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Thousands of people have doubled their net-worth in the last 30 days.
        </p> */}
        <AchievementGrid />
      </Container>
    </section>
  );
}
