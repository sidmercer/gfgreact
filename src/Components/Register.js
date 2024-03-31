import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Register(props) {
    const [formData, setFormData] = useState({})
    const navigate=useNavigate()
    const handleData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData);

    }
    function addUser(e) {
    e.preventDefault();
    
    const data = JSON.stringify(formData);
    
    localStorage.setItem('gfg', data);
    // localStorage.setItem('token', false)
    navigate("/login");
  }

    return (
        <div>
        
            <form onSubmit={addUser}>
                <div className='card '>
                <div className="card-body">
                    <h3 style={{ color: "white" }}>Register</h3>
                <input class="form-control form-control-lg" type='text' placeholder='Enter Username' name='uname' required
                    onChange={handleData}/>
                    <br/>
                    <br/>
                <input class="form-control form-control-lg" type='email' placeholder='Enter Email' name='email' required
                    onChange={handleData}/>
                    <br/>
                    
                <button class="btn btn-primary" >Add User</button>
                </div>
                 </div>
            </form>
            
        </div>
    );
}

export default Register;