import logo from './logo.svg';
import './App.css';
import Image from './image.jpg';
import {useState} from 'react';
import Navbar from './components/Navbar';
import PostList from './posts/PostList';
import Modal from './modal/Index';
import PostCreateForm from './posts/PostCreateForm';

function App() {
  
  let changeName = () => {
    
    // console.log(name);
  };
  

  
  let [people, setPerson] = useState([
    {id:1, name:'Aung Htwe Maung', age:22},
    {id:2, name:'Mg Mg', age:23},
    {id:3, name:'Ko Ko', age:24}
  ]);
  

  let [modal, setModal] = useState(false);


  let [posts, setPosts] = useState([
    {id: 1, name : 'First Post', plan: 'Ongoing'},
    {id: 2, name : 'Second Post', plan: 'Upcoming'},
  ])

    let addPost = (post) => {
      setPosts(prevState => [...posts, post]);
      setModal(false);
    }
  

  return (
    <>
      <Navbar setModal={setModal} />
      <PostList people={posts} data="This is other data."/>
      { modal && <Modal danger={true} setModal={setModal}>
        <PostCreateForm addPost={addPost} />
      </Modal> }
    </>
  );
}

export default App;
