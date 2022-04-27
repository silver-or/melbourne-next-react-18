import React, {useEffect, useState} from "react";
import UserModify from "react";
import { useSelector } from "react-redux";

const UserModifyPage = () => {
    const onSubmit = e => {
        e.preventDefault()
        const {userid, password, email, name, phone, birth, address} = form
    }

    const onChange = e => {
        e.preventDefault()
    }

    return (<UserModify onSubmit = {onSubmit} onChange={onChange} form={form}/>)
}

export default UserModifyPage