import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from "react-redux";
import { setAuth } from '../store/authSlice';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';

export const Login = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    return (
        // wrapper
        <View className="flex-1 relative h-full bg-sky-500">
            <Image
                source={require("../../assets/background.png")}
                className="w-full h-full absolute top-0 left-0"
            />

            {/* container */}
            <View className="z-20 flex-1 items-center justify-center gap-5">

                {/* login page header */}
                <View className="text-center flex items-center ">
                    <Text className="font-bold text-3xl text-white">Coupon Invest</Text>
                    <Text className="font-normal text-sm text-[#9ca3af]">Size uygun fırsatlar</Text>
                </View>
                {/* form input */}
                <View className="w-2/3 space-y-4">
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={values => console.log(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View className="flex gap-2">
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

                                {/* <TouchableOpacity
                                    onPress={handleSubmit}
                                    className="bg-[#7c3aed] w-full py-3 rounded-xl"
                                >
                                    <Text className="text-center text-lg text-white font-semibold">Giriş Yap</Text>
                                </TouchableOpacity> */}

                            </View>
                        )}
                    </Formik>
                </View>

                {/* button container */}
                <TouchableOpacity
                    onPress={() => dispatch(setAuth())}
                    className="bg-[#7c3aed] w-1/2  py-3 rounded-xl"
                >
                    <Text className="text-center text-lg text-white font-semibold">Giriş Yap</Text>
                </TouchableOpacity>

                {/* link */}
                <View className="flex-row gap-x-2 items-center">
                    <Text className="text-center text-base text-white font-light">henüz hesabın yok mu?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Register")}
                    >
                        <Text className="font-medium text-white text-lg  underline">kayıt ol</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    )
}