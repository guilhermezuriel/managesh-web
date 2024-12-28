import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const loginForm = z.object({
  email: z.string().email(),
  password: z.string(),
})

type LoginForm = z.infer<typeof loginForm>

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginForm>()
  async function handleLogin(data: LoginForm) {
    console.log(data)
  }
  return (
    <div>
      <Helmet title="Login" />
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar painel
          </h1>
          <p className="text-sm text-muted-foreground">Acompanhe suas vendas</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
          <div className="space-y-2">
            <Label htmlFor="email">email:</Label>
            <Input id="email" type="email" {...register('email')} />
          </div>
          <div className="mb-5">
            <Label htmlFor="password">senha:</Label>
            <Input id="password" type="password" {...register('password')} />
          </div>
          <Button disabled={isSubmitting} className="w-full">
            Acessar
          </Button>
        </form>
      </div>
    </div>
  )
}
