import { useEffect, useState } from 'react'
import './App.css'

function Scoring() {
  const [score, setcount] = useState(10)

  return (
    <>
      <h1>{score}</h1>

      <button onClick={() => setcount(score + 5)}>
        Click me and get your score increased
      </button>
    </>
  )
}

function StatusCheck() {
  const [status, setcount] = useState("offline")
  return (
    <>
      <h1>{status}</h1>
      {status === "online" ? <p>"online"</p> : <p>"offline!"</p>}
      <button onClick={() => setcount(status === "offline" ? "online" : "offline")}>
        click me to change your status
      </button>
    </>
  )
}


function MyNames() {
  const names = ["Ali", "Ahmed", "Sara"]
  return <>
  
  <h1>Here are all my names</h1>
  {names.map((name) => {
    return <h2>{name}</h2>
  })} 
  </>
}

function Info (){

  const users = [
  { name: "Ali", age: 16 },
  { name: "Ahmed", age: 17 },
  { name: "Sara", age: 15 }
]

return <>
<h1>Names and their ages</h1>
{users.map((item)=>{
  return <>
  <h2>{item.name}</h2>
  <h2>{item.age}</h2>
  </>
})}
</>
}

const users = [
  { name: "Ali", age: 16 },
  { name: "Ahmed", age: 17 },
  { name: "Sara", age: 15 }
]

 
function User({name, age}){
  return <h1>{name}-{age}</h1>
}


function Test(){
  return<>
{users.map((user)=>{
  return <User name={user.name} age={user.age} />
})}
</>
}


const userss=[
  {id:1 , name:"ali"},
  {id:2 , name:"ahmed"},
  {id:3 , name:"sara"}
]

function Comp ({name}){
  return <h1>{name}</h1> 
}

function Result (){
  return<>
  {userss.map((user)=>{
    return <Comp name={user.name} key={user.id} />
  })}
  </>
}


function Display_names(){
  const [Names,setNames]=useState(["ali","Ahmed"]);
  return<>
  {Names.map((name)=>{
    return <h1>{name}</h1>
  })}
  <button onClick={() => setNames([...Names,"sara"])}>
   "Click here to add Sara plz"
  </button>
  <button onClick={() => setNames([Names.filter((name)=> name!=="ali")])}>
   "Click here to remove ali plz"
  </button>
  <button onClick={() => setNames([...Names,"ali"])}>
   "Click here to add ali back "
  </button>
  <button onClick={() => setNames(
  Names.map((name) => {
    if (name === "ahmed") {
      return "hassan"
    }

    return name
  })
)}>
  Click here to change Ahmed into Hassan
</button>

  </>
}

function Test_t(){
  const [name,setName]=useState("")
  const [age,setAge]=useState("")
  return<>
  <input 
    value={name}
    onChange={(e)=>setName(e.target.value)}
  />

  <input 
    value={age}
    onChange={(e)=>setAge(e.target.value)}
  />
  <h2>Hello {name},you are {age} years old</h2>
  </>
}

function TEST(){
  const[isChecked,setIsChecked]=useState(false)
  return<>
  <input
  type="checkbox"
  checked={isChecked}
  onChange={(e)=>setIsChecked(e.target.checked)}
  />
  </>
}

function Country (){
  const [country, setCountry] = useState("")
  return<>
<select
  value={country}
  onChange={(e) => setCountry(e.target.value)}
>
  <option value="">Choose a country</option>
  <option value="Pakistan">Pakistan</option>
  <option value="India">India</option>
  <option value="Turkey">Turkey</option>
</select>
<h2>You selected: {country}</h2>
</>
}


function Fruits(){
  const [fruit,setFruit]=useState("")
  return<>
  <select
  value={fruit}
  onChange={(e)=>setFruit(e.target.value)}
  >
    <option value="">Choose a fruit</option>
    <option value="apple">apple</option>
    <option value="banana">banana</option>
    <option value="mango">mango</option>
  </select>
  <h1>{fruit}</h1>
  </>
} 

function FormTest() {
  const [name,setName]=useState("")
  
  function handlesubmit(){
    document.write(name)
 }

   return<>
  <form
  onSubmit={(e)=>{
      e.preventDefault()
      handlesubmit()
  }}>
  <input
  value={name}
  onChange={(e)=>setName(e.target.value)}
  />
  <button type="submit">
    submit
  </button>
  </form>
  </>
}


function Child(props){
  return(
  <button onClick={props.onclicking}>
    click this button to display a message for yourseld
  </button>
  )
}
function Parent(){
  function Message(){
    return (
    document.write("Button is clicked!")
    )
  }
  return <Child onclicking={Message}/>

}

function TEst(){
  const [name, setName]=useState("")
      useEffect(() => {
document.title = "name=" + name
}, [name])
  return(
    <input
    value={name}
    onChange={(e)=>setName(e.target.value)}
    />
) 
}








function App() {
  return (
    <>
      <TEst />
    </>
  )
}


export default App
