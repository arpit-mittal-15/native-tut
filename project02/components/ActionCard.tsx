import { View, Text, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {

  function openWebsite(websiteLink: string): void{
    Linking.openURL(websiteLink)
  }

  return (
    <View className='m-4'>
      <Text className='text-xl font-bold'>Blog Card</Text>
      <View className='my-4 bg-red-500 rounded-xl'>
        <View className='h-10 flex-row justify-center items-center'>
          <Text className='text-lg font-semibold'>What's new in JS-21</Text>
        </View>
        <Image 
          source={{uri: 'https://imgs.search.brave.com/e9v3vRueACaDED541gaZJWwD5cMJiLv-E9g8PhBF5vE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOS8x/MC8wMy8xMi8xMi9q/YXZhc2NyaXB0LTQ1/MjMxMDBfNjQwLmpw/Zw'}}
          className='h-[180px]'
        />
        <View className='m-2'>
          <Text numberOfLines={3} className='text-justify text-base'>
            Just like every year, JS brings in new features. This year JS is bringing 4 new features, which are almost in production roll out. I won't be much more time in directly jump to code with easy to understand examples.
          </Text>
        </View>
        <View className='h-10 flex-row justify-evenly items-center bg-yellow-300 rounded-b-xl'>
          <TouchableOpacity
            onPress={() => openWebsite('https://google.com')}
          >
            <Text className='text-lg'>Read more</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://google.com')}
          >
            <Text className='text-lg'>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ActionCard