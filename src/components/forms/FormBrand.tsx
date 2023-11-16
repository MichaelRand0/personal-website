import ButtonMain from '$components/ButtonMain'
import InputBrand from '$components/inputs/InputBrand'
import TextareaBrand from '$components/inputs/TextareaBrand'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import * as yup from 'yup'
import { useModal } from '$hooks/modal'

interface Props extends React.ComponentProps<'div'> {}

const FormBrand = (props: Props) => {
  const { className } = props
  const { setCurrentModal } = useModal()
  const [isLoading, setIsLoading] = useState(false)
  const schema = yup
    .object({
      name: yup
        .string()
        .required('Обязательное поле')
        .min(2, 'Минимальная длина: 2 символа')
        .max(100, 'Максимальная длина: 100 символов'),
      email: yup
        .string()
        .required('Обязательное поле')
        .email('Неправильный email')
        .max(100, 'Максимальная длина: 100 символов'),
      message: yup
        .string()
        .required('Обязательное поле')
        .max(1000, 'Максимальная длина: 1000 символов'),
    })
    .required()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const form = useRef(null)
  const onSubmit = (data: any) => {
    setIsLoading(true)
    if (form.current) {
      emailjs
        .sendForm(
          'service_xhj58ma',
          'template_ps895xo',
          form.current,
          '0HifZ_8JOKK1skdFM'
        )
        .then(
          () => {
            setIsLoading(false)
            setCurrentModal({
              name: 'EmailSuccess',
              payload: null,
            })
            reset({
              email: '',
              name: '',
              message: ''
            })
          },
          (error) => {
            setIsLoading(false)
            console.error('Ошибочка', error.text)
          }
        )
    }
  }
  const onError = () => {
    console.log('errors', errors)
  }
  return (
    <div
      className={`flex px-2 py-4 sm:p-8 border-greyLight border items-center flex-col bg-bgBlack ${className}`}
    >
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit, onError)}
        className='w-full px-5 py-3 flex flex-col items-start gap-8'
      >
        <InputBrand
          classNameContainer='w-full'
          error={errors['name']?.message}
          registerData={register('name')}
          className='w-full'
          placeholder='Имя'
        />
        <InputBrand
          classNameContainer='w-full'
          error={errors['email']?.message}
          registerData={register('email')}
          className='w-full'
          placeholder='Ваш email'
        />
        <TextareaBrand
          rows={4}
          classNameContainer='w-full'
          error={errors['message']?.message}
          registerData={register('message')}
          className='w-full resize-none'
          placeholder='Сообщение'
        />
        <ButtonMain disabled={isLoading} className='mt-7'>Отправить</ButtonMain>
      </form>
    </div>
  )
}

export default FormBrand
