export const TMDB_CONGIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: 'process.env.EXPO_PUBLIC_MOVIE_API_KEY',
  header: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
}

export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMDB_CONGIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONGIG.BASE_URL}/discover/movie?sort_by=popularity.desc`
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: TMDB_CONGIG.header,
  })
  if (!response.ok) {
    throw new Error(
      `Failed to fetch movies - Status: ${response.status} ${
        response.statusText || 'Unknown error'
      }`
    )
  }
  const data = await response.json()
  return data.results
}
// const url =
//   'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmIxN2U1YmI0MjUxOTI1ZjEyM2I1NjU1YWMwNjZiOSIsIm5iZiI6MS43MjYwOTQyODM5NDU5OTk5ZSs5LCJzdWIiOiI2NmUyMWJjYjAwMDAwMDAwMDA5NTAzMzUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Xr50wbhL0MQNG-WdyXyAIB-8ZK0qfc71Lzomq1aPhx0',
//   },
// }

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error(err))
