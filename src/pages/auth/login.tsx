import { Helmet } from 'react-helmet-async'

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

        <form className="flex flex-col"></form>
      </div>
    </div>
  )
}
