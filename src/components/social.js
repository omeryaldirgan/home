import React from 'react';
import styles from './styles/social.module.scss'
const Social=({ urls = [] })=> {
    return (
      <div className={styles.Social}>
        {urls.map((link, i) => (
            <div key={i.toString()} >
               <a   
                    key={i.toString()}  
                    className={styles.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    href={link.url}
                >
                {
                  link.description
                }
                {' '}
                <span>{link.name}</span>
                </a>
            </div>
        ))}
      </div>
    )
  }
  
export default Social;