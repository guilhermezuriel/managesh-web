import { Helmet } from 'react-helmet-async'

export function Orders() {
  return (
    <>
      <Helmet title="Orders" />
      <div className="flex flex-col gap-4">
        <h1 className="tracking-light text-3xl font-bold">Orders</h1>
      </div>
    </>
  )
}
