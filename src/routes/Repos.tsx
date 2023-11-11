import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RepoProps } from "../types/repo";

const api = axios.create({
  baseURL: 'https://api.github.com'
})

const Repos = () => {
  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  const { username } = useParams();

  useEffect(() => {
    setIsFetching(true);
    api.get(`users/${username}/repos`)
      .then(response => setRepos(response.data))
      .finally(() => setIsFetching(false));
  }, [])

  return (
    <div>
      <div>
        {isFetching && <p className="text-center">Carregando...</p>}
        {repos && repos.map((repo) => (
          <div key={repo.name} className="relative w-80 bg-zinc-800 mb-4 p-4 my-0 mx-auto rounded-xl">
            <div className="absolute top-4 right-4">
              <a href={repo.html_url} target="_blank"><i className="fa-brands fa-github duration-150 hover:scale-125"></i></a>
            </div>
            <h2 className="text-xl mb-2">{repo.name}</h2>
            <div className="flex justify-start items-center gap-2 mb-2">
              <i className="fa-solid fa-code"></i>
              <span>{repo.language}</span>
            </div>
            <p className="text-zinc-400 mb-2">{repo.description ? repo.description : ''}</p>
            <div className="flex justify-start items-center gap-4">
              <div className="flex justify-center items-center gap-2">
                <i className="fa-solid fa-star"></i>
                <span>{repo.stargazers_count}</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <i className="fa-solid fa-code-fork"></i>
                <span>{repo.forks_count}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Repos