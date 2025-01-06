import { zodResolver } from '@hookform/resolvers/zod'
import { DialogClose } from '@radix-ui/react-dialog'
import { useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { getManagedRestaurant } from '@/api/get-manage-restaurant'
import { updateProfile } from '@/api/update-profile'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { Button } from './button'
import { Input } from './input'
import { Label } from './label'
import { Textarea } from './textarea'

const storageProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
})

type StorageProfileSchame = z.infer<typeof storageProfileSchema>

export const StoreProfileContent = () => {
  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
    staleTime: Infinity,
  })
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StorageProfileSchame>({
    resolver: zodResolver(storageProfileSchema),
    values: {
      name: managedRestaurant?.name ?? '',
      description: managedRestaurant?.description ?? '',
    },
  })
  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
  })
  async function handleUpdateProfile(data: StorageProfileSchame) {
    try {
      await updateProfileFn({ name: data.name, description: data.description })
      toast.success('Your store`s profile was updated sucessfully')
    } catch {
      toast.error('Something went wrong while updating')
    }
  }
  return (
    <DialogContent>
      xz
      <DialogHeader>
        <DialogTitle>Store profile</DialogTitle>
        <DialogDescription>Update your store&apos;s details</DialogDescription>
      </DialogHeader>
      <form action="" onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="flex flex-col gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Name
            </Label>
            <Input className="col-span-3" id="name" {...register('name')} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Description
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              {...register('description')}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" variant="sucess" disabled={isSubmitting}>
            Save
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
