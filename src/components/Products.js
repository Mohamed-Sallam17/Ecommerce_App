import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {fetchProducts}  from "../rtk/slices/product-slices";
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row } from "react-bootstrap";
import { fetchCategories } from "../rtk/slices/categories-slices";

function Products(){
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    useEffect(()=>{
        dispatch(fetchProducts()) 
    },[])
    return (
            <Container>
                <h2 className="my-5 text-center">Products</h2>
                <Swiper  
                    slidesPerView="auto"
                    spaceBetween={20}
                    loop={false}
                    watchOverflow={true}
                    resistanceRatio={0}
                    slidesOffsetBefore={10}
                    slidesOffsetAfter={10}  
                    className="mySwiper">                    
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <Card className="product-card" style={{ width: "300px" }}>
                                    <div className="product-cardimg">
                                        <Card.Img className="h-100" variant="top" src={product.images[0]} /> 
                                    </div>
                                    <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>{product.price}$</Card.Text>
                                    <Button variant="primary">Add To Cart </Button>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </Container>
    );
}

export default Products;




