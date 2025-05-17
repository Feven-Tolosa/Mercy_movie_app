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
