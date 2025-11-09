import GuestHeader from '@/app/components/GuestHeader';
import UserHeader from '@/app/components/UserHeader';

interface HeaderProps {
  isAuthenticated: boolean;
}

export default function Header({ isAuthenticated = true }: HeaderProps) {
  return isAuthenticated ? <UserHeader /> : <GuestHeader />;
}
