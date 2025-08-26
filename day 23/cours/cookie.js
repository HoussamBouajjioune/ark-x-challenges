// const express = require('express');
// const cookieParser = require('cookie-parser');

// const app = express();

// // middleware to parse cookies
// app.use(cookieParser());

// // ✅ Set secure cookie
// app.get('/set-cookie', (req, res) => {
//   res.cookie('user', 'houssam bouajjioune', {
//     maxAge: 900000,   // cookie expiry time
//     httpOnly: true,   // JS cannot access this cookie (XSS protection)
//     secure: false,     // only sent over HTTPS
//     sameSite: 'Strict' // CSRF protection
//   });
//   res.send('Secure cookie set');
// });

// // ✅ Get cookie
// app.get('/get-cookie', (req, res) => {
//   const user = req.cookies.user;
//   if (user) {
//     res.send(`Cookie found: ${user}`);
//   } else {
//     res.send('No cookie found');
//   }
// });

// // ✅ Delete cookie
// app.get('/delete-cookie', (req, res) => {
//   res.clearCookie('user');
//   res.send('Cookie deleted');
// });

// // Start server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });


const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

// 🔹 Route qui définit un cookie normal (accessible en JS)
app.get('/set-normal-cookie', (req, res) => {
  res.cookie('normalCookie', 'IAmVisibleInJS', {
    maxAge: 600000 // 10 min
    // pas de HttpOnly
  });
  res.send('Normal cookie set');
});

// 🔹 Route qui définit un cookie sécurisé HttpOnly
app.get('/set-httponly-cookie', (req, res) => {
  res.cookie('httpOnlyCookie', 'SecretSessionToken123', {
    maxAge: 600000,   // 10 min
    httpOnly: true,   // ❌ JS ne peut pas le lire
    secure: false,    // ⚠️ mettre true en prod (HTTPS)
    sameSite: 'Strict'
  });
  res.send('HttpOnly cookie set');
});

// 🔹 Route pour afficher cookies côté serveur
app.get('/get-cookie-server', (req, res) => {
    // console.log(document.cookie); // Erreur : document n'est pas défini côté serveur;
  res.send(`Cookies received on server: ${JSON.stringify(req.cookies)}`);
});

// 🔹 Route pour supprimer les cookies
app.get('/delete-cookies', (req, res) => {
  res.clearCookie('normalCookie');
  res.clearCookie('httpOnlyCookie');
  res.send('Cookies deleted');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});



