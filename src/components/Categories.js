import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../rtk/slices/categories-slices";



function Categories(){
    const dispatch = useDispatch;
    const categories = useState(state => state.categories);
    useEffect(()=>{
    dispatch(fetchCategories())
},[])
    return (
        <h2> Categories page </h2>
    )
}

