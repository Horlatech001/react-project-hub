// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const Dashboard = () => {
//     const navigate = useNavigate()
//     const token = localStorage.getItem('token')

//     if (!token) navigate('/login')

//     return (
//         <div>
//             <h1>only authenticated users can see this page</h1>
//         </div>
//     )
// }

// export default Dashboard
// const [
//     createUserWithEmailAndPassword,
//     user,
//     loading,
//     error,
// ] = useCreateUserWithEmailAndPassword(auth);

// const firstNameRef = useRef('')
// const lastNameRef = useRef('')
// const addressRef = useRef('')
// const phoneRef = useRef('')
// const emailRef = useRef('')
// const passwordRef = useRef('')

// const submitHandler = async (e) => {
//     e.preventDefault();

//     if (emailRef.current.value.trim('') === '' || passwordRef.current.value.trim('') === '') return
//     const email = emailRef.current.value
//     const password = passwordRef.current.value
//     console.log(email, password)
//     createUserWithEmailAndPassword(email, password)
//     console.log(user)
// }


// const emailRef = useRef('')
//     const passwordRef = useRef('')

//     const navigate = useNavigate()

//     const [
//         signInWithEmailAndPassword,
//         user,
//         loading,
//         error,
//     ] = useSignInWithEmailAndPassword(auth);

//     const submitHandler = async (e) => {
//         e.preventDefault()

//         if (emailRef.current.value.trim('') === '' || passwordRef.current.value.trim('') === '') return
//         const email = emailRef.current.value
//         const password = passwordRef.current.value
//         signInWithEmailAndPassword(email, password)

//         if (!user) return
//         localStorage.setItem('token', user.user.accessToken)
//         { user && navigate('/') }

//     }

//     const logoutHandler = () => {
//         localStorage.removeItem('token');
//         { !user && navigate('/') }
//     }