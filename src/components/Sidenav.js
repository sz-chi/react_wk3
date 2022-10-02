import { NavLink } from "react-router-dom";

export default function Sidenav() {
  return (
    <div className='sidenav'>      
            <NavLink to="/category/tableware"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Tableware
            </NavLink>
            <br/>
            <NavLink to="/category/cookware"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Cookware
            </NavLink>
            <br/>
            <NavLink to="/category/home-accessories"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Home accessories
            </NavLink>
            <br/>
            <NavLink to="/category/lighting"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Lighting
            </NavLink>
            <br/>
            <NavLink to="/category/textile"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Textile
            </NavLink>
            <br/>
            <NavLink to="/category/furniture"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Furniture
            </NavLink>
    </div>
  )
}