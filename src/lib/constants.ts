import dashboardIcon from '@/assets/icons/dashboard.png'
import transactionsIcon from '@/assets/icons/transactions.png'
import logoutIcon from '@/assets/icons/logout.png'
import downArrowIcon from '@/assets/icons/downarrow.png'
import bixLogo from '@/assets/brand/bixlogo.png'
import profilePhoto from '@/assets/images/profile.jpg'

export { dashboardIcon, transactionsIcon, bixLogo, logoutIcon, profilePhoto, downArrowIcon }

export const sidebarOptions = [
  {
    title: 'Dashboard',
    route: '/dashboard/home',
    icon: dashboardIcon
  },

  {
    title: 'Transactions',
    route: '/dashboard/transactions',
    icon: transactionsIcon
  },
]

export const user = {
  name: 'Admin',
  email: 'admin@admin.com',
  photoUrl: profilePhoto
}