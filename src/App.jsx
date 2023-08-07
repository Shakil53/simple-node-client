
import './App.css'

function App() {

  const handleUser = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log(user)

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          alert('User Added Successfully')
          form.reset();
        }
      })
  }


  return (
    <>

      <h1>Simple Crud </h1>
      <form onSubmit={handleUser}>
        <input type='name' name='name'></input>
        <br></br>
        <input type='email' name='email'></input>
        <br></br>
        <input type='submit' value='Add User'></input>
      </form >

    </>
  )
}

export default App
