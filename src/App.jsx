import './App.css'

function App() {
  return (
    <>
    <Text display ="whats up" />
    <Text display ="Hello"/>
    </>
  )
}



function Text({display}) {
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}



export default App
