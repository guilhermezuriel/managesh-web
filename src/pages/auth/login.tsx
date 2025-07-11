import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { login } from '@/api/login'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const subscribeForm = z.object({
  email: z.string().email(),
})

type SubscribeForm = z.infer<typeof subscribeForm>

export const Login = () => {
  const [searchParams] = useSearchParams()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SubscribeForm>({
    defaultValues: {
      email: searchParams.get('email') ?? 'manager@email.com',
    },
  })
  const { mutateAsync: authenticate } = useMutation({
    mutationFn: login,
  })
  async function handleLogin(data: SubscribeForm) {
    try {
      const request = await authenticate({ email: data.email })
      toast.success('Redirecting to authentication...')
      window.location.replace(request.authLink)
    } catch {
      toast.error('Invalid Credentials')
    }
  }
  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button
          asChild
          variant="ghost"
          className="absolute right-8 top-8 bg-zinc-800"
        >
          <Link to="/subscribe">New store</Link>
        </Button>
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
              Login
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
