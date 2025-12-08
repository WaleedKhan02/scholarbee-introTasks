import CardComponent from './UserCard.jsx';

const Users = [
  {id: 1, Name: "Waleed Khan", age: 23},
  {id: 2, Name: "Asma Rauf", age: 25},
  {id: 3, Name: "Mubeen Basit", age: 20}
];



export default function App (){
//const filt = Users.map((user,index) => <CardComponent key={index} name={user} />) 
return(
  <>
    <CardComponent Users={{id: 1, name: "Waleed Khan", age: 23}}  />     

  </>
  )
}