import React from 'react'
import {Admin, Resource, SearchInput} from 'react-admin'
import UserList from './UserList'
// import restProvider from 'ra-data-simple-rest'
import { dataProvider } from '../helpers/usersDataProvider'
import UserCreate from './UserCreate'
import UserEdit from './UserEdit'
const UsersManagement = () => {
  return (
    <Admin dataProvider={dataProvider}>
        <Resource name='users' edit={UserEdit} list={UserList( {filters:[<SearchInput source="q"/>]},)} create={UserCreate}/>
    </Admin>
  )
}

export default UsersManagement