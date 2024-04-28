import "../css/title.css"
import "../css/login.css"


function App() {
  return (
    <>
      <h1 className="title">Micro-Emprendimientos</h1>
      <Login />
    </>
  
  )
}

function Login() {
  return(
    <>
    <div className='login'>
      <h5>Ingresar</h5>
      <input className='controles' type="text" name='usuario'  placeholder='Usuario' />
      <input className='controles' type="password" name='password'  placeholder='Password' />
      <input className='boton' type="submit" name='' placeholder='Auth' formTarget='_blank'/>
      <p><a href="#">forgot your password?</a></p>
    </div>
    </>
  );
  
}


export default App
