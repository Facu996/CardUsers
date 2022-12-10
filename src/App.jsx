
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import  UserCard  from './components/UserCard'
import useCrud from './hooks/useCrud'

function App() {

  const { users,
    updateUserById,
    deleteUserById,
    createNewUser,
    getAllUsers }
    = useCrud()

  const [updateInfo, setUpdateInfo] = useState()
  const [formIsClose, setFormIsClose] = useState(true)

useEffect(() => {
      getAllUsers()
    }, [])
  
  const handleOpenForm = () => {
  setFormIsClose(false)
}
  
  return (
    <div className="App">
      <div className='app_container-title'>
      <h1 className='app_title'>Users CRUD</h1>
      <button onClick={handleOpenForm} className='app_btn'>Create a New User</button>
      </div>
      <div className={`form_container ${formIsClose && 'disable_form'}`}><FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        setFormIsClose={setFormIsClose}
      />
      </div>
      <div className='user-container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setFormIsClose={setFormIsClose}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
