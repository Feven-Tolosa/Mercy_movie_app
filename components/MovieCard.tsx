import { View, Text } from 'react-native'
import React from 'react'

const MovieCard = ({
  id,
  title,
  vote_average,
  poster_path,
  release_date,
}: Movie) => {
  return (
    <View>
      <Text className='text-white text-sm'>MovieCard</Text>
    </View>
  )
}

export default MovieCard
