// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Hello from './Hello';
import Length from './Length';
import Range from './Range';
import Form from './Form';
import Posts from './posts/Posts';

let posts = [
  {id:'1', title:'C++ proc', content:'Процедурное программирование на языке С++'},
  {id:'2', title:'C++ OOP', content:'Объектно-ориентированное на языке С++'},
  {id:'3', title:'Windows Desktop Development', content:'Разработка настольных приложений для операционной системы Windows'},
];

function removePost(id) {
  alert(posts[id]);
  posts = posts.filter(post => post.id !== id);
}

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Hello />
      <Length />
      <Range />
      <Form /> */}
      <Posts posts={posts} removePost = {removePost}/>
    </div>
  );
}

export default App;