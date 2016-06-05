window.fetch('localhost:3000/api/user/login')
  .then(res => res.json())
  .then(data => {
    window.localStorage.setItem('bID', data.id);
    window.localStorage.setItem('bID', data.token);
    window.location = '/dashboard';
})
  .catch(err => {
      var errorElement = document.getElementById('error');

      errorElement.classList.remove('hidden');
      errorElement.classList.add('visible');
});
