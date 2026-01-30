import { useMemo } from "react";
import { BLOG_POSTS } from "../data/blog";
import type { BlogPost } from "../types/blog";

export function useBlogPosts() {
  const data = useMemo<BlogPost[]>(() => BLOG_POSTS.slice(), []);
  return { data, isLoading: false, isError: false } as const;
}

