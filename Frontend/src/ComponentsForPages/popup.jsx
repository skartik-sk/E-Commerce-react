import React from 'react'
import { Link } from 'react-router-dom'

const popup = () => {
  return (
    <div className='flex justify-center sticky top-0  '>

    <section className="rounded-3xl shadow-2xl  absolute bg-white  ">
  <div className="p-8 text-center sm:p-12">
    <p className="text-sm font-semibold uppercase tracking-widest text-yellow-500">
    Want to do some Shopping
    </p>

    <h2 className="mt-6 text-3xl font-bold">
    Visite my newly build Shopping page
    </h2>

    <Link
      className="mt-8 inline-block w-full rounded-full bg-yellow-600 py-4 text-sm font-bold text-white shadow-xl"
      to="/Shopping"
    >
      Start shopping
    </Link>
  </div>
</section>
</div>

  )
}

export default popup