import React from 'react'
import styles from "./styles/profile.module.scss"
import Img from 'gatsby-image'
const Profile=({profileTitle,profileImg})=>{
  return(
      <div className={styles.profile}>
           <Img className={styles.img} fluid={profileImg}/>
           <span className={`display ${styles.span}`}>{profileTitle}</span>
      </div>
  )
}

export default Profile;