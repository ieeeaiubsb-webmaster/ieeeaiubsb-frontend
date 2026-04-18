"use client";
import Hero from "@/components/hero";
import Description from "@/components/description";
import Stats2 from "@/components/stats2";
import Achievements from "@/components/achievemnts";
import MissionAndVision from "@/components/MnV";
import ChaptersAndAG from "@/components/chapters logo";
import Testimonial from "@/components/testimonial (3)";
import RecentPosts3 from "@/components/recent_posts_3";
import Faq from "@/components/faq";
import JoinUs from "@/components/join us";

export default function Home() {
  return (
    <>
      {/* <HeaderCentered></HeaderCentered> */}
      <Hero></Hero>
      <Description></Description>
      <Stats2></Stats2>
      <ChaptersAndAG />
      <Achievements></Achievements>
      <MissionAndVision></MissionAndVision>
      <Testimonial></Testimonial>
      <RecentPosts3></RecentPosts3>
      <Faq />
      <JoinUs></JoinUs>
    </>
  );
}
