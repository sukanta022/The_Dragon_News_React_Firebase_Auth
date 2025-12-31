import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";


const CategoryNews = () => {
    
    const obj = useParams()
    const {id} = obj
    const news = useLoaderData()
    const [categoryNews, setCategoryNews] = useState([])
    useEffect(() => {
        if(id == "0"){
            setCategoryNews(news);
            return;
        }
        else if(id == "1"){
             const filteredNews = news.filter((data) => data.others.is_today_pick == true)
             setCategoryNews(filteredNews)
             return
        }
        else{
            const filteredNews = news.filter((data) => data.category_id == id)
            setCategoryNews(filteredNews)
            return;
        }
        
    },[news, id])
    return (
        <div>
            <p className="font-bold text-xl mb-5">Total {categoryNews.length} found</p>
            {
                categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
            } 
            
        </div>
    );
};

export default CategoryNews;