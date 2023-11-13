import styles from './Download.module.scss'


const Download = () => {
  return (
    <section className={styles.download}>
        <div className={styles.text}>  
            <h2 className={`big-text ${styles.futere_title}`}>Do you want to take part in the closed beta testing of the Solaris MetaVerse? </h2>
            <a
            >
                FILL IN THE FORM
            </a>
          <p>
          Please download PDF
          </p>
        </div>
    </section>
  );
}

export default Download;