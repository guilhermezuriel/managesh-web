import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const Login = () => {
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

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">email:</Label>
            <Input id="email" type="email" />
          </div>
          <div className="mb-5">
            <Label htmlFor="password">senha:</Label>
            <Input id="password" type="password" />
          </div>
          <Button className="w-full">Acessar</Button>
        </form>
      </div>
    </div>
  )
}
