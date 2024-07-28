
import { useGetNewArticleQuery } from "../api/newsSlice";
import {Link} from "react-router-dom";
const Home = () => {
    
    const {data, isLoading, isError} = useGetNewArticleQuery({
          
            articleBodyLen: -1,
            includeArticleConcepts: true,
            includeArticleCategories: true,
            recentActivityArticlesMaxArticleCount:10

    })

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading data</div>;
    }

    console.log(data);



    return (
        
     <ul className="flex min-h-screen pt-10 dark:bg-gray-800 flex-wrap gap-4 content-center justify-center items-center px-10 md:px-20 ">
        {data?.recentActivityArticles?.activity?.map((item, index)=> {
            return (
                <li className="dark:text-slate-100 w-52 h-60 bg-white rounded-lg shadow dark:bg-gray-800 dark:hover:bg-gray-700 " key={`${index}-${item.title}`}> 
                <Link to={`/details/${item.uri}`}>
                <h1>
                  {item.title}
                </h1>
                </Link>

                <Link to={`/details/${item.uri}`}>
                  <img src={item.image} alt="" />
                </Link>
                </li>
            )
        })}
     </ul> 
    )
}

export default Home;

//<img src={data.recentActivityArticles.activity[0].image} alt="" />

