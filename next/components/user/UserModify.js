import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import tableStyles from '../common/styles/table.module.css'

const UserModify = ({ onSubmit, onChange, form }) => {
 return(<form onSubmit={ onSubmit }>
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={2}><h1>정보수정</h1></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>사용자ID</b></td>
                    <td><input type="text" name='userid' value={form.userid} onChange={onChange} /></td>
                </tr>
                <tr>
                    <td><b>비밀번호</b></td>
                    <td><input type="text" name='password' value={form.password} onChange={onChange}/></td>
                </tr>
                <tr>
                    <td htmlFor=""><b>이메일</b></td>
                    <td><input type="text" name='email' value={form.email} onChange={onChange}/></td>
                </tr>

                <tr>
                    <td htmlFor=""><b>이름</b></td>
                    <td><input type="text" name='name' value={form.name} onChange={onChange}/></td>
                </tr>

                <tr>
                    <td><b>전화번호</b></td>
                    <td><input type="text" name='phone' value={form.phone} onChange={onChange}/></td>
                </tr>

                <tr>
                    <td><b>생년월일</b></td>
                    <td><input type="text" name='birth' value={form.birth} onChange={onChange}/></td>
                </tr>
                <tr>
                    <td><b>주소</b></td>
                    <td><input type="text" name='address' value={form.address} onChange={onChange}/></td>
                </tr>
                <tr>
                    <td colSpan={2}><button type="submit">수정</button><br /></td>
                </tr>
            </tbody>
        </table>
    </form>)
}

export default UserModify