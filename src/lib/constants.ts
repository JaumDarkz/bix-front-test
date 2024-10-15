import dashboardIcon from "@/assets/icons/dashboard.png";
import transactionsIcon from "@/assets/icons/transactions.png";
import logoutIcon from "@/assets/icons/logout.png";
import downArrowIcon from "@/assets/icons/downarrow.png";
import bixLogo from "@/assets/brand/bixlogo.png";
import profilePhoto from "@/assets/images/profile.jpg";
import balanceIcon from "@/assets/icons/balance.svg";
import incomeIcon from "@/assets/icons/income.svg";
import overviewIcon from "@/assets/icons/overview.svg";
import expenseIcon from "@/assets/icons/expense.svg";
import filterIcon from '@/assets/icons/filter.png'
import transactionsData from "@/lib/data/transactions.json";

export {
  dashboardIcon,
  transactionsIcon,
  bixLogo,
  logoutIcon,
  profilePhoto,
  downArrowIcon,
  balanceIcon,
  expenseIcon,
  incomeIcon,
  overviewIcon,
  transactionsData,
  filterIcon 
};

export const sidebarOptions = [
  {
    title: "Dashboard",
    route: "/dashboard/home",
    icon: dashboardIcon,
  },

  {
    title: "Transactions",
    route: "/dashboard/transactions",
    icon: transactionsIcon,
  },
];

export const user = {
  name: "Admin",
  email: "admin@admin.com",
  photoUrl: profilePhoto,
};
