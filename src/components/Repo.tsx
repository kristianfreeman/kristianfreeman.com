import { useEffect, useState } from "react";

import { Star, GitFork } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

type RepoData = {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  watchers_count: number;
  html_url: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const STARS_THRESHOLD = 10;
const FORKS_THRESHOLD = 5;

export default ({ repo }: { repo: { path: string, status: string } }) => {
  const [repoData, setRepoData] = useState<RepoData>();

  useEffect(() => {
    const apiUrl = `https://api.github.com/repos/${repo.path}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setRepoData(data));
  }, [repo]);

  if (!repoData) return null;

  return (
    <a
      className="border flex flex-col gap-2 justify-center hover:bg-secondary/80 items-center p-4 rounded-lg text-sm text-primary hover:no-underline no-underline transition-colors duration-300 shadow-md"
      href={repoData.html_url}
      target="_blank"
    >
      <SiGithub size={24} />
      <div className="flex flex-col gap-2 items-center">
        <span className="font-bold">
          {repoData.owner.login} / {repoData.name}
        </span>
        <span className="text-foreground/80">
          View on GitHub
        </span>
      </div>
      {repoData.stargazers_count > STARS_THRESHOLD || repoData.forks_count > FORKS_THRESHOLD && (
        <div className="flex gap-4 items-center text-foreground/60">
          {repoData.stargazers_count > STARS_THRESHOLD && (
            <span className="flex gap-1 items-center">
              <Star size={16} />
              {repoData.stargazers_count}
            </span>
          )}
          {repoData.forks_count > FORKS_THRESHOLD && (
            <span className="flex gap-1 items-center">
              <GitFork size={16} />
              {repoData.forks_count}
            </span>
          )}
        </div>
      )}
    </a>
  )
}
