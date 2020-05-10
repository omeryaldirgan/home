import React from 'react'
import styles from "./styles/content.module.scss"
const Content=(props)=>{
    const data=props.markdownRemark.frontmatter;
  return(
      <article className={styles.Content}>
          <h1 className="color-text">{data.title}</h1>
          <div className={styles.html} dangerouslySetInnerHTML={{__html:props.markdownRemark.html}}/>
          <div>
              <span>{data.date}</span>
              {` `}
              <span className={styles.point}>•</span>  
              {` `} 
              <span>{data.tags}</span> 
            </div>
      </article>
  )
}

export default Content;