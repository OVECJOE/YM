import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const ErrorPage = ({ heading, body }) => {
  return (
    <div className='bg-secondary h-screen text-white p-2'>
      <div className='container mx-auto py-16'>
        <h1 className='font-bold'>Error Page</h1>
        <div className='text-center text-red-900 my-10'>
          <h3>{heading ?? '404 Not Found'}</h3>
          <p className='bg-white p-4 shadow-md shadow-primary/80 mt-3 text-2xl'>
            {body ?? 'The page you requested for does not exist'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage