import React from 'react';
import styles from './styles/footer.module.scss'
const Footer=()=>{
        return(
            <footer className={styles.Footer}>
               <div className={` container ${styles.container}`}>
                <div>
                    <p>©{new Date().getFullYear()}
                    {` `}
                    Beşiktaş JK <span className={styles.span}>❤</span>
                    </p>
                </div>
               </div>
           </footer>
        )
}

export default Footer;