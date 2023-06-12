import React, { useState } from 'react'
import axios from 'axios'
import { AuthType } from '../../types/auth-type'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

import jwt from 'jwt-decode'
import { LogInFunction } from '../../API/auth-api'
import { LogInClass } from '../../data/data-blue-prints'
const LogIn = () => {
  const [email, setEmail] = useState<string>('')

  const [password, setPassword] = useState<string>('')
  const cookies = new Cookies()
  const queryClient = useQueryClient()

  const mutation = useMutation(
    ({ body }: { body: AuthType }) => LogInFunction(body),
    {
      onSuccess: (data) => {
        const token = data.data.token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        const decode: any = jwt(token)
        console.log(decode)
        cookies.set('jwt_authorization', token, {
          expires: new Date(decode.exp * 1000),
        })

        queryClient.setQueryData(['auth'], decode)
      },
    },
  )
  const LogInHanndler = () => {
    if (email && password) {
      const body = new LogInClass(email, password)
      mutation.mutate({ body })
    }
  }

  const style = {
    mainDiv: ` w-[100vw] h-[100vh] flex items-center justify-center bg-gray-300`,
    inputWrapper: `flex flex-col gap-5 bg-gray-200 shadow-md p-10 h-[300px] rounded-[20px] w-[600px] items-center`,
    input: `input input-bordered input-info w-full max-w-xs bg-gray-100`,
    btn: `btn btn-outline btn-accent max-w-xs  w-full`,
  }
  const token = cookies.get('jwt_authorization')

  if (!token) {
    return (
      <div className={style.mainDiv}>
        <div className={style.inputWrapper}>
          <input
            className={style.input}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            type="email"
          />
          <input
            className={style.input}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
          />

          <button
            onClick={() => LogInHanndler()}
            type="submit"
            className={style.btn}
          >
            submit
          </button>
        </div>
        {/* <div>
          <button onClick={() => postDummydata()}>POST DUMMY DATA</button>
        </div> */}
      </div>
    )
  } else {
    return <Navigate to="/" />
  }
}

export default LogIn
