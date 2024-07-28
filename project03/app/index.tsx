import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Formik } from 'formik';

import * as Yup from 'yup';
import { SafeAreaView } from 'react-native-safe-area-context';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, "Should be a min of 4 characters")
  .max(16, "Should be a max of 16 characters")
  .required("This is a required field")
})

const index = () => {

  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if(lowercase){characterList += lowerCaseChars};
    if(uppercase){characterList += upperCaseChars};
    if(numbers){characterList += digitChars};
    if(symbols){characterList += specialChars};

    const passwordResult = createPassword(characterList, passwordLength);

    setPassword(passwordResult);
    setIsPassGenerated(true);
  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result+=characters.charAt(characterIndex);
    }
    return result;
  }

  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowercase(true);
    setUppercase(false);
    setNumbers(false);
    setSymbols(false);
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView>
        <View>
          <Text className='text-3xl m-4 font-bold'>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              console.log(values);
              generatePasswordString(+values.passwordLength);
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View className='p-4 flex-row justify-between mb-4 items-center'>
                  <View>
                    <Text className='text-xl'>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text className='text-red-600'>{errors.passwordLength}</Text>
                    )}
                  </View>
                  <TextInput 
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder='Ex. 8'
                    keyboardType='numeric'
                    className='border-2 px-4 h-12 w-[100px]'
                  />
                </View>
                <View className='px-4 flex-row justify-between my-2'>
                  <Text className='text-lg'>Include lowercase</Text>
                  <BouncyCheckbox
                    isChecked={lowercase}
                    onPress={() => setLowercase(!lowercase)}
                    fillColor='#29AB87'
                  />
                </View>
                <View className='px-4 flex-row justify-between my-2'>
                  <Text className='text-lg'>Include uppercase</Text>
                  <BouncyCheckbox
                    isChecked={uppercase}
                    onPress={() => setUppercase(!uppercase)}
                    fillColor='#29AB87'
                  />
                </View>
                <View className='px-4 flex-row justify-between my-2'>
                  <Text className='text-lg'>Include numbers</Text>
                  <BouncyCheckbox
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor='#29AB87'
                  />
                </View>
                <View className='px-4 flex-row justify-between my-2'>
                  <Text className='text-lg'>Include symbols</Text>
                  <BouncyCheckbox
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor='#29AB87'
                  />
                </View>
                <View className='flex-row gap-2 p-4'>
                  <TouchableOpacity
                    disabled={!isValid}
                    onPress={() => {handleSubmit()}}
                    className='bg-green-700 px-4 rounded-lg'
                  >
                    <Text className='text-lg p-2 text-center'>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      handleReset();
                      resetPasswordState();
                    }}
                    className='bg-red-400 w-[150px] rounded-lg px-4'
                  >
                    <Text className='text-lg p-2 text-center'>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
          {isPassGenerated ? (
            <View className='m-2 flex-1 bg-slate-400 justify-center gap-2 p-2'>
              <Text className='text-lg '>Long Press to Copy</Text>
              <Text selectable={true} className='text-xl text-center'>{password}</Text>
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default index