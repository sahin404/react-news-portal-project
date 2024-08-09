import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const NewsCards = () => {
    const [news, setNews] = useState([]);
    useEffect(()=>{
        fetch('news.json')
        .then(res=>res.json())
        .then(data=>setNews(data));
    },[])
    return (
        <div>
            {
                news.map((aNews,idx)=><NewsCard
                key={idx}
                aNews={aNews}
                ></NewsCard>)
            }
        </div>
    );
};

export default NewsCards;