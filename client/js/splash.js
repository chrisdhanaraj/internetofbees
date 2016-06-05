var loginButton = document.getElementById("signin");
var signUpButton = document.getElementById("signup");

if (loginButton) {
    loginButton.addEventListener('click', function(evt) {
      window.fetch('http://localhost:3000/api/user/signin', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: document.querySelector("#usr").value,
          password: document.querySelector("#pwd").value
        })
      })
      .then(res => res.json())
      .then(data => {
        window.localStorage.setItem('bID', data.id);
        window.localStorage.setItem('bToken', data.token);
        console.log(data);
        window.location = '/apiaries';
    })
      .catch(err => {
          var errorElement = document.getElementById('error');

          errorElement.classList.remove('hidden');
          errorElement.classList.add('visible');
    })
  })
};

if (signUpButton) {

signUpButton.addEventListener('click', function(evt) {
      window.fetch('http://localhost:3000/api/user/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: document.querySelector("#usr").value,
          password: document.querySelector("#pwd").value
        })
      })
      .then(res => res.json())
      .then(data => {
        window.localStorage.setItem('bID', data.id);
        window.localStorage.setItem('bToken', data.token);
        window.location = '/apiaries';
    })
      .catch(err => {
          var errorElement = document.getElementById('error');
          errorElement.classList.remove('hidden');
          errorElement.classList.add('visible');
    })
  })
};
