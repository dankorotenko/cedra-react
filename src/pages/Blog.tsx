import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Move } from "../components/Move";
import { useBlogPosts } from "../hooks/useBlogPosts";
import type { BlogCategory, BlogPost } from "../types/blog";
import { ALL_BLOG_CATEGORIES } from "../types/blog";

function formatMeta(post: BlogPost) {
  const date = new Date(post.dateISO + "T00:00:00");
  const dateText = date.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const readText = `${post.readTimeMinutes} mins read`;
  return { dateText, readText };
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const { data, isLoading, isError } = useBlogPosts();
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    const list = data ?? [];
    if (activeCategory === "All") return list;
    return list.filter((p) => p.category === (activeCategory as BlogCategory));
  }, [activeCategory, data]);

  const availableCategories = useMemo(() => {
    const list = data ?? [];
    const present = new Set<BlogCategory>();
    list.forEach((p) => {
      present.add(p.category);
    });
    return ALL_BLOG_CATEGORIES.filter(
      (cat) => cat === "All" || present.has(cat as BlogCategory),
    );
  }, [data]);

  useEffect(() => {
    if (
      activeCategory !== "All" &&
      !availableCategories.includes(activeCategory)
    ) {
      setActiveCategory("All");
    }
  }, [activeCategory, availableCategories]);

  return (
    <div className="blog">
      <section className="blog__section">
        <div className="container">
          <div className="blog__header">
            <h1 className="blog__title">
              <span className="blog__titleStrong">Cedra</span>{" "}
              <span className="blog__titleLight">Blog</span>
            </h1>

            <nav className="blog__categories" aria-label="Blog categories">
              {availableCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`blog__chip ${
                    activeCategory === cat ? "blog__chip_active" : ""
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </div>

          {isLoading ? (
            <div className="blog__list_state">Loading posts…</div>
          ) : isError ? (
            <div className="blog__list_state">Failed to load posts.</div>
          ) : (
            <motion.div
              className="blog__list"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {filtered.map((post) => {
                const { dateText, readText } = formatMeta(post);
                return (
                  <button
                    key={post.id}
                    type="button"
                    className="blog__row"
                    onClick={() => navigate(`/blog/${post.slug}`)}
                  >
                    <div className="blog__row_inner">
                      <div className="blog__left">
                        <div className="blog__postTitle">{post.title}</div>
                        <div className="blog__meta">
                          <span className="blog__pill">{post.category}</span>
                          <span>{dateText}</span>•<span>{readText}</span>
                        </div>
                      </div>

                      <div className="blog__right">
                        <div className="blog__excerpt">{post.excerpt}</div>
                        <div className="blog__more">Read more</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </motion.div>
          )}
        </div>
      </section>
      <Move />
    </div>
  );
}
