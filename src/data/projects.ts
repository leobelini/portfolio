import matter from 'gray-matter';

type Project = {
  name: string;
  url: string;
  stars: number;
  forks: number;
  content: string;
  data: {
    title: string;
  };
};

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch(
    'https://api.github.com/search/code?q=filename:project.md+user:leobelini',
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Erro ao buscar projetos: ${response.statusText}`);
  }

  const data = await response.json();

  const projects = await Promise.all(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data.items.map(async (item: any) => {
      const repoFull = item.repository.full_name;

      // dados do repo
      const repoRes = await fetch(`https://api.github.com/repos/${repoFull}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
        },
      });

      const repo = await repoRes.json();

      // conteúdo do project.md
      const rawUrl = `https://raw.githubusercontent.com/${repoFull}/${repo.default_branch}/project.md`;

      const content = await fetch(rawUrl).then((r) => r.text());

      const { data, content: markdownContent } = matter(content);

      return {
        name: repo.name,
        url: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        data,
        content: markdownContent,
      };
    }),
  );

  return projects.sort((a, b) => b.stars - a.stars).slice(0, 6);
};
