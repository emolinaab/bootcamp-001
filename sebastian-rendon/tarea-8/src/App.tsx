import React, { useState } from 'react';
import './App.css';
import FormBtn from './components/FormBtn';
import FormContainer from './components/FormContainer';
import FormField from './components/FormField';

function App() {
  const [form, setForm] = useState({ username: '', password: '' });

  return (
    <main>
      <FormContainer onSubmit={() => {}}>
        <h3>Sign in</h3>
        <hr
          style={{
            backgroundColor: 'skyblue',
            color: 'skyblue',
            borderStyle: 'solid',
          }}
        />
        <section className="form-fields">
          <FormField
            label="Username"
            inputId="username"
            inputType="text"
            value={form.username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setForm({ ...form, username: e.target.value });
            }}
          />
          <FormField
            label="Password"
            inputId="password"
            inputType="password"
            value={form.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setForm({ ...form, password: e.target.value });
            }}
          />
          <FormBtn label="Sign in" />
        </section>
      </FormContainer>
    </main>
  );
}

export default App;
