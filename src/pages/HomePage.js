import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import SmallCard from "../components/SmallCard";
import CardHome from "../components/CardHome";
import {useDetailsContextConsumer} from '../Context/detailsContext';

const HomePage = () => {
  const {details} = useDetailsContextConsumer();
  const arrInd = ()=>{ return Math.floor(Math.random() * 50)};
  const latest = [details[arrInd()], details[arrInd()], details[arrInd()]]
  const latest2 = [details[arrInd()], details[arrInd()], details[arrInd()]]
  const latestarticles = [details[arrInd()], details[arrInd()], details[arrInd()], details[arrInd()], details[arrInd()]]
  const topposts = [details[arrInd()], details[arrInd()], details[arrInd()], details[arrInd()]] 

  return (
    <div className="home_container">
      <div className="banner-image">
       
          <Link className="main-image link" to="/bollywood">
            <h1>RRR collected Rs 500CR  within 3 days Worldwide</h1>
          </Link>
       
        <div className="sub-images">
          <Link to="/technology">
            <img
              src="https://as1.ftcdn.net/v2/jpg/04/89/67/78/500_F_489677878_D2LFR1yC0hS6DepUAkfyymxdTvhdCA6S.jpg"
              alt="sub-img"
            />
          </Link>

          <Link to="/fitness">
            <img
              src="https://sportforlife.ca/wp-content/uploads//2019/05/PISE-Agility-Ladder-500x320.jpg"
              alt="sub-img"
            />
          </Link>
        </div>
      </div>
      <div className="latest_news">
        <h1 className="title">The Latest</h1>
        <div className="row_container">
            { latest
              .map((n) => (
                <CardHome 
                  key={n.id}
                  articleid={n.id}
                  imgUrl={n.Image}
                  title={n.title}
                  description={n.description.slice(0, 200)}
                  author={n.author}
                  category={n.category}
                  date={n.date}
                />
              ))}

        </div>
      </div>
      <div className="category_page">
        <div className="column_main">
          <h1 className="title head-title">Latest Article</h1>
          { latestarticles
            .map((n) => (
              <Card
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
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
      <div className="latest_news">
        <h1 className="title">The Latest</h1>
        <div className="row_container">
          
            {latest2
              .map((n) => (
                <CardHome 
                  key={n.id}
                  articleid={n.id}
                  imgUrl={n.Image}
                  title={n.title}
                  description={n.description.slice(0, 200)}
                  date={n.date}
                  category={n.category}
                />
              ))}
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;