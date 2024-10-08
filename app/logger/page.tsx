import axios from "axios"
import { headers } from "next/headers"

interface User {
  id: number,
  username: string,
  email: string,
  password: string
}

async function getData() {
  const headersList = headers()
  const host = headersList.get('host') || 'localhost:3000'
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'
  
  const apiUrl = `${protocol}://${host}/api/user`
    const response = await axios.get(apiUrl)
    return response.data
}

export default async function Logger() {
    const db_response: User[] = await getData()
    // console.log(db_response)

    return (

    <div>
      {db_response.map((user: User) => (
        <div key={user.id} className="max-w-sm mx-auto my-5 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="sm:flex sm:items-center px-6 py-4">
          <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <p className="text-xl leading-tight">{user.username}</p>
            <p className="text-sm leading-tight text-gray-600">{user.email}</p>
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="flex items-center">
            <svg className="h-6 w-6 text-gray-600 fill-current mr-3" viewBox="0 0 20 20">
              <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"/>
            </svg>
            <p className="text-sm text-gray-700">Member since {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
      ))}
    </div>
  )
    
}

