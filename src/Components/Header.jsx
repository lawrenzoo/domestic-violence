import NavBar from "./NavBar"
import '../App.css';
// import { children } from "react";


const Header = (props) => {

// eslint-disable-next-line react/prop-types
const { children } = props;

  return (
    <>
    <header>
        <NavBar/>
        {children} 
    </header>
    </>
    
  )
}

export default Header