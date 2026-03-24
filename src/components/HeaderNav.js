import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaBagShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../rtk/slices/categories-slices';



function HeaderNavbar(){
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories)
    
    useEffect(()=>{
        dispatch(fetchCategories())
    }, [])
    
    const myRef = useRef(null)
    useEffect(()=>{
        const handleScroll = ()=>{
                if(window.scrollY > 0){
                    myRef.current.classList.add("fixed-top");
                    console.log("scroll begin ")
                }else{
                    myRef.current.classList.remove("fixed-top")
                }
        }
        window.addEventListener("scroll", handleScroll)

        // clean listener when unmount 
        return ()=> window.removeEventListener("scroll",handleScroll)
    },[])

    return (
        <Navbar ref={myRef} expand="lg" className="bg-body-tertiary">
            <Container className=" flex-column w-100">
                <div className="top-header d-flex justify-content-between w-100">
                    <div className="navbar-brand">
                        <Navbar.Brand to="/">E-Commerce App </Navbar.Brand>
                    </div>
                    <form>
                        <input type='text' placeholder='Search For Products'/>
                        <button type='submit'><IoSearch /></button>
                    </form>
                    <div className='header-icons'>
                        <FaUser />
                        <FaBagShopping />
                    </div>
                </div>
                <div className="d-flex align-items-center d-flex flex-column w-100">
                    <div className="navbar-categories">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto align-items-center">
                        <ul className="d-flex g-3">
                            <Link to="/">Home</Link>
                            {categories.slice(0, 5).map((category) => (
                            <li key={category.slug}>
                                <Link to="">{category.name}</Link>
                            </li>
                            ))}
                            <Link to="/categories">All Categories</Link>
                        </ul>
                        </Nav>
                    </Navbar.Collapse>
                    </div>
                </div>
            </Container>
        </Navbar>
    );
}

export default HeaderNavbar;







