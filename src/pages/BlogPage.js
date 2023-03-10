import React from "react";
import Card from "../components/Card";
import SmallCard from "../components/SmallCard";
import { useDetailsContextConsumer } from "../Context/detailsContext";
const BlogPage = ({category}) => {
  const {details} = useDetailsContextConsumer();
  const arrInd = ()=>{ return Math.floor(Math.random() * 50)};
  const topposts = [details[arrInd()], details[arrInd()], details[arrInd()], details[arrInd()]] 

  return (
    <div className="category_page bollywood_container">
      <div className="column_main">
        <h1 className="title head-title">{category}</h1>
        {details
          .filter((article) => {
            return article.category === category;
          })
          .map((n) => (
            <Card
              key={n.id}
              articleid={n.id}
              imgUrl={n.Image}
              title={n.title}
              description={n.description.slice(0, 200)}
            />
          ))}
      </div>
      <div className="sub_column">
        <h1 className="side_title title">Top Posts</h1>
        {topposts
          .map((n) => (
            <SmallCard
              key={n.id}
              articleid={n.id}
              imgUrl={n.Image}
              title={n.title.slice(0, 25)}
              category={n.category}
              date={n.date}
              description={n.description}
            />
          ))}
          <div className="advertisements"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHPyDxdPt7KH2qRKUESov5zGDZPD4YnEkml6MQrK_7CVQsqP_ISN5TioBcL87cSxog4us&usqp=CAU" alt="ads"/>
          <h4>Advertisements</h4>
          </div>
      </div>
    </div>
  );
};

export default BlogPage;