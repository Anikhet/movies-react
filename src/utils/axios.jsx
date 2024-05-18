import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGZlY2JiZGUyYWRjMzZkZTcyNzZjNmY5Nzc0ODQ1MSIsInN1YiI6IjY2NDhlODUyNTliMzEwNDVjNjU0MDRjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-ADYfjww56V9HvDRintXrYcv0xei1lyJVgGUBUNbQw',
    },
})
export default instance