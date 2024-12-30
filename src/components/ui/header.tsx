import { Separator } from '@radix-ui/react-separator'
import { ClipboardPenLine, Coffee, Home } from 'lucide-react'

import { ThemeToggle } from '../theme/theme-toggle'
import { AccountMenu } from './account-menu'
import { NavLink } from './nav-link'

export const Header = () => {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Coffee className="h-6 w-6" />
        <Separator orientation="vertical" className="h-6" />
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Home
          </NavLink>
          <NavLink to="/orders">
            <ClipboardPenLine className="h-4 w-4" />
            Orders
          </NavLink>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </header>
  )
}
