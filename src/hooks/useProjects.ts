import { useEffect, useState } from "react";
import { type Project, type ProjectCategory } from "../types/projects";

type RemoteProject = {
  id: number;
  name: string;
  slug: string;
  description: string;
  logo: string;
  website?: string;
  category?: string;
  socials?: {
    discord?: string;
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    telegram?: string;
  };
};

const PROJECTS_URL =
  "https://raw.githubusercontent.com/cedra-labs/cedra-projects/refs/heads/main/projects.json";

const cache: {
  data: Project[] | null;
  error: unknown | null;
  promise: Promise<Project[]> | null;
} = { data: null, error: null, promise: null };

function mapRemoteProject(p: RemoteProject): Project {
  const category = (p.category || "").trim() as ProjectCategory;
  return {
    id: String(p.id),
    name: p.name,
    slug: p.slug,
    logo: p.logo,
    description: p.description,
    categories: category ? [category] : [],
    website: p.website,
    socials: p.socials,
  };
}

async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(PROJECTS_URL, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to fetch projects: ${res.status}`);
  }
  const json = (await res.json()) as RemoteProject[];
  return json.map(mapRemoteProject);
}

export function useProjects() {
  const [data, setData] = useState<Project[] | null>(cache.data);
  const [error, setError] = useState<unknown>(cache.error);
  const [isLoading, setIsLoading] = useState<boolean>(
    !cache.data && !cache.error
  );

  useEffect(() => {
    let isMounted = true;

    if (cache.data) {
      setIsLoading(false);
      setData(cache.data);
      return;
    }

    if (!cache.promise) {
      cache.promise = fetchProjects()
        .then((projects) => {
          cache.data = projects;
          cache.error = null;
          return projects;
        })
        .catch((err) => {
          cache.error = err;
          cache.data = null;
          throw err;
        })
        .finally(() => {
          cache.promise = null;
        });
    }

    setIsLoading(true);

    cache.promise
      .then((projects) => {
        if (!isMounted) return;
        setData(projects);
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(err);
        setData(null);
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, isLoading, isError: Boolean(error) } as const;
}
