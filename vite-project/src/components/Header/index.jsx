import IgniteLogo from '../../assets/logo.svg'

import styles from './Header.module.css'

export function Header() {

  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="Logotipo" />
      <strong>Ignite Feed</strong>
    </header>
  )
}
