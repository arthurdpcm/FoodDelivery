import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bakeryImage from '/bakery.jpeg';
import { useUserContext } from '../contexts/UserContext';

interface loginProps {
  login:boolean
}

const Login: React.FC<loginProps> = ({login}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const {user, setUser} = useUserContext()
  const navigate = useNavigate();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser(user)
    navigate('/');
  };

  return (
    
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center w-full ">
        {/* Renderiza a imagem apenas para telas maiores que 'sm' */}
        <div className="hidden sm:block w-full bg-blue-900">
          <img src={bakeryImage} alt="Bakery" className="object-cover w-full h-screen opacity-40" />
        </div>

        <div className="w-full p-8 flex flex-col justify-center items-center">
          {login ? (
            <>
            
              <h1 className='text-4xl font-semibold '>
                Log in 
              </h1>
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col space-y-4">
              <div className='flex gap-2 items-center'>
                  <label className="p">
                    Username:
                  </label>
                    <input
                      type="text"
                      value={username}
                      onChange={handleUsernameChange}
                      className="p-2 border border-gray-300"
                    />
              </div>
              <div className='flex gap-2 items-center'>

                <label className="">
                  Password:
                </label>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="p-2 border border-gray-300"
                  />
              </div>
              <input
                type="submit"
                value="Log In"
                className="mt-5 p-2 bg-blue-500 text-white cursor-pointer hover:bg-blue-600 rounded-md"
              />
            </form>
            </>
          ):(
            <>            
                <h1 className='text-4xl font-semibold '>
                  Sign Up 
                </h1>
                <form onSubmit={handleSubmit} className="mt-8 flex flex-col space-y-4">
                  <div className='flex flex-col  gap-1  items-center'>
                      <label className="mr-auto">
                        Username:
                      </label>
                        <input
                          type="text"
                          value={username}
                          onChange={handleUsernameChange}
                          className="p-2 border border-gray-300"
                        />
                  </div>
                  <div className='flex flex-col gap-1 items-center'>
                      <label className="mr-auto">
                        Email:
                      </label>
                        <input
                          type="text"
                          value={email}
                          onChange={handleEmailChange}
                          className="p-2 border border-gray-300"
                        />
                  </div>
                  <div className='flex flex-col  gap-1 items-center'>
                    <label className="mr-auto">
                      Password:
                    </label>
                      <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="p-2 border border-gray-300"
                      />

                  </div>
                  <div className='flex flex-col  gap-1 items-center'>                  
                    <label className="mr-auto">
                        Confirm Password:
                    </label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      className="p-2 border border-gray-300"
                    />
                    <input
                      type="submit"
                      value="Sign Up"
                      className="mt-5 p-2 w-full bg-blue-500 text-white cursor-pointer hover:bg-blue-600 rounded-md"
                    />
                  </div>
                </form>
            </>

          )}
          <a href={login ? "/SignUp" : "/Login"} className='mt-3 text-lg'>{login ? "Create your account!" : "Already have an account? Login here!"}</a>

        </div>
      </div>
    </div>
  );
};

export default Login;
