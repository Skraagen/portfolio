import styles from '../styles/front.module.css'

export default function Footer(){
    return (
        <footer>
          <div className={styles.container}>
            <p>&copy; Copyright {(new Date().getFullYear())}</p>
          </div>
        </footer>
    )
}
