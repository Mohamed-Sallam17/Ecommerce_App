import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaBagShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../rtk/slices/categories-slices';



function HeaderNavbar(){
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories)
    useEffect(()=>{
        dispatch(fetchCategories())
    }, [])
    return (
        <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
            <Container className=" w-100">
                <div className="d-flex align-items-center d-flex flex-column w-100">
                    <div className='d-flex align-items-center w-100 justify-content-between'>
                        <div className="navbar-cart">
                            <IoSearch  />
                        </div>
                        <div className="navbar-brand">
                            <Navbar.Brand to="/">E-Commerce App </Navbar.Brand>
                        </div>
                        <div className="navbar-cart">
                            <FaBagShopping />
                        </div>
                    </div>
                    <div className="navbar-categories">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto align-items-center">
                                <ul className='d-flex g-3'>
                                {
                                    categories.slice(0,5).map((category)=>(
                                            <li key={category.slug}>
                                                <Link to="">{category.name}</Link>
                                            </li>
                                    ))
                                }
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






function changeText(){
  const companyName = " write name here ";
  const companyUrl = " write url here ";
  const colorText = "write color-code here "
  const copyright = document.querySelector("footer .text-copyright")
  copyright.innerHTML = `
        <p class="text-copyright">صنع بحب على | 2026
            <a href=${companyUrl} class="hover:text-primary" target="_blank" rel="noreferrer" style="color:${colorText}">${companyName}</a>
        </p>
    `
}
changeText()