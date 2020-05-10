import React from 'react'
import { Link} from "gatsby"
import styles from "./styles/post.module.scss"
const Posts=({title,date,slug,tags})=>{
  return(
      <article className={styles.Post}>
          <h3 className="color-text"><Link to={slug}>{title}</Link></h3>
          <div>
              <span>{date}</span>
              {` `}
              <span className={styles.point}>•</span>  
              {` `} 
              <span>{tags}</span> 
            </div>
      </article>
  )
}

export default Posts;