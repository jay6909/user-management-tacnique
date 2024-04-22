import React from 'react'
import {Create, SimpleForm, TextInput} from 'react-admin'
const UserCreate = (props) => {
  return (
    <Create title='add user' {...props}>
        <SimpleForm>
            <TextInput source='name'/>
            <TextInput source='email' />
            <TextInput label='Deptartment' source='company.bs'/>
        </SimpleForm>
    </Create>
  )
}

export default UserCreate