import React, {useEffect, useState} from "react";
import UserJoin from "react";
import {useDispatch, useSelector} from 'react-redux' // react에서 redux로 보낸다.
import {userJoin} from "@/modules"

const UserJoinPage = () => {
  const dispatch = useDispatch()
  
  // auth와 user는 redux store의 어느 공간에 있는 변수 이름
  // authError : 회원가입 또는 로그인 실패, form : 폼 태그
  const {form, auth, user} = useSelector((auth, user) => ({
    auth : auth.auth, 
    user : user.user, 
    authError : auth.authError, 
    form : auth.userJoin})) // () => ()는 리턴이 있는 상태, 들어온 대로 나가게 한다. ({})
  
    const onSubmit = e => {
    e.preventDefault()
    const {userid, name, email, password, phone, birth, address} = form
    alert("1단계 : " + JSON.stringify(form))
    dispatch(userJoin({userid, name, email, password, phone, birth, address}))
  }
  
  const onChange = e => {
    e.preventDefault()
  }

  return (<UserJoin onSubmit = {onSubmit} onChange={onChange} form={form}/>)
}

export default UserJoinPage