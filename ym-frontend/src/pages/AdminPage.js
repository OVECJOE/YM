import axios from 'axios'
import { useEffect, useState } from 'react'

import Logo from '../logo.svg'
import AdminDashboard from './AdminDashboard'
import Button from '../components/Button'

const AdminPage = () => {
  const [adminDetails, setAdminDetails] = useState(
    JSON.parse(localStorage.getItem('admin_details')) || null
  )
  const [loading, setLoading] = useState(false)

  const loginViaGithub = async () => {
    setLoading(true)
    const { data } = await axios.get('/api/admin')

    if (data) {
      const { username, email, birthDate, bio } = data
      setAdminDetails({
        username, email, birthDate, bio
      })
    }

    setLoading(false)
  }

  console.log(adminDetails)

  useEffect(() => {
    localStorage.setItem('admin_details', JSON.stringify(adminDetails))
  }, [adminDetails])

  return (
    <>
      {!adminDetails ? (
        <div className='bg-secondary p-10 px-4 h-screen flex flex-col gap-6 justify-center'>
          <div className='flex gap-3 justify-between mx-auto w-full sm:w-3/4 items-center'>
            <h1 className="text-center text-white">Admin Auth Page</h1>
            <img src={Logo} width='70px' height='50px' className='bg-white p-2 shadow-md shadow-slate-900/90' />
          </div>
          <div className="bg-white w-full sm:w-fit py-10 px-5 flex flex-col gap-6 items-center mx-auto shadow-lg shadow-slate-900/40">
            <h4 className="text-primary text-center font-bold"> Sign up/Log in</h4>
            <div className="flex gap-3 flex-wrap justify-center w-full">
              <Button text='Continue with GitHub' loading={loading} clickhandler={loginViaGithub} />
              <Button text='Continue with Google' loading={loading} inactive={true} />
              <Button text='Continue with LinkedIn' loading={loading} inactive={true} />
            </div>
            {loading && <svg className="w-10 bg-secondary rounded-full" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 100 100" enableBackground="new 0 0 0 0">
              <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="1s"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite" />
              </path>
            </svg>
            }
          </div>
        </div>
      ) : (
        <AdminDashboard adminDetails={adminDetails} setAdminDetails={setAdminDetails} />
      )}
    </>
  )
}

export default AdminPage