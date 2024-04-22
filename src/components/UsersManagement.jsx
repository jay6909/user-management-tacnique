import React from 'react'
import {Admin, Resource} from 'react-admin'
import UserList from './UserList'
// import restProvider from 'ra-data-simple-rest'
import { dataProvider } from '../helpers/usersDataProvider'
import UserCreate from './UserCreate'
const UsersManagement = () => {
  return (
    <Admin dataProvider={dataProvider}>
        <Resource name='users' list={UserList} create={UserCreate}/>
    </Admin>
  )
}

export default UsersManagement