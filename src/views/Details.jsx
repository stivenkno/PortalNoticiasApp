import { useParams } from "react-router-dom";
import { useGetArticleDetailsQuery } from "../api/newsSlice";
import SeeDetails from "../components/SeeDetails";
import { useGetArticlesQuery } from "../api/newsSlice";
import SeeRelacionados from "../components/SeeRelacionados";

const Details = () => {
    const { articleUri } = useParams();
    console.log(articleUri);

    const {data, isLoading, isError} = useGetArticleDetailsQuery({
        articleUri,
        action: "getArticle",
        infoArticleBodyLen: -1,
        resultType: "info",
    })

    const {data: data2, isLoading: isLoading2, isError: isError2} = useGetArticlesQuery({
        action: "getArticles",
        keyword: "query",
        keywordOper: "or",
        articlesPage: 1,
        lang: "eng",
        articlesCount: 4,
        dataType: "news",
        articlesSortBy: "date",
        articlesSortByAsc: false,
        articlesIncludeDuplicates: false,
        resultType: "articles",
        forceMaxDataTimeWindow: 31,
        

    })
    
    console.log(data);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading data</div>;
    }

    

    return (
        <div className='flex flex-col justify-center dark:bg-gray-800 content-center items-center w-full min-h-screen dark:text-white'>
           <SeeDetails data = {data} articleUri = {articleUri}/>
           <SeeRelacionados data2= {data2} />
        </div>
        
)
}

export default Details;