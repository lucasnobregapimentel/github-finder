import { useParams } from "react-router-dom"
import { UserProps } from "../types/user";
import axios from "axios";
import { useEffect, useState } from "react";
import User from "../components/User";

const api = axios.create({
  baseURL: 'https://api.github.com',
})

const UserPage = () => {
  const { username } = useParams();

  const [data, setData] = useState<UserProps | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    api.get(`users/${username}`)
      .then(response => setData(response.data))
      .finally(() => setIsFetching(false));
  }, [])

  return (
    <div>
      {isFetching && <p className="text-center">Carregando...</p>}
      {data && <User
        login={data.login}
        avatar_url={data.avatar_url}
        name={data.name}
        following={data.following}
        followers={data.followers}
        html_url={data.html_url}
        bio={data.bio}
        location={data.location}
        company={data.company}
      />}
    </div>
  )
}

export default UserPage