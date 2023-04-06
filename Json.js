const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Navigation menu</title>
     
  <style>
  
  .navbar{
  background-color:rgb(78, 78, 78);
  font-size: larger;
  color:rgb(255, 255, 255);
  width: auto;
  height: 150px;
  padding-top: 6px;
  border-radius: 8px;
  }
  .navbar li{
      float:left;    
      list-style: none;
  
  
  }
  
  .navbar ul{
  overflow:auto;
  }
  .navbar li a{
      margin: 10px 12px;
      padding: 9px 9px;
      text-decoration: none;
      color: white;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  .navbar li a:hover{
      padding: 9px 9px;
      text-decoration: none;
      color: rgb(219, 219, 219);
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  
  
  .search{
      float: right;
      color:azure;
      padding: 0px 150px;
      border-radius: 5px;
  
  }
  .navbar input{
  border: 2px solid #1b1b1b
  border-radius: 4px;
  padding: 3px;
  
  }
  .welcome{
      padding: 21px 748px;
  font-family:  sans-serif;
  color: rgb(0, 0, 0);
  font-size: larger;
  font-style: normal;
  font-weight: 200;
  font-stretch: expanded;
  }
  
  img{
      width: fit-content;
  }
  
  
  </style>
  
  </head>
  
  <body>
      <img src="th.jpg" alt="Passu cones">
  
      <header>
  
          <nav class="navbar">
              <ul>
  
                  <li><a href="#">HOME</a></li>
                  <li><a href="#">ROOMS</a></li>
                  <li><a href="#">AMENITIES</a></li>
                  <li><a href="#">CONTACT US</a></li>
                  <li><a href="#">ABOUT</a></li>
              <div class="search">
                  <input type="text" name="search" id="search" placeholder="Search this website">
              </div>
  
              </ul>
          </nav>
     
      </header>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});