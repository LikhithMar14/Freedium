"use client"
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Search from '../components/SearchBar';
import { Facebook, Instagram } from 'lucide-react';
import Comment from './Comment';
import Comments from './Comments';


const SinglePostPage = () => {
  const { slug } = useParams();

  // Dummy data
  const data = {
    title: 'Understanding Turborepo in Modern Development',
    user: {
      username: 'JohnDoe',
      img: '/next.svg',
    },
    category: 'Development',
    createdAt: "2 days ago",
    desc: 'Turborepo is a powerful tool for managing monorepos efficiently.',
    img: '/turborepo-dark.svg',
    _id: 'dummy123',
    content: `
      Turborepo is a high-performance build system for JavaScript and TypeScript monorepos. 
      It allows developers to optimize and speed up their builds by caching tasks, 
      parallelizing workflows, and reducing redundant work. This makes it particularly useful for large-scale 
      applications where managing multiple packages and dependencies efficiently is crucial.

      With Turborepo, developers can define a pipeline where tasks like linting, testing, and building 
      are executed only when necessary, ensuring faster feedback loops and improved developer productivity. 
      By leveraging intelligent task scheduling, Turborepo significantly reduces build times compared 
      to traditional approaches.

      Another key advantage is its compatibility with popular package managers like pnpm, yarn, and npm, 
      allowing seamless integration with existing projects. It also supports remote caching, meaning 
      builds can be shared across teams, reducing redundant computation and making CI/CD pipelines more efficient.

      Adopting Turborepo can be a game-changer for teams working on large, multi-package repositories, 
      providing a structured and scalable way to handle codebases with minimal overhead.
    `,
  };

  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-0 py-8 flex flex-col gap-12">
      {/* Blog Post Header */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl md:text-4xl font-semibold">{data.title}</h1>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>Written by</span>
          <Link href="#" className="text-blue-600 font-medium">
            {data.user.username}
          </Link>
          <span>on</span>
          <Link href="#" className="text-blue-600 font-medium">
            {data.category}
          </Link>
          <span>{data.createdAt}</span>
        </div>
      </div>

      {/* Blog Content + Sidebar */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="w-full lg:w-3/4 flex flex-col gap-6">
          {data.img && (
            <Image
              src={data.img}
              width={800}
              height={450}
              alt="Blog cover"
              className="rounded-xl object-cover"
            />
          )}

          <p className="text-lg text-gray-700 font-medium">{data.desc}</p>

          <div className="text-lg leading-7 text-gray-800 space-y-6">
            {data.content.split('\n\n').map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 space-y-8">
          {/* Author Info */}
          <div className="p-6 bg-gray-200 rounded-xl">
            <h2 className="text-lg font-semibold mb-4">Author</h2>
            <div className="flex items-center gap-4">
              <Image
                src={data.user.img}
                className="rounded-full object-cover"
                width={50}
                height={50}
                alt="avatar"
              />
              <Link href="#" className="text-blue-600 font-medium">
                {data.user.username}
              </Link>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Passionate developer and tech writer.
            </p>
            <div className="flex gap-3 mt-3">
              <Link href="#">
                <Image src = "./facebook.svg" width={30} height={30} alt="facebook"/>
              </Link>
              <Link href="#">
                <Image src = "./insta.svg" width={30} height={30} alt="instagram"/>
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="p-6 bg-gray-200 rounded-xl">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="#" className="text-blue-600 hover:underline">All</Link>
              <Link href="#" className="text-blue-600 hover:underline">Web Design</Link>
              <Link href="#" className="text-blue-600 hover:underline">Development</Link>
              <Link href="#" className="text-blue-600 hover:underline">Databases</Link>
              <Link href="#" className="text-blue-600 hover:underline">Search Engines</Link>
              <Link href="#" className="text-blue-600 hover:underline">Marketing</Link>
            </div>
          </div>

          {/* Search */}
          <div className="p-6 bg-gray-200 rounded-xl">
            <h2 className="text-lg font-semibold mb-4">Search</h2>
            <Search />
          </div>
        </aside>
      </div>
      <Comments/>

    </div>
    
  );
};

export default SinglePostPage;
