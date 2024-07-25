import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

const ContactList = () => {

  const contacts = [
    {
      uid: 1,
      name: "Hitesh choudary",
      status: 'Teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: "Arpit Mittal",
      status: 'Student',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: "Anyone",
      status: 'Stranger',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: "Who knows",
      status: 'Ghost',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ]
  return (
    <View className='m-4'>
      <Text className='text-2xl'>ContactList</Text>
      <ScrollView scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} className='my-2 flex-row bg-red-500 rounded-full'>
            <Image 
              source={{uri: imageUrl}}
              className='h-[70px] w-[70px] rounded-full'
              resizeMode='cover'
            />
            <View className='m-2'>
              <Text className='text-xl'>{name}</Text>
              <Text className=''>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default ContactList