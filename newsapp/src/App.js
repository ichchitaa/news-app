import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from "react";
import db from "./firebase";
import { onSnapshot, collection } from 'firebase/firestore';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import ListItemText from '@mui/material/ListItemText';

export default function App() {
  const [articles, setArticles] = useState([]);
  useEffect(
    () => 
    onSnapshot(collection(db, "articles"), (snapshot) => 
      setArticles(snapshot.docs.map((doc) => doc.data()))
    ),
    []
  );

  return (
    <div className="App">
      <h1>News Articles</h1>
      <List>
        {articles.map((article) => <ListItem key={article.value}>
          <Link href={article.link}>{article.link}</Link>
        </ListItem>)}
      </List>
    </div>
  );
}
