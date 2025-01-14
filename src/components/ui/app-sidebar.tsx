import { useQuery } from '@tanstack/react-query'
import { ClipboardPenLine, Coffee, Home } from 'lucide-react'

import { getManagedRestaurant } from '@/api/get-manage-restaurant'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

import { ThemeToggle } from '../theme/theme-toggle'
import { AccountMenu } from './account-menu'
import { NavLink } from './nav-link'
import { Skeleton } from './skeleton'

// Menu items.
const items = [
  {
    title: 'Dashboard',
    url: '/',
    icon: Home,
  },
  {
    title: 'Orders',
    url: '/orders',
    icon: ClipboardPenLine,
  },
]

export function AppSidebar() {
  const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant } =
    useQuery({
      queryKey: ['managed-restaurant'],
      queryFn: getManagedRestaurant,
      staleTime: Infinity,
    })
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex flex-row items-center gap-3 p-2">
          <Coffee className="h-6 w-6 rounded bg-white text-black dark:bg-black dark:text-white" />
          <div className="flex flex-col gap-0">
            <p className="text-sm font-semibold">Managesh</p>
            {isLoadingManagedRestaurant ? (
              <Skeleton className="h-4 w-40" />
            ) : (
              <span className="text-xs text-muted-foreground">
                {managedRestaurant?.name}
              </span>
            )}
          </div>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground">
            Platform
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="rounded p-1 hover:bg-accent hover:text-accent-foreground"
                >
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <AccountMenu />
      </SidebarFooter>
    </Sidebar>
  )
}
