import React from "react";


const SeeDetails = ({ data, articleUri }) => {
    if (!data || !data[articleUri] || !data[articleUri].info) {
        return <div>No data available</div>;
    }

    return (
        <div className='flex flex-col justify-center dark:bg-gray-800 content-center items-center w-full min-h-screen dark:text-white px-80 gap-12 font-serif'>
            <h1 className="text-2xl pt-10"><strong>{data[articleUri].info.title}</strong></h1>
            <img className="" src={data[articleUri].info.image} alt="DetailsArticle" />
            <p>{data[articleUri].info.body}</p>

                <h1 className="text-2xl">ARTICULOS RELACIONADOS</h1>
        </div>
    );
}

export default SeeDetails;