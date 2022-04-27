import React, {useEffect, useState} from "react";
import Calc from "react";
import { useSelector } from "react-redux";
const CalcPage = () => {
    const form = useSelector()
    return (<Calc onSubmit = {onSubmit} onChange={onChange} form={form}/>)
}

export default CalcPage