import React from 'react';
import { BlogHero } from './BlogHero';
import { BlogDetails } from './BlogDetails';
import BlogPlatform from './BlogPlatform';
import { RelatedBlog } from './RelatedBlog';
import { Footer } from '../../components/Footer';



export const Blog = () => {


  return (
    <>
      {/* Blog hero */}
      <BlogHero />

      {/* Blog Details */}
      <BlogDetails />

      {/* Blog Posts */}
      <RelatedBlog />
      <BlogPlatform />

      <Footer />
    </>




  );
};
