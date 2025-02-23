"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { motion } from "framer-motion";
import CategoryBar from "@/components/CategoryBar";
import FeaturedPosts from "@/components/Featured-Posts";
import Image from "@/components/Image";
import PostItem from "@/components/PostItem";
import PostList from "@/components/PostList";

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full flex flex-col pt-0 pl-0 px-4 md:pl-0 pr-auto md:space-y-2 lg:space-y-8">
      {/* Breadcrumb */}
      <div>
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">
                Blogs & Articles
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Content Wrapper */}
      {/* Content Wrapper */}
      <div className="flex items-end justify-between">
        {/* Animated Titles */}
        <div className="max-w-2xl">
          <motion.h1
            className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Explore the World of Knowledge with Engaging Articles
          </motion.h1>
          <motion.p
            className="mt-8 text-md md:text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          >
            Stay informed and inspired with our latest blogs covering a variety
            of topics from technology to lifestyle.
          </motion.p>
        </div>

        {/* Rotating Text and Button */}
        <Link href="/write" className="hidden md:block relative group">
          <div className="relative w-[180px] h-[180px] flex items-end">
            <svg
              viewBox="0 0 200 200"
              width="180"
              height="180"
              className="rotating-text absolute top-0 left-0 animatedButton"
            >
              <defs>
                <linearGradient
                  id="textGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#1e40af" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <path
                id="circlePath"
                fill="none"
                d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
              />
              <text>
                <textPath
                  href="#circlePath"
                  startOffset="3%"
                  className="text-blue-900"
                  style={{ fill: "url(#textGradient)" }}
                >
                  Write your story
                </textPath>
                <textPath
                  href="#circlePath"
                  startOffset="50%"
                  className="text-blue-900"
                  style={{ fill: "url(#textGradient)" }}
                >
                  <tspan dy="-5">Share your idea</tspan>
                </textPath>
              </text>
            </svg>

            <button className="write-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center transition-all duration-300">
              <div className="glow-effect"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="40"
                height="40"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform transition-transform group-hover:scale-110"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
              </svg>
            </button>
          </div>
        </Link>
      </div>

      <div className="mt-5">
        <CategoryBar />
      </div>
      <FeaturedPosts />

      {/* Recent Posts Section */}
      <motion.div
        className=""
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
      >
        <h1 className="text-2xl text-gray-900">Recent Posts</h1>
      </motion.div>

      <PostList />
    </div>
  );
};

export default Dashboard;
