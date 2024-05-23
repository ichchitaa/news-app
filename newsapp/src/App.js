import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from "react";
import db from "./firebase";
import { onSnapshot, collection } from 'firebase/firestore';

export default function App() {
  const [articles, setArticles] = useState([]);
  useEffect(
    () => 
    onSnapshot(collection(db, "articles"), (snapshot) => 
      setArticles(snapshot.docs.map((doc) => doc.data()))
    ),
    []
  );

  console.log("articles");
  console.log(articles);

  return (
    <div className="App">
      <h1>News Articles</h1>
      <ul>
        {articles.map((article) => (<li key={article.value}>
          <a href={article.link}>{article.link}</a>
          </li>))}
      </ul>
    </div>
  );
}
