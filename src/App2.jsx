import Header from "./componentsFilhos/Header"
import Entry from "./componentsFilhos/Entry"
import data from "./data"
function App2() {
  const entryData = data.map((dados)=>{
    return <Entry 
      obj = {dados}
    />
  })
  return (
    <>
    <Header />
    {entryData}
    </>
  )
}

export default App2
