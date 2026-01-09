import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Launch } from "../components/Launch";
import { Move } from "../components/Move";
import { useProjects } from "../hooks/useProjects";
import { ALL_CATEGORIES } from "../types/projects";
import type { Project, ProjectCategory } from "../types/projects";
import { useNavigate } from "react-router-dom";
import fallbackLogo from "../assets/logo.svg";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="projects__links">
      {project.website && (
        <a
          href={project.website}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name} website`}
          onClick={(e) => e.stopPropagation()}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
            />
          </svg>
        </a>
      )}
      {project.socials?.twitter && (
        <a
          href={project.socials.twitter}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name} on X`}
          onClick={(e) => e.stopPropagation()}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
            />
          </svg>
        </a>
      )}
      {project.socials?.telegram && (
        <a
          href={project.socials.telegram}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name} on Telegram`}
          onClick={(e) => e.stopPropagation()}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38"
            />
          </svg>
        </a>
      )}
      {project.socials?.discord && (
        <a
          href={project.socials.discord}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name} on Discord`}
          onClick={(e) => e.stopPropagation()}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
            />
          </svg>
        </a>
      )}
    </div>
  );
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const { data, isLoading, isError } = useProjects();
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    const list = data ?? [];
    if (activeCategory === "All") return list;
    return list.filter((p) =>
      p.categories.includes(activeCategory as ProjectCategory)
    );
  }, [activeCategory, data]);

  const availableCategories = useMemo(() => {
    const list = data ?? [];
    const present = new Set<ProjectCategory>();
    list.forEach((p) => p.categories.forEach((c) => present.add(c)));
    return ALL_CATEGORIES.filter((cat) => present.has(cat as ProjectCategory));
  }, [data]);

  useEffect(() => {
    if (
      activeCategory !== "All" &&
      !availableCategories.includes(activeCategory as ProjectCategory)
    ) {
      setActiveCategory("All");
    }
  }, [activeCategory, availableCategories]);

  return (
    <div className="projects">
      <section className="projects__section">
        <div className="container">
          <div className="projects__header">
            <h1>
              Projects On <span>Cedra</span>
            </h1>
            <div className="projects__categories">
              <button
                className={`projects__chip ${
                  activeCategory === "All" ? "projects__chip_active" : ""
                }`}
                onClick={() => setActiveCategory("All")}
              >
                All
              </button>
              {availableCategories.map((cat) => (
                <button
                  key={cat}
                  className={`projects__chip ${
                    activeCategory === cat ? "projects__chip_active" : ""
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {isLoading ? (
            <div className="projects__list_state">Loading projects…</div>
          ) : isError ? (
            <div className="projects__list_state">Failed to load projects.</div>
          ) : (
            <motion.div
              className="projects__list"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {filtered.map((p) => (
                <div
                  key={p.id}
                  className="projects__row"
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate(`/projects/${p.slug}`)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      navigate(`/projects/${p.slug}`);
                    }
                  }}
                >
                  <div className="projects__row_inner">
                    <div className="projects__left">
                      <div className="projects__logo_wrap" aria-hidden="true">
                        <img
                          src={p.logo || fallbackLogo}
                          alt=""
                          className="projects__logo"
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const img = e.currentTarget as HTMLImageElement;
                            if (img.dataset.fallbackApplied === "true") return;
                            img.dataset.fallbackApplied = "true";
                            img.src = fallbackLogo;
                          }}
                        />
                      </div>
                    </div>

                    <div className="projects__mid">
                      <div className="projects__name">{p.name}</div>
                      <div className="projects__desc">
                        {p.description.length > 160
                          ? p.description.slice(0, 160) + "..."
                          : p.description}
                      </div>
                    </div>

                    <div className="projects__right">
                      <div className="projects__tags">
                        {p.categories.map((c) => (
                          <span key={c}>{c}</span>
                        ))}
                      </div>
                      <ProjectLinks project={p} />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
      <Launch />
      <Move />
    </div>
  );
};

export default Projects;
