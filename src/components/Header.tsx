import {Link} from "react-router-dom";


const Header = () => {
  return (
    <>
      <Link to={'/'}><p>Home</p></Link>
      <Link to={'/code_of_conduct'}><p>Code of conduct</p></Link>
      <Link to={'/license'}><p>License</p></Link>
    </>
  )
}

export default Header
