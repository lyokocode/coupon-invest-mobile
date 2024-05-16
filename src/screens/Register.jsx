import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import DropdownComponent from '../components/DropdownComponent';

export const Register = () => {
    const navigation = useNavigation()

    return (
        <View className="flex-1 items-center justify-center ">

            <Image
                source={require("../../assets/background.png")}
                className="w-full h-full absolute top-0 left-0"
            />

            <Formik
                initialValues={{
                    step: 1,
                    lastStep: 3,

                    // step 1
                    name: "",
                    email: "",
                    password: "",

                    // step 2
                    town: "",
                    city: "",

                    // step 3
                    phoneNumber: ""


                }}
                onSubmit={values => console.log(values)}
            >
                {({ values, setFieldValue, handleChange, handleBlur, handleSubmit }) => {


                    const prevHandle = () => {
                        setFieldValue('step', values.step - 1)
                    }
                    const nextHandle = () => {
                        setFieldValue('step', values.step + 1)
                    }
                    return (
                        <View className=" w-2/3 flex  space-y-4 ">
                            <Text className="text-center text-xl text-gray-200 mb-4">Coupon Invest'e Hoşgeldin!</Text>
                            {
                                values.step == 1 && (
                                    <View View className="flex gap-2">
                                        <TextInput
                                            placeholder='fullName'
                                            className="bg-white w-full pl-4 py-3 rounded-xl"
                                            onChangeText={handleChange('fullName')}
                                            onBlur={handleBlur('fullName')}
                                            value={values.fullName}
                                        />
                                        <TextInput
                                            placeholder='email'
                                            className="bg-white w-full pl-4 py-3 rounded-xl"
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            value={values.email}
                                        />
                                        <TextInput
                                            placeholder='password'
                                            className="bg-white w-full pl-4 py-3 rounded-xl"
                                            secureTextEntry={true}
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                        />
                                    </View>
                                )
                            }
                            {
                                values.step == 2 && (
                                    <DropdownComponent />

                                )
                            }
                            {
                                values.step == 3 && (
                                    <TextInput
                                        placeholder='Telefon Numarası'
                                        className="bg-white w-full pl-4 py-3 rounded-xl"
                                        onChangeText={handleChange('phoneNumber')}
                                        onBlur={handleBlur('phoneNumber')}
                                    />

                                )
                            }


                            <View className="flex-row items-center justify-between">
                                {values.step > 1 && (
                                    <TouchableOpacity onPress={() => prevHandle()} className="bg-red-500 w-1/3 flex items-center justify-center px-3 py-2 rounded-lg ">
                                        <Text className="text-lg text-white">önceki</Text>
                                    </TouchableOpacity>
                                ) || <View />}
                                {
                                    values.step == 3 ? (
                                        <TouchableOpacity className="bg-teal-400 w-1/3 flex items-center justify-center px-3 py-2 rounded-lg ">
                                            <Text className="text-lg text-white">Kaydet</Text>
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity onPress={() => nextHandle()} className="bg-teal-400 w-1/3 flex items-center justify-center px-3 py-2 rounded-lg ">
                                            <Text className="text-lg text-white">sonraki</Text>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                        </View>
                    )
                }}
            </Formik>
            {/* link */}
            <View className="flex-row gap-x-2 items-center absolute bottom-[20%] right-[10%]">
                <Text className="text-center text-base text-white font-light">Zaten bir hesabın var mı?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text className="font-medium text-white text-lg  underline">Giriş yap</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}