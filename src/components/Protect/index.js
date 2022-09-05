import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Protect({ children }) {
  const router = useRouter();
  const user = useSelector((state) => state.user);

  // useEffect(() => {
  //   if (!user.username || !user.name) {
  //     router.push('/login');
  //   }
  // }, [router, user]);

  return <>{children}</>;
}

export default Protect;
