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
      <div className="flex items-center justify-between">
        {/* Animated Titles */}
        <div>
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

        {/* Animated Button */}
        <Link href="/write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="150"
            height="150"
            className="text-lg tracking-wide animate-spin font-light animatedButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center shadow-2xl shadow-sky-600 drop-shadow-lg">
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
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
            </svg>
          </button>
        </Link>
      </div>
      <div className="mt-5">
        <CategoryBar />
      </div>
      {/* <FeaturedPosts/> */}
      {/* Recent Posts Section */}
      <motion.div
        className=""
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
      >
        <h1 className="text-2xl text-gray-600">Recent Posts</h1>
      </motion.div>
    </div>
  );
};

export default Dashboard;
