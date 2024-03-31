import React from 'react'

export default function Portfolio() {
  const userData = localStorage.getItem('gfg')
  console.log(userData);
  const data =JSON.parse(userData)
  console.log(data.uname);

  return (
    <div>Portfolio
      <div style={{backgroundColor: 'lightgreen', width:'50rem',height:'30rem',margin:'auto'}}>

        <h3>Username : {data.uname}</h3>
        <h3>Email : {data.email}</h3>

      </div>
    </div>
  )
}
