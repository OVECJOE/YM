import { BiBookAlt } from 'react-icons/bi'
import { RiDraftLine } from 'react-icons/ri'
import { useOutletContext } from 'react-router-dom'

const Overview = () => {
  const [adminDetails, setAdminDetails] = useOutletContext()

  return (
    <section className="w-5/6 py-10 border border-black/50">
      <h2 className='font-bold border-b-2 px-4 mb-5 sm:px-8 border-b-black/50 uppercase'>Overview</h2>
      <h3 className='px-4 sm:px-8 font-sans text-white/70'>
        Welcome <span className='text-secondary font-bold'>{adminDetails.username}</span>!
      </h3>
      <div className='flex gap-3 my-6 px-4 sm:px-8'>
        <div className='w-1/2 sm:w-4/12 shadow-md shadow-white/30 p-3 ring-1 ring-black/20 flex flex-col justify-between rounded-lg bg-gradient-to-l from-[#bfeb99] to-[#ffb702]'>
          <h4 className='text-primary font-bold border-b border-b-secondary/50'>Books Count</h4>
          <h1 className='text-white flex justify-between items-center'>
            <span className='text-black'>2</span>
            <BiBookAlt />
          </h1>
        </div>
        <div className='w-1/2 sm:w-4/12 shadow-md shadow-white/30 p-3 ring-1 ring-black/20 flex flex-col justify-between rounded-lg bg-gradient-to-l from-[#f66d75] to-[#5cf70d]'>
          <h4 className='text-primary font-bold border-b border-b-secondary/50'>
            Chapters Count
          </h4>
          <h1 className='text-white flex justify-between items-center'>
            <span className='text-black'>10</span>
            <RiDraftLine />
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Overview