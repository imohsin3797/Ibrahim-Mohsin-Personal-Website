"use client";

import React from "react";
import { Box, Typography } from "@mui/material"; 
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CurvyDivider from "./components/CurvyDivider";
import BlogPod from "./components/BlogPod";
import ContactMe from "./components/ContactMe";
import ExperienceCard from "./components/ExperienceCard"

export default function Home() {
  const experienceBulletList1 = `• UNC Chapel-Hill's Premier Pro-Bono Consulting Club | Working with local non-profits and national businesses in pro-bono student consulting services and deliverables.

  • Working alongside Doorlist, college event management application, to create a comprehensive growth and retention plan on college campuses around the nation

  • Leading user engagement plan on project team to create marketing and user acquisition strategies`;

  const experienceBulletList2 = `• UNC Chapel-Hill's only Investment Fund dedicated to ESG and sustainable investing

  • Working in the Industrials sector to develop a stock portfolio and final pitch deliverable to the fund

  • Collaborating with the research team to source out market trends and updates, upcoming companies, and investment opportunities`;

  const experienceBulletList3 = `• Leading development on the first mobile app dedicated to matching and paying hard-working students to do local community odd-jobs

  • Using SwiftUI, building out product MVP complete with user messaging, in-app payments, reviews, and cloud-based data with Firebase

  • Named 2024 Carolina Pitch Fest Finalists, presenting to a panel of industry professionals`;
  
  return (
    <Box sx={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Box sx={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <Header />
      </Box>
      <HeroSection />
      <CurvyDivider />

      <Box
        component="section"
        sx={{
          backgroundColor: "#1c1c1c",
          display: "flex",
          px: 4,
        }}
      >

        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: "bold",
            textAlign: "left",
            mt: 1
          }}
        >
          Blog: Catalog of my Recent Trips, Experiences, and Projects
        </Typography>

      </Box>

      <Box
        component="section"
        sx={{
          minHeight: "65vh",
          backgroundColor: "#1c1c1c",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          px: 2,
          py: 4,
        }}
      >
        <BlogPod
          imageUrl="/images/AceGlass.jpg"
          title="Hoya Hacks: AceGlass"
          description="Check out my recent trip to Georgetown University to compete at the annual Hoya Hacks! Alongside my hackathon team, we built AceGlass, the first AI-enabled wearable to give you poker tips and strategies in real time gameplay."
          category="Hackathons"
          tagColor="#B22222"
          linkUrl={null}
        />

        <BlogPod
          imageUrl="/images/CarolinaPitchFest.jpg"
          title="My Experience Building out Sidekick so Far"
          description="Working alongside my co-founders to build out Sidekick's first mobile application has been incredibly rewarding thus far. Check out how we did at the Carolina Pitch Fest!"
          category="Startup Project"
          tagColor="#4169E1"
          linkUrl={null}
        />

        <BlogPod
          imageUrl="/images/OLCore.jpg"
          title="SRIRACHA: 22 Days in the Wilderness"
          description="Having never been camping a day in my life, this past summer I spent 22 days with some of my now closest friends out in the wilderness of Great Lake Superior at the border of Canada and Minnesota. Check out the stories I have to tell!"
          category="Trips"
          tagColor="#3CB371"
          linkUrl={null}
        />
      </Box>
      
      <CurvyDivider flip/>

      <Box
        component="section"
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          px: 4,
        }}
      >

        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: "bold",
            textAlign: "left",
            color: "black",
            mt: 3
          }}
        >
          Experiences: My Recent Positions and Involvements
        </Typography>

      </Box>

      <Box
        component="section"
        justifyContent={"center"}
        sx={{
          backgroundColor: "#fff",
          flexDirection: "column",
          alignItems: "center",
          display: "flex",
          px: 4,
        }}
      >
        <ExperienceCard
          imageUrl="/images/180.png"
          title="180 Degrees Consulting @ UNC-Chapel Hill"
          subtitle="Business Consultant with Doorlist | September 2024 - Present"
          body = {experienceBulletList1}
        ></ExperienceCard>

        <ExperienceCard
          imageUrl="/images/IIC.png"
          title="Impact Investment Fund @ UNC-Chapel Hill"
          subtitle="Investment Analyst | January 2025 - Present"
          body={experienceBulletList2}
          flip
        ></ExperienceCard>

        <ExperienceCard
          imageUrl="/images/Sidekick.png"
          title="Sidekick"
          subtitle="Co-Founder and Lead Developer | October 2024 - Present"
          body={experienceBulletList3}
        ></ExperienceCard>

      </Box>

      <CurvyDivider/>

      <Box
      component="section"
      justifyContent={"center"}
        sx={{
        backgroundColor: "#1c1c1c",
        display: "flex",
        px: 4,
        mt: -1
      }}>
        <ContactMe/>
      </Box>
    </Box>
  );
}
