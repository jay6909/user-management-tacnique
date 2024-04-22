import React from 'react'
import {List, Datagrid, TextField, EditButton, DeleteButton} from 'react-admin'
const UserList = (props) => {
    console.log(props)
  return (
    <List {...props}>
        <Datagrid rowClick="edit"  >
            <TextField source='id'/>
            <TextField source='name'/>
            <TextField source='email'/>
            <TextField label='Deptartment' source='company.bs'/>
            <EditButton basepath='/users'/>
            <DeleteButton  basepath='/'/>
        </Datagrid>
    </List>
  )
}

export default UserList