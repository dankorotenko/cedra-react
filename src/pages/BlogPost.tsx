import { useLayoutEffect, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { Move } from "../components/Move";

import { useBlogPosts } from "../hooks/useBlogPosts";

function formatMeta(dateISO: string, readTimeMinutes: number) {
  const date = new Date(dateISO + "T00:00:00");
  const dateText = date.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return { dateText, readText: `${readTimeMinutes} mins read` };
}

export default function BlogPost() {
  const { slug } = useParams();
  const { data, isLoading, isError } = useBlogPosts();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const post = useMemo(
    () => (data ?? []).find((p) => p.slug === slug),
    [data, slug],
  );

  const heroStyle = useMemo(() => {
    if (!post?.coverImage) return undefined;
    return { backgroundImage: `url(${post.coverImage})` } as const;
  }, [post?.coverImage]);

  return (
    <div className="blogPost">
      {isLoading ? (
        <section className="blogPost__section">
          <div className="container">
            <div className="blogPost__loading">Loading post…</div>
          </div>
        </section>
      ) : isError ? (
        <section className="blogPost__section">
          <div className="container">
            <div className="blogPost__error">Failed to load post.</div>
          </div>
        </section>
      ) : !post ? (
        <section className="blogPost__section">
          <div className="container">
            <div className="blogPost__notfound">
              <Link to="/blog" className="blogPost__backInline">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"
                  />
                </svg>
                <span>Back to Blog</span>
              </Link>
              <h1 className="blogPost__titleInline">Post not found</h1>
            </div>
          </div>
        </section>
      ) : (
        (() => {
          const { dateText, readText } = formatMeta(
            post.dateISO,
            post.readTimeMinutes,
          );

          return (
            <>
              <section className="blogPost__hero" style={heroStyle}>
                <div className="blogPost__heroOverlay" />
                <div className="container">
                  <div className="blogPost__heroInner">
                    <Link to="/blog" className="blogPost__backHero">
                      Back to Blog
                    </Link>
                    <div>
                      <h1 className="blogPost__title">{post.title}</h1>

                      <div className="blogPost__meta blogPost__meta_hero">
                        <span className="blogPost__pill blogPost__pill_hero">
                          {post.category}
                        </span>
                        <span>{dateText}</span>•<span>{readText}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="blogPost__section">
                <div className="container">
                  <div className="blogPost__article">
                    <div className="blogPost__body">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {post.contentMarkdown}
                      </ReactMarkdown>
                    </div>

                    <div className="blogPost__bottom">
                      <Link to="/blog" className="blogPost__bottomBtn">
                        Back to Blog page
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </>
          );
        })()
      )}
      <Move />
    </div>
  );
}
