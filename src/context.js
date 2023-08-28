import React, { useContext, useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";

const API_URL=`http://www.omdbapi.com/?apikey=d667fbff`
const AppContext=React.createContext();

const AppProvider=( {children} )=>{
    const [islLoading,setIsLoading]=useState(true)
    const [movie,setMovie]=useState([])
    const [isError,setIsError]=useState({show:'false',msg:""})
    const [query,setQuery]=useState("titanic");

const getMovies=async(url)=>{
    try{
            const res= await fetch(url)
            const data=await res.json();
            console.log(data)
            if(data.Response==='True')
            {
                setIsError({
                    show:false,
                    msg:""
                })
                setIsLoading(false);
                setMovie(data.Search);
            }
            else
            {
                setIsError({
                    show:true,
                    msg:data.Error
                })
            }
    }catch(error)
    {
        console.log(error)
    }
}

    useEffect(()=>{
        const timerOut=setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`);
        }, .800);
           return ()=>clearTimeout(timerOut)
    },[query]);
    return (
        <AppContext.Provider value={ { isError,islLoading,movie ,query,setQuery} }>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext=()=>{
    return useContext(AppContext)
}


export {AppContext,AppProvider,useGlobalContext};


// http://www.omdbapi.com/?i=tt3896198&apikey=d667fbffs=titanic


// http://www.omdbapi.com/?apikey=d667fbff&s=titanic;