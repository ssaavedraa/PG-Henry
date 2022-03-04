
import styles from './btnGoogle.module.css'

export const BtnGoogle = () => {
    return (
        <>

            <div className={styles.btnButtonGoogle}>
                <div className={styles.googleIcon}>
                    <img className="googleButton" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                </div>
                <p className={styles.btnText}>
                        <b>Sign in with google</b>
                    </p>
            </div>
        </>
    )
}
