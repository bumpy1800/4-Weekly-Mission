import logoImg from '@public/logo.svg';
import { useCallback, useEffect, useState } from 'react';
import { getUser } from '@/services/api';
import style from '@/styles/Header.module.css';
import useAsync from '@/hooks/useAsync';
import Image from 'next/image';
import Link from 'next/link';
interface userInfo {
  name: string;
  email: string;
  image_source: string;
}

function Header() {
  const [userInfo, setUserInfo] = useState<userInfo>({
    name: '',
    email: '',
    image_source: '',
  });
  const asyncGetUser = useAsync(getUser);
  //const { pathname } = useLocation();
  const pathname = '/folder';

  const apiGetUser = useCallback(async () => {
    const { data } = await asyncGetUser();
    if (!data) return;
    const { name, email, image_source } = data[0];
    setUserInfo({ name, email, image_source });
  }, [asyncGetUser]);

  useEffect(() => {
    apiGetUser();
  }, [apiGetUser]);

  return (
    <nav id={style.header} style={pathname === '/folder' ? { position: 'static' } : {}}>
      <div className={style.headerBox}>
        <div className={style.headerLogoBox}>
          <Link href="/">
            <Image width={133} height={24} src={logoImg} alt="logo" />
          </Link>
        </div>
        <div className={style.loginBox}>
          {Object.keys(userInfo).length ? (
            <div className={style.userInfoBox}>
              <Image width={28} height={28} className={style.userImg} src={userInfo?.image_source} alt="user-img" />
              <div className={style.userEmail}>{userInfo?.email}</div>
            </div>
          ) : (
            <Link href="/signin">
              <div className={style.loginBtn}>로그인</div>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
