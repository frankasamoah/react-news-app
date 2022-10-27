import NewsItem from "./NewsItem"

const NewsList = ({newsPosts}) => {

  // if(loading) {
  //   return (
  //     <h4>Loading...</h4>
  //   )
  // }
  return <>
    {newsPosts.articles.map((item, i) => (<NewsItem key={i} newsPosts={newsPosts} />))}

</>
};

export default NewsList;
