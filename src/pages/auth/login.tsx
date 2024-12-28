import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const loginForm = z.object({
  email: z.string().email(),
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
    try {
      toast.success('It was send to your email a link to authenticate')
    } catch {
      toast.error('Invalid Credentials')
    }
  }
  return (
    <div>
      <Helmet title="Login" />
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acess dashboard
          </h1>
          <p className="text-sm text-muted-foreground">Track your sales!</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
          <div className="space-y-2">
            <Label htmlFor="email">email:</Label>
            <Input id="email" type="email" {...register('email')} />
          </div>
          <Button disabled={isSubmitting} className="w-full">
            Acessar
          </Button>
        </form>
      </div>
    </div>
  )
}
