import React, { useRef, useState } from 'react'

export default function PostCreateForm({addPost}) {

  let [name, setName] = useState('');


  // let name = useRef();
  let [plan, setPlan] = useState('upcoming');

  let resetForm = () => {
    setName('')
  }

  let upload_post = (e) => {
      e.preventDefault();
      // console.log(name.current.value);
      // console.log(name);
      let post = {
        id : Math.floor(Math.random() * 10000),
        name : name,
        plan : plan
      }
      addPost(post);
      resetForm();
    
    }


  return (
    <div className='post-create-form'>
        <h3>{name} {plan}</h3>
        <form onSubmit={upload_post}>
            <div className='form-group' style={{marginBottom: '20px'}}>
              <label style={{marginRight: '20px'}}>Name</label>
              <input onChange={e => setName(e.target.value)} type='text' placeholder='enter name' style={{padding: '20px'}} />
            </div>
            <div className='form-group' style={{marginBottom: '20px'}}>
              <label style={{marginRight: '20px'}}>Plan</label>
              <select value={plan} onChange={(e) => setPlan(e.target.value)}>
                <option value="dropped">Dropped</option>
                <option value="ongoing">Ongoing</option>
                <option value="upcoming">Upcoming</option>
              </select>
            </div>
            <button type='submit'>Save Post</button>

        </form>
    </div>
  )
}
