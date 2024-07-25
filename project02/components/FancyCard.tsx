import { View, Text, Image } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text className='text-xl font-bold mx-4'>Trending places</Text>
      <View className='m-4 bg-black rounded-xl'>
        <Image
          source={{uri: 'https://imgs.search.brave.com/-wKS-nuv3aZyAZqJ47T1mbk_6DD4Z1MNhcTETZ_XPYM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzEwLzg5LzI0/LzM2MF9GXzMxMDg5/MjQ0NF94SWxvVENm/czhZQkIwaU01aktX/UTQwWXp3UkRRVWs5/SS5qcGc'}}
          className='w-full h-[180px] rounded-t-xl'
        />
        <View className='p-4'>
          <Text className='text-2xl font-bold text-white my-2'>Hawa Mahal</Text>
          <Text className='text-xl font-semibold text-white my-2'>Pink City, Jaipur</Text>
          <Text className='text-lg text-justify text-white'>The hawa mahal is a palace in the city of Jaipur. It is built from red and pink sandstone, it is on the edge of the City Palace.</Text>
          <Text className='text-sm font-semibold text-white my-2'>12 minutes away</Text>
        </View>
      </View>
      <View className='m-4 bg-black rounded-xl'>
        <Image
          source={{uri: 'https://imgs.search.brave.com/-wKS-nuv3aZyAZqJ47T1mbk_6DD4Z1MNhcTETZ_XPYM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzEwLzg5LzI0/LzM2MF9GXzMxMDg5/MjQ0NF94SWxvVENm/czhZQkIwaU01aktX/UTQwWXp3UkRRVWs5/SS5qcGc'}}
          className='w-full h-[180px] rounded-t-xl'
        />
        <View className='p-4'>
          <Text className='text-2xl font-bold text-white my-2'>Hawa Mahal</Text>
          <Text className='text-xl font-semibold text-white my-2'>Pink City, Jaipur</Text>
          <Text className='text-lg text-justify text-white'>The hawa mahal is a palace in the city of Jaipur. It is built from red and pink sandstone, it is on the edge of the City Palace.</Text>
          <Text className='text-sm font-semibold text-white my-2'>12 minutes away</Text>
        </View>
      </View>
    </View>
  )
}

export default FancyCard