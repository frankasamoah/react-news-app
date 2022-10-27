const NewsList = ({newsPosts}) => {

  // if(loading) {
  //   return (
  //     <h4>Loading...</h4>
  //   )
  // }
  return <>
    {newsPosts.articles.map((item) => (<h5 key={item.id}>{item.author}</h5>))}
  </>;
};

export default NewsList;
