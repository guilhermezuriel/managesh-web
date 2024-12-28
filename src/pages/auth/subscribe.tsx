import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const subscribeForm = z.object({
  storeName: z.string().min(1),
  managerName: z.string().min(1),
  email: z.string().email(),
  phone: z.string(),
})

type SubscribeForm = z.infer<typeof subscribeForm>

export const Subscribe = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SubscribeForm>()
  async function handleSubscribe(data: SubscribeForm) {
    console.log(data)
    try {
      toast.success('It was send to your email a link to authenticate')
    } catch {
      toast.error('Invalid Credentials')
    }
  }
  return (
    <div>
      <Helmet title="Subscribe" />
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create a free account
          </h1>
          <p className="text-sm text-muted-foreground">
            Subscripe your store !
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(handleSubscribe)}>
          <div className="space-y-2">
            <Label htmlFor="storeName">Your store name</Label>
            <Input id="storeName" type="text" {...register('storeName')} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="managerName">Your name</Label>
            <Input id="managerName" type="text" {...register('managerName')} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Your email</Label>
            <Input id="email" type="email" {...register('email')} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Your phone</Label>
            <Input id="phone" type="text" {...register('phone')} />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <span>
              Agreed with{' '}
              <u>
                <a href="">terms</a>
              </u>{' '}
              and{' '}
              <u>
                <a href="">privacy</a>
              </u>
            </span>
          </div>
          <Button disabled={isSubmitting} className="w-full">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  )
}
