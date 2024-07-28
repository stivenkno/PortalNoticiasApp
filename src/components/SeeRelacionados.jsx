import { Link } from "react-router-dom";

const SeeRelacionados = ({ data2}) => {
     

    console.log(data2);
   
    return (
        
        <div className="flex gap-4">
            {data2?.articles?.results?.map((item, index) => 
            <Link to={`/details/${item.uri}`}>
               <li className="w-52" key={`${index}-${item.title}`}>
                   <img  src={item.image} alt="" />
                   <h2>{item.title}</h2>
               </li>
            </Link>
            )}
        </div>
       
    )
}

export default SeeRelacionados