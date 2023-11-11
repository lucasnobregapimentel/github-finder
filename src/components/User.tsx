import { UserProps } from "../types/user"
import { useNavigate } from "react-router-dom"

const User = ({ login, avatar_url, name, following, followers, html_url, bio, location, company }: UserProps) => {

  const navigate = useNavigate();

  return (
    <div className="lg:flex justify-center items-center gap-4 h-96">
      <div className="bg-zinc-800 p-6 rounded-lg shadow-xl w-80 mb-4 lg:mb-0 relative my-0 mx-auto h-full lg:mx-0">
        <div className="absolute top-6 right-6">
          <a href={html_url} target="_blank">
            <i className="fa-brands fa-github duration-150 hover:scale-125"></i>
          </a>
        </div>
        <div className="flex flex-col justify-center items-center mb-3">
          <img className="w-40 rounded-full border-4 border-green-400 mb-3" src={avatar_url} alt="Foto de perfil" />
          <h2 className="text-2xl">{name}</h2>
          <p className="text-lg text-zinc-600">{login}</p>
        </div>
        <div className="flex gap-8 justify-center items-center">
          <div className="flex justify-center items-center gap-2 border border-green-400 rounded-md p-2">
            <span>Seguidores:</span>
            <span>{followers}</span>
          </div>
          <div className="flex justify-center items-center gap-2 border border-green-400 rounded-md p-2">
            <span>Seguindo:</span>
            <span>{following}</span>
          </div>
        </div>
      </div>
      <div className="bg-zinc-800 p-6 rounded-lg shadow-xl w-80 my-0 mx-auto h-full lg:mx-0">
        <h2 className="text-2xl text-center mb-4">Mais informações:</h2>
        <div className="flex justify-center items-center gap-3 border border-zinc-800 border-b-zinc-900 pb-2 mb-2">
          <i className="fa-solid fa-location-dot text-green-400"></i>
          {location ? location : 'Não especificado'}
        </div>
        <div className="flex justify-center items-center gap-3 border border-zinc-800 border-b-zinc-900 pb-2 mb-2">
          <i className="fa-solid fa-building text-green-400"></i>
          {company ? company : 'Não especificado'}
        </div>
        <div className="flex justify-center items-center gap-3 border border-zinc-800 border-b-zinc-900 pb-2 mb-2">
          <i className="fa-solid fa-user text-green-400"></i>
          {bio ? bio : 'Não especificado'}
        </div>
        <div className="flex justify-center items-center mt-7">
          <button
            className="bg-green-400 p-4 rounded-xl"
            onClick={() => navigate(`/info/${login}/repos`)}>
            Ver Repositórios
          </button>
        </div>
      </div>
    </div>
  )
}

export default User