import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [formData, setFormData] = useState({})
    const Navigate = useNavigate();
    const handleData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData);

    }
    const addUser = (e) => {
        e.preventDefault()
        const userData = localStorage.getItem('gfg')

        const data = JSON.parse(userData)
        console.log(data);
        if(data.uname === formData.uname &&
            data.email === formData.email)
            
            {
              localStorage.setItem('token', true)
            Navigate('/Portfolio')
            }
            else{
            //  if(!data.uname === !formData.uname && !data.email === !formData.email)
              alert("wrong credentials")
            //  else{
            //   alert("please register before logging")
            // }
            Navigate('/Register')
            }
    }

  return (
    <div>
    
      <form onSubmit={addUser}>
      <div className='card'>
      <div className='card-body'>
        <h3 style= {{color: "white" }}>Login</h3>
        <input
         class="form-control form-control-lg"
          style={{ borderRadius: "4px" }}
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
          onChange={handleData}
        />
        <br/>
        <br/>
        <input
          class="form-control form-control-lg"
          type="email"
          placeholder="Enter Email"
          name="email"
          required
          onChange={handleData}
        />
        <br/>
        <br/>
        <button class="btn btn-primary">Login</button>
        </div>
    </div>     
      </form>
    
    </div>
  );
}
