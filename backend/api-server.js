const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const secret_key = "abc1234567";

app.use(bodyParser.json());
app.use(cookieParser());

const members = [
  {
    id: 1,
    name: '에에에',
    loginId: 'aaa',
    loginPw: '111'
  },
  {
    id: 2,
    name: '비비비',
    loginId: 'bbb',
    loginPw: '222'
  }
]

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/api/account', (req, res) => {
  if(req.cookies && req.cookies.token) {
    
    jwt.verify(req.cookies.token, secret_key, (err,decoded) => {
      if(err) {
        res.clearCookie("token");
        res.send({rescode: 0});
      }
      else {
        console.log(decoded);
        res.send(decoded);
      }
    });
  }
  else {
    res.send({rescode: 0});
  }
})

app.post('/api/account', (req, res) => {
  console.log(req.body);
  const loginId = req.body.loginId;
  const loginPw = req.body.loginPw;

  console.log("loginId: ", loginId);
  console.log("loginPw: ", loginPw);

  const member = members.find(a => a.loginId === loginId);
  if(!member) {
    return res.send({rescode: 2});
  }
  if(member.loginPw !== loginPw) {
    return res.send({rescode: 3});
  }
  member.rescode = 1;

  const options = {
    domain: "localhost",
    path: "/",
    httpOnly: true,
  }

  const token = jwt.sign({
    id: member.id,
    name: member.name
  }, secret_key, {
    algorithm: "HS256",
    expiresIn: "1m",
    issuer: "omin"
  });
  res.cookie("token", token, options);

  res.send(member);
})

app.delete('/api/account', (req, res) => {
  if(req.cookies && req.cookies.token) {
    res.clearCookie("token");
  }
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})