import React, {useState, useRef, useEffect } from 'react';
import './SignupPage.css';
import {Grid, Form, Button, Header, Image, Segment, Message } from 'semantic-ui-react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import { useForm } from '../../hooks/useForm';
import userService from '../../utils/userService';
import { useHistory } from 'react-router-dom';

export default function SignUpPage(props){
  const [invalidForm, setValidForm] = useState(false);
  const [error, setError] = useState('');
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConf: '',
    bio: ''
  });
  const history = useHistory()
  const [selectedFile, setSelectedFile] = useState('');

  function handleFileInput(e){
    setSelectedFile(e.target.files[0]);
  };

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  async function handleSubmit(evt){
    evt.preventDefault();
    const formData = new FormData();
    formData.append('photo', selectedFile);
    
    for(let key in state){
      formData.append(key, state[key]);
    }

    try{
      await userService.signup(formData);
      props.handleSignUpOrLogin();
      history.push('/');
    }catch(err){
      setError(err.message);
    }
  }

  return (
    <>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Sign Up    
          </Header>            
            <Form autoComplete="off"  onSubmit={handleSubmit}>
            <Segment stacked>               
                <Form.Input                    
                  name="username"
                  placeholder="username"
                  value={state.username}
                  onChange={handleChange}
                  required
                />
                <Form.Input
                  type="email"                  
                  name="email"
                  placeholder="email"
                  value={ state.email}
                  onChange={handleChange}
                  required
                />
                <Form.Input             
                  name="password"
                  type="password"
                  placeholder="password"
                  value={ state.password}
                  onChange={handleChange}
                  required
                />
                <Form.Input     
                  name="passwordConf"
                  type="password"
                  placeholder="Confirm Password"
                  value={ state.passwordConf}
                  onChange={handleChange}
                  required
                />
                <Form.TextArea label='bio' placeholder='Tell us more about your dogs...' onChange={handleChange} name="bio"/>
                <Button
                  type="submit"
                  className="btn"
                  disabled={invalidForm}
                >
                Signup
              </Button>
              </Segment>
              {error ? <ErrorMessage error={error} /> : null}
            </Form>
           
        </Grid.Column>
      </Grid>
    </>
  );
}
