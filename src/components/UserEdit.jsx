import React from 'react'
import {Edit, TextInput, SimpleForm} from 'react-admin'
const UserEdit = (props) => {
  return (
    <Edit {...props}>
  <SimpleForm>
            <TextInput source='name'/>
            <TextInput source='email' />
            <TextInput label='Deptartment' source='company.bs'/>
        </SimpleForm>
    </Edit>
  )
}

export default UserEdit