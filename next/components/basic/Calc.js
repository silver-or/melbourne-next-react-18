import React, { useState } from "react";
import tableStyles from '@/styles/Table.module.css'
const Calc = ({ onSubmit, onChange, form }) => {
    return (<form onSubmit={onSubmit}>
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th><h2>계산기</h2></th>
                </tr>
            </thead>
            <tbody>
        <tr >
        <td>
            <label htmlFor="">num1</label>
            <input name="num1" type="text" value={form.num1} onChange={onChange} /> 

            <label htmlFor="">연산자</label>
            <select name="opcode" value={form.opcode} onChange={onChange} >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select>

            <label htmlFor="">num2</label>
            <input name="num2" type="text" value={form.num2} onChange={onChange} /><br />

            <button>계산하기</button></td>
            </tr>
            <tr><td>결과 : {result}</td></tr>
                </tbody>
            </table>
        </form>)
}

export default Calc