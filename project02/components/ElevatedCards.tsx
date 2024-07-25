import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text className="text-xl font-bold px-4">ElevatedCards</Text>
      <ScrollView horizontal className='p-4 h-fit'>
        <View className='flex-1 elev mr-4 w-[100px] h-[100px] bg-yellow-500'>
          <Text>tap</Text>
        </View>
        <View className='flex-1 mr-4 w-[100px] h-[100px] bg-yellow-500'>
          <Text>tap</Text>
        </View>
        <View className='flex-1 mr-4 w-[100px] h-[100px] bg-yellow-500'>
          <Text>tap</Text>
        </View>
        <View className='flex-1 mr-4 w-[100px] h-[100px] bg-yellow-500'>
          <Text>tap</Text>
        </View>
        <View className='flex-1 mr-4 w-[100px] h-[100px] bg-yellow-500'>
          <Text>tap</Text>
        </View>
        <View className='flex-1 mr-4 w-[100px] h-[100px] bg-yellow-500'>
          <Text>tap</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCards