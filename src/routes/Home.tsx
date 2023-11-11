import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

const createUserFormSchema = z.object({
  userName: z.string().min(1, 'Informe o nome do usuário'),
})

type CreateUserFormSchema = z.infer<typeof createUserFormSchema>;

const Home = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateUserFormSchema>({
    resolver: zodResolver(createUserFormSchema),
  });

  const navigate = useNavigate();

  function getUserData(data: any) {
    navigate(`/info/${data.userName}`);
  }

  return (
    <form className='w-80 my-0 mx-auto' onSubmit={handleSubmit(getUserData)}>
      <div className='flex flex-col w-80 mb-3'>
        <label className='mb-2 font-bold' htmlFor="">Nome do usuário:</label>
        <input
          className='bg-zinc-800 rounded-md p-2 focus:outline-none'
          type="text"
          placeholder="Digite o usuário..."
          {...register('userName')}
        />
        {errors.userName && <span className='text-red-400'>{errors.userName.message}</span>}
      </div>
      <input
        className='w-full mt-2 bg-green-400 rounded-md p-2' type="submit" value="Buscar"
      />
    </form>
  )
}

export default Home