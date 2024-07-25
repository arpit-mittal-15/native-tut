import { View, Text } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text className="text-xl font-bold px-4">FlatCards</Text>
      <View className="bg-black px-4 h-fit flex-1 flex-row gap-x-4">
        <View className="h-[100px] w-[100px] bg-red-500 rounded-lg flex justify-center items-center">
          <Text>Red</Text>
        </View>
        <View className="h-[100px] w-[100px] bg-green-500 rounded-lg flex justify-center items-center">
          <Text>Green</Text>
        </View>
        <View className="h-[100px] w-[100px] bg-blue-500 rounded-lg flex justify-center items-center">
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  )
}

export default FlatCards