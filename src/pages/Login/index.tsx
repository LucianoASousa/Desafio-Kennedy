import { useAuth } from "../../hooks/contexts";
import { Input, Button, Label } from "../../components/DesignSystem";
import * as yup from 'yup';
import { useEffect, useState } from "react";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Login(){
  const { login, error} = useAuth();
  const [errorLogin, setErrorLogin] = useState(error);

  useEffect(() => {
      setErrorLogin(error);
  }, [error]);


  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    
    try{
      schema.validateSync({email, password});
      login({email, password});
    }catch(err){
      const { errors } = err as yup.ValidationError;
      setErrorLogin(errors);
    }
  }
  
  return (
    <main className="flex items-center justify-between h-screen w-screen bg-white text-zinc-950">
      <section className="flex items-center justify-center h-full w-full p-4">
        <div className="flex flex-col items-start justify-center gap-32 h-full break-words p-4">
          <div>
            <h1 className="text-4xl font-bold">FEMAQUA</h1>
            <h3 className="text-2xl font-bold">Ferramentas Maravilhosas que Adoro</h3>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col items-end justify-center gap-3 w-full">
            <div className="flex flex-col items-end justify-center gap-3 w-full">
              <div className="flex flex-col w-full">
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" error={errorLogin}/>
              </div>
              <div className="flex flex-col w-full">
                <Label htmlFor="password" error={error}>Password</Label>
                <Input type="password" name="password" error={errorLogin}/>
              </div>
              <Button type="submit" styles='neutral'>Entrar</Button>
            </div>
          </form>
        </div>
      </section>
      <section className="w-2/4 h-full sm:hidden bg-blue">
      </section>
    </main>
  );
}