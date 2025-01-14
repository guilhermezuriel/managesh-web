import React from 'react'

import { Skeleton } from '@/components/ui/skeleton'

export const MetricSkeletonCard = () => {
  return (
    <div>
      <Skeleton className="mt-1 h-7 w-36" />
      <Skeleton className="mt-1 h-4 w-52" />
    </div>
  )
}
