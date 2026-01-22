/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react'


export const BlogContext = createContext(null);

const BlogProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState('')
  return (
    <BlogContext.Provider value={{searchTerm, setSearchTerm}}>{children}</BlogContext.Provider>
  )
}

export default BlogProvider