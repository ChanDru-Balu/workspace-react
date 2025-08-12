
import './App.css'

function App() {
  return (

    <main>
      <h1>TO-DO List</h1>

      <div className="input-container">
        <input type='text' />
        <button>+</button>
      </div>

      <div className="container">
        <div className="todo">
          <p>Go to the Gym</p>
          <div className="actions">
            <input type="checkbox" name="" id="" />
            <button>Delete</button>
          </div>
        </div>
      </div>

    </main>

  )
}

export default App
