<script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-auth-compat.js"></script>

<script>
  const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "veste-web.firebaseapp.com",
    projectId: "veste-web",
    storageBucket: "veste-web.appspot.com",
    messagingSenderId: "347874327765",
    appId: "1:347874327765:web:5d35196c3afc792c9cf65c"
  };

  firebase.initializeApp(firebaseConfig);

  function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  function register() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        alert("Cadastro realizado com sucesso!");
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  function logout() {
    firebase.auth().signOut()
      .then(() => {
        alert("Deslogado com sucesso!");
      });
  }
</script>