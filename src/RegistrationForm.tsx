import { useFormik } from 'formik';
import { signUpSchema } from './FormSchema';
const initialValues={
  name:"",
  email:"",
  password:"",
  confirm_password:"",
  phone:""
}
function RegistrationForm() {
 const Formik= useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit:(values)=>{
      console.log(values);
      alert("EVERYTHING LOOKS GOOD")
      
    }
  })
  console.log(Formik.errors);
//   function handleSubmit(event:React.FormEvent<HTMLFormElement>){
//     event.preventDefault();
//     console.log(event);
//     const formElements=event.currentTarget.elements;
//     const firstInputValue=(formElements[0] as HTMLInputElement).value;
//     console.log(firstInputValue);
// }
  return (
   <>
   <h1>Registration Form</h1>
   <form onSubmit={Formik.handleSubmit} method='POST'>
   <div>
      <label htmlFor='name'>NAME</label>
      <input type='text'
      name='name'
      id='name'
      value={Formik.values.name}
      onChange={Formik.handleChange}
      onBlur={Formik.handleBlur}
      />
      {Formik.touched.name && Formik.errors.name && <div  className='error'>{Formik.errors.name}</div>}
   </div>
   <div>
      <label htmlFor='email'>Email</label>
      <input type='text'
      name='email'
      id='email'
      value={Formik.values.email}
      onChange={Formik.handleChange}
      onBlur={Formik.handleBlur}
      />
      {Formik.touched.email &&Formik.errors.email && <div className='error'>{Formik.errors.email}</div>}

   </div>
   <div>
      <label htmlFor='phone'>Phone</label>
      <input type='text'
      name='phone'
      id='phone'
      value={Formik.values.phone}
      onChange={Formik.handleChange}
      onBlur={Formik.handleBlur}
      />
      {Formik.touched.phone &&Formik.errors.phone && <div className='error'>{Formik.errors.phone}</div>}

   </div>
    <div>
      <label htmlFor='password'>Password</label>
  
      <input type='password'
      name='password'
      id='password'
      value={Formik.values.password}
      onChange={Formik.handleChange}
      onBlur={Formik.handleBlur}
      />
      {Formik.touched.password &&Formik.errors.password && <div className='error'>{Formik.errors.password}</div>}

    </div>
<div>
      <label htmlFor='confirm_password'>Confrim Password</label>
  
      <input type='password'
      name='confirm_password'
      id='confirm_password'
      value={Formik.values.confirm_password}
      onChange={Formik.handleChange}
      onBlur={Formik.handleBlur}
      />
      {Formik.touched.confirm_password && Formik.errors.confirm_password && <div className='error'>{Formik.errors.confirm_password}</div>}

</div>
<button type='submit' >SUBMIT</button>
   </form>
   </>
  )
}

export default RegistrationForm