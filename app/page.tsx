type Post = {
  id: number,
  title: string,
  content: string,
  author: string,
  date: string,
  category: string
}

export default async function Home(){
  // await new Promise(promise => setTimeout(promise, 2000))
  const response = await fetch('https://api.vercel.app/blog')
  const posts: Post[] = await response.json()
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
        {posts.map((post: Post, index: number) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.content.substring(0, 100)}...</p>
            <div className="text-right"> 
              <span className="text-sm text-gray-500">- {post.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
