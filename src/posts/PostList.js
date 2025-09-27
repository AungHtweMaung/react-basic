import React from 'react'
import './PostList.css'
import styles from './single_post.module.css';

export default function PostList({ people, data }) {
  return (

    <div className='post-list'>
      { !!people.length && people.map((person) => <div key={person.id} className={`single-post ${styles.card}`}>
        <div>{person.name}</div>
        <div>{person.plan}</div>
      </div>)}
    </div>
  )
}
