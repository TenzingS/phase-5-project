import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom"


const Login = ({setUser}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newName, setNewName] = useState('');

    let history = useHistory();

    function signUp(e) {
        e.preventDefault();
        const formData= {name: newName, email: newEmail, password:newPassword}

        fetch('/signup', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json()) 
        .then((user) => { 
            if (user) {
            setUser(user)
            history.push('/home')
            }
        });
        }
    
    function logIn(e) {
        e.preventDefault();

        fetch('/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        })
        .then((r) => r.json()) 
        .then((user) => { 
            if (user) {
            setUser(user)
            history.push('/home')
            }
        });
        }

    return (
        <div>
            <h1 className='nba-today'>Welcome to NBA Today! </h1>
            <div className="LoginFormContainer" >
            <form onSubmit = {logIn}>
                <h3>Login!</h3>
                <label>
                    <p>Username:</p>
                    <input
                    value = {name}
                    onChange ={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Username..."
                    required
                    />
                </label>
                <label>
                    <p>E-mail:</p>
                    <input 
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                    type="text" 
                    placeholder="E-mail..."
                    required
                    />
                </label>
                <label>
                    <p>Password:</p>
                    <input 

                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    type="password" 
                    placeholder="Password..." 
                    required
                    />
                </label>
                <div>
                    <button className="Button" type="submit">Login</button>
                </div>
            </form>
            <br/>
            <form onSubmit = {signUp}>
                <h3>Become a user!</h3>
                <label>
                    <p>Username:</p>
                    <input
                    value = {newName}
                    onChange ={(e) => setNewName(e.target.value)}
                    type="text"
                    placeholder="Username..."
                    required
                    />
                </label>
                <label>
                    <p>E-mail:</p>
                    <input 
                    value = {newEmail}
                    onChange = {(e) => setNewEmail(e.target.value)}
                    type="text" 
                    placeholder="E-mail..."
                    required
                    />
                </label>
                <label>
                    <p>Password:</p>
                    <input 

                    value = {newPassword}
                    onChange = {(e) => setNewPassword(e.target.value)}
                    type="password" 
                    placeholder="Password..." 
                    required
                    />
                </label>
                <div>
                    <button className="Button" type="submit">Signup</button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default Login;