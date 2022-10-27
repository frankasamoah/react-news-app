import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import NewsList from './components/NewsList';

function App() {
  const [newsPosts, setNewsPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const newsArticles = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=33c8f337caa347e28c5bd55d06473fe0"
      );
      setNewsPosts(res.data);
      setLoading(false);
    };

    newsArticles();
  }, []);

  console.log(newsPosts);



  return (
    <div className="App">
     <h1>TopNews</h1>
      <NewsList newsPosts={newsPosts}/>
    </div>
  );
}

export default App;
