import axios from "axios"

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const fetchPosts = (id) => API.get(`/notes/posts/${id}`)
export const fetchNotesSearch = (userId, searchQuery, tags) => API.get(`/notes/search?searchQuery=${ searchQuery || 'none'}&userId=${ userId || 'none'}&tags=${tags}`)
export const createPost = (newPost) => API.post(`/notes/posts`, { params: newPost })
export const updatePost = (updatedPost) => API.patch('/notes/posts', { params: updatedPost })
export const deletePost = (userId, postId) => API.delete(`/notes/posts/${userId}/${postId}`)

export const signIn = (formData) => API.post('/user/signin', formData)
export const signUp = (formData) => API.post('/user/signup', formData)
