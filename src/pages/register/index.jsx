import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

import "../../styles/cardPage.css";

function Register() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [users, setUsers] = useState([]);

  function handleRegister(e) {
    e.preventDefault();

    //manda os dados para o backend cadastrar
  }

  return (
    <div className="container">
      <Card className="login">
        <h1>Cadastro</h1>
        <TextField
          className="login-input"
          margin="dense"
          value={name}
          label="Nome"
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          type="text"
          required
        />
        <TextField
          className="login-input"
          margin="dense"
          value={email}
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          type="email"
          required
        />
        <TextField
          className="login-input"
          margin="dense"
          value={age}
          label="Idade"
          onChange={(e) => setAge(e.target.value)}
          variant="outlined"
          type="number"
          required
        />
        <TextField
          className="login-input"
          margin="dense"
          value={username}
          label="Usuário"
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          type="text"
          required
        />
        <TextField
          className="login-input"
          margin="dense"
          value={password}
          label="Senha"
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          type="password"
          required
        />
        <Button
          onClick={handleRegister}
          variant="contained"
          type="submit"
          color="success"
        >
          Cadastrar &nbsp;
          <HowToRegIcon />
        </Button>
        <br />
        <span>
          <Link to="/login">Voltar para Login</Link>
        </span>
      </Card>
    </div>
  );
}

export default Register;
