"use client";

import Link from "next/link";
import Image from "next/image";

const FeaturedPosts = () => {
  return (
  <div className="container mx-auto px-4 py-8  flex-1">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Main featured post */}
    <div className="flex flex-col gap-6 h-full">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
          alt="Main featured post"
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          priority
        />
      </div>
      <div className="flex items-center gap-4 text-sm md:text-base">
        <span className="font-semibold text-gray-900 dark:text-gray-100">01.</span>
        <Link 
          href="/" 
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
        >
          Web Design
        </Link>
        <span className="text-gray-500 dark:text-gray-400">2 days ago</span>
      </div>
      <Link
        href="/test"
        className="group text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <h2>Building responsive and accessible web applications in 2024</h2>
      </Link>
    </div>

    {/* Secondary posts */}
    <div className="grid gap-8">
      {[
        {
          id: "02",
          category: "Game Design",
          link: "/game-design",
          image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80",
          title: "The evolution of game design: From pixels to photorealism",
        },
        {
          id: "03",
          category: "UI/UX",
          link: "/ui-ux",
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80",
          title: "Creating intuitive user experiences through thoughtful design",
        },
        {
          id: "04",
          category: "Development",
          link: "/development",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
          title: "Modern development practices for scalable applications",
        },
      ].map((post) => (
        <div 
          key={post.id} 
          className="group flex flex-col sm:flex-row gap-4 sm:gap-6 h-full items-stretch bg-red-50 p-2 "
        >
          <div className="relative w-full sm:w-1/3 aspect-[16/10] bg-blue-50">
            <Image
              src={post.image}
              alt={post.category}
              fill
              className="rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 33vw, 300px"
            />
          </div>
          <div className="flex flex-col justify-around flex-1 pb-6">
            <div className="flex items-center gap-4 text-sm mb-3">
              <span className="font-semibold text-gray-900 dark:text-gray-100">{post.id}.</span>
              <Link 
                href={post.link} 
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                {post.category}
              </Link>
              <span className="text-gray-500 dark:text-gray-400">2 days ago</span>
            </div>
            <Link
              href="/test"
              className="block text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <h3>{post.title}</h3>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default FeaturedPosts;