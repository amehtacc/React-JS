import React from 'react'
// import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/amehtacc')
    //     .then((response) => response.json())
    //     .then((response) => setData(response))
    // }, [])

  return (
    <div className='text-center bg-gray-600 m-4 p-10 text-white text-3xl flex justify-center items-center gap-x-10'>
    <img className='border-8 rounded-full' src={data.avatar_url} alt="Github profile picture" width={300}/>
    GitHub Followers: {data.followers}
    </div>
  )
}

export default Github