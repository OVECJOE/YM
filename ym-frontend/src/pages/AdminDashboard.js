import { AiOutlineProfile } from 'react-icons/ai'
import { FaFileSignature } from 'react-icons/fa'
import { TbBooks, TbFiles } from 'react-icons/tb'
import { MdPreview } from 'react-icons/md'
import { Outlet } from 'react-router-dom'

import NavItem from '../components/NavItem'
import Logo from '../logo.svg'

const AdminDashboard = ({ adminDetails, setAdminDetails }) => {
  return (
    <div className="h-screen flex bg-primary text-white overflow-hidden">
      <img src={Logo} alt='Youthful Misperceptions' width='70px' height='50px' className='absolute bg-white/50 top-4 left-6 rounded-tl-2xl' />
      <section className="p-4 w-1/6 border border-black/60 flex flex-col justify-center items-center gap-6 overflow-hidden">
        <NavItem text='Overview' Icon={MdPreview} route='/admin' />
        <NavItem text='Profile' Icon={AiOutlineProfile} route='/admin/profile' />
        <NavItem text='New' Icon={FaFileSignature} route='/admin/new' />
        <NavItem text='Books' Icon={TbBooks} route='/admin/books' />
        <NavItem text='Chapters' Icon={TbFiles} route='/admin/chapters' />
      </section>
      <Outlet context={[adminDetails, setAdminDetails]} />
    </div>
  )
}

export default AdminDashboard