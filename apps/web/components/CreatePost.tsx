"use client";

import "react-quill-new/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Image, ImagePlus, Upload, X } from "lucide-react";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const CreatePost = () => {
  const [category, setCategory] = useState("general");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ title, category, description, content, imagePreview });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-semibold mb-8">
          Create a New Post
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Image Upload Section */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Cover Image
            </label>
            <div className="relative">
              {imagePreview ? (
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-[300px] border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-12 h-12 text-gray-400 mb-3" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>
          </div>

          {/* Title Input */}
          <div className="space-y-2">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-3xl font-semibold bg-transparent border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-500 transition px-0 py-2"
              placeholder="Enter your post title..."
            />
          </div>

          {/* Category Select */}
          <div className="space-y-2">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Choose a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="web-design">Web Design</SelectItem>
                  <SelectItem value="development">Development</SelectItem>
                  <SelectItem value="databases">Databases</SelectItem>
                  <SelectItem value="seo">Search Engines</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Description Textarea */}
          <div className="space-y-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Short Description
            </label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write a brief description of your post..."
              className="resize-none"
              rows={3}
            />
          </div>

          {/* Rich Text Editor */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <div className="min-h-[400px] border rounded-lg">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                className="h-[350px]"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-6">
            <Button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Publish Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
