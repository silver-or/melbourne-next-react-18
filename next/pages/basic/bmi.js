import React, {useEffect, useState} from "react";
import B from "react";
import { useSelector } from "react-redux";
const BmiPage = () => {
    const form = useSelector()
    return (<Bmi onSubmit = {onSubmit} onChange={onChange} form={form}/>)
}

export default BmiPage