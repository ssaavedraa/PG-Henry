import './App.css';
import NavBar from './components/navbar/navbar.component';
import { db } from './firebaseConfig';
import { useDispatch } from 'react-redux'
import { startGoogleLogin, startLogout } from './redux/actions/actionAuth';
import { useForm } from './hooks/useForm';
import { BtnGoogle } from './components/BtnGoogle';


function App() {


  const [  values, handleInputChange, reset ] = useForm({
    nameValue: '',
    email: '',
    password: ''
  })
  const { nameValue, email, password } = values;


  const dispatch = useDispatch();
  const handleGoogle = () => {
    dispatch(startGoogleLogin())
  }

  const handleLogout = () => {
    dispatch(startLogout())
  }

  const handledFormSubmit =(e) => {
    
    e.preventDefault()
    console.log(values)
  }
  console.log(db)
  return (
    <div className="App">
      <NavBar />
      <button onClick={handleGoogle}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      <br /> <br />
      <BtnGoogle/>
      <br />
      <br />


      <div>
        <form onSubmit={handledFormSubmit}>
          <label>Register</label>

          <input
            type='text'
            name='nameValue'
            placeholder='Name'
            autoComplete='off'
            value={nameValue}
            onChange={handleInputChange}
          ></input>


          <input
            type='text'
            name='email'
            placeholder='Email'
            autoComplete='off'
            value={email}
            onChange={handleInputChange}
          ></input>

          <input
            type='password'
            name='password'
            placeholder='Password'
            autoComplete='off'
            value={password}
            onChange={handleInputChange}
          ></input>
          <button type='submit'></button>
        </form>
      </div>
    </div>
  );
}

export default App;
