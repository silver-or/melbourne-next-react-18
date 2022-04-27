import axios from 'axios';
import React, { useState } from 'react';
import tableStyles from '@/styles/Table.module.css'
const Bmi = ({ onSubmit, onChange, form }) => {
    return (<form action="" onSubmit={onSubmit} >
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={2}><h2>BMI</h2></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <label htmlFor="">이름</label>
                    </td>
                    <td>
                        <input type="text" name="name" value={form.name} onChange={onChange} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="">키</label>
                    </td>
                    <td>
                    <input type="text" name="height" value={form.height} onChange={onChange} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>
                            <label htmlFor="">몸무게</label>
                        </div>
                    </td>
                    <td>
                        <input type="text" name="weight" value={form.weight} onChange={onChange} /><br />
                    </td>
                </tr>
                <tr><td colSpan={2}><input type="submit" value="BMI 체크" /></td></tr>
                <tr><td colSpan={2}>결과 : <span id="result-span"></span></td></tr>
            </tbody>
        </table>
    </form>)
}

export default Bmi