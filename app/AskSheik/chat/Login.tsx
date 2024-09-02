"use client"
import { useUserStore } from '@/app/store/zustand'
import { Button } from 'antd'
import React from 'react'

export default function Login() {
  const {googleSignIn} = useUserStore()
  return (
    <div className="login">
      <Button
      onClick={() => googleSignIn(false)}
      >Login with Google</Button>
    </div>
  )
}
