import React from 'react'
import { Link} from "gatsby"
import styles from "./styles/post.module.scss"
import Img from 'gatsby-image'
import Profile from '../components/profile'
const Posts=({title,date,slug,tags,flag,body,profileTitle,profileImage,read})=>{
  return(
      <article className={styles.Post}>
          <h3 className="color-text"><Link to={slug}>{title} <Img className={styles.flag} fluid={flag}/></Link></h3>
          <div className={styles.details}>
              <Profile profileTitle={profileTitle} profileImg={profileImage}/>
              <span>{date}</span>
              {` `}
              <span className={styles.point}>•</span>  
              {` `} 
              <span>{tags}</span> 
              <span className={styles.point}>•</span>
              {` `} 
              <span>{read}</span>
            </div>
          <p className={styles.text}>{body}</p>
      </article>
  )
}

export default Posts;
