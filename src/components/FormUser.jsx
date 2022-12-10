import React, {useEffect} from "react"
import { useForm } from 'react-hook-form'
import './styles/formUsers.css'

const FormUser = ({createNewUser, updateInfo, updateUserById,setUpdateInfo,setFormIsClose}) => {

useEffect(() => {
  reset(updateInfo)
}, [updateInfo])



const {register,reset,handleSubmit} = useForm()

  const submit = data => {
    if (updateInfo) {
      updateUserById(updateInfo.id, data)
      setUpdateInfo()
    } else {
      createNewUser(data)
    }
    
    reset({
      email: "",
      first_name: "",
      last_name: "",
      birthday: "",
      password:""
    })
    setFormIsClose(true)
}
  
const hanldeCloseForm = () => {
  setFormIsClose(true)
}
  
  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <div><i onClick={hanldeCloseForm} className="form_x fa-regular fa-circle-xmark"></i></div>
      <h2 className="form_title">{updateInfo ? 'Update User' : 'Create User'}</h2>
      <div className="form_div">
        <label className="form_label" htmlFor='email'>Email</label>
          <input className="form_input" placeholder="Enter your e-mail" type="text" id='email' {...register("email")} />
      </div>
      <div className="form_div">
        <label className="form_label" htmlFor='password'>Password</label>
          <input className="form_input" placeholder="Enter your password" type="password" id='password'{...register("password")} />
      </div>
      <div className="form_div">
        <label className="form_label" htmlFor='first_name'>First Name</label>
          <input className="form_input" placeholder="Enter your first name" type="text" id='first_name'{...register("first_name")} />
      </div>
      <div className="form_div">
        <label className="form_label" htmlFor='last_name'>Last Name</label>
          <input className="form_input" placeholder="Enter your last name" type="text" id='last_name'{...register("last_name")} />
      </div>
        <div className="form_div">
        <label className="form_label" htmlFor="birthday">Birthday</label>
        <input className="form_input" type="date" id="birthday"{...register("birthday")} />
      </div>
      <button className="form_btn">Submit</button>
    </form>

  )
}

export default FormUser