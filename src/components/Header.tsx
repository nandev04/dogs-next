import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';

export default async function Header() {
	const user = true;

	return (
		<header className={styles.header}>
			<nav className={`${styles.nav} container`}>
				<Link className={styles.logo} href={'/'}>
					<Image
						src={'/assets/dogs.svg'}
						alt="Logo do site"
						width={28}
						height={22}
						priority
					/>
				</Link>
				{user ? (
					<Link className={styles.login} href={'/conta'}>
						dogs
					</Link>
				) : (
					<Link className={styles.login} href={'/login'}>
						Login / Criar
					</Link>
				)}
			</nav>
		</header>
	);
}
