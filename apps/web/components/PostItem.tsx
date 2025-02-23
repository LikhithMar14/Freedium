"use client"

import { useIsMobile } from "@/hooks/useMobile"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Clock, Bookmark } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const AuthorInfo = () => (
  <div className="flex items-center gap-2 text-sm text-muted-foreground">
    <Avatar className="w-6 h-6">
      <AvatarImage src="/avatars/john-doe.png" alt="John Doe" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    <span className="font-medium text-foreground">John Doe</span>
    <span>·</span>
    <span className="flex items-center gap-1">
      <Clock className="w-4 h-4"/> 2 days ago
    </span>
  </div>
)

const MobilePageItem = () => (
  <Card className="hover:shadow-lg transition-shadow ">
    <CardContent className="p-4 flex gap-4">
      <Image
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
        alt="Main featured post"
        width={100}
        height={100}
        className=" object-cover w-24 h-24"
      />
      <div className="flex flex-col justify-between flex-1">
        <AuthorInfo />
        <h3 className="text-lg font-semibold text-foreground mt-2 leading-tight">
          How to Build a Modern UI Like Medium
        </h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          Learn how to create a sleek and modern UI similar to Medium's app experience.
        </p>
        <div className="flex items-center justify-between mt-2">
          <Badge variant="secondary" className="text-xs">UI Design</Badge>
          <Bookmark className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
    </CardContent>
  </Card>
)

const DesktopPageItem = () => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardContent className="p-6 flex gap-6">
      <Image
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
        alt="Main featured post"
        width={200}
        height={200}
        className=" object-cover w-48 h-48"
      />
      <div className="flex flex-col justify-between flex-1">
        <CardHeader className="p-0">
          <AuthorInfo />
          <h3 className="text-2xl font-semibold text-foreground mt-2 leading-tight">
            How to Build a Modern UI Like Medium
          </h3>
        </CardHeader>
        <p className="text-muted-foreground mt-2">
          Learn how to create a sleek and modern UI similar to Medium's app experience. This comprehensive guide
          covers everything from design principles to implementation techniques.
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2">
            <Badge variant="secondary">UI Design</Badge>
            <Badge variant="secondary">Web Development</Badge>
          </div>
          <Bookmark className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </CardContent>
  </Card>
)

const PostItem = () => {
  const isMobile = useIsMobile()
  return (
    <Link href="/article/how-to-build-modern-ui" className="block hover:no-underline">
      {isMobile ? <MobilePageItem /> : <DesktopPageItem />}
    </Link>
  )
}

export default PostItem
