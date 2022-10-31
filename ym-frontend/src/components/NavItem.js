import { NavLink } from 'react-router-dom'

const NavItem = ({ text, Icon, route }) => {
  return (
    <NavLink to={route} className={`flex flex-col gap-1 text-green-400 text-lg items-center
    justify-center text-center`} end>
      <Icon />
      <span className='hidden sm:block'>{text}</span>
    </NavLink>
  )
}

export default NavItem