import React from 'react'

async function PostPage() {
 const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const todo =await response.json()

  return (
    <div>
      <h1>This is the post page</h1>
      <h1>{todo.title}</h1>

    </div>
    
  )
}

export default PostPage;