import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../rtk/slices/categories-slices";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";



function Categories(){
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);
    useEffect(()=>{
    dispatch(fetchCategories())
    },[])

    return (
        <Container>
            <h2 className="my-3 text-center"> Categories page </h2>
            <div className=" categories-list d-grid">
                {
                    categories.map((categry)=>(
                            <Link className="text-center p-3 m-2" key={categry.slug}>{categry.name}</Link>
                    ))
                }
            </div>
        </Container>
    )
}

export default Categories;