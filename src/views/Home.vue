<template>
    <div>
        <form @submit.prevent="login">
            <h2>Login</h2>
            <div class="container">
                <input type="email" placeholder="Email..." v-model="email" />
                <input
                    type="password"
                    placeholder="Password..."
                    v-model="password"
                />
                <button type="submit">Login</button>
            </div>
            <button @click="googleSignIn">
                Login con Google
            </button>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Home',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        login() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    console.log('Logueado correctamente.');
                    this.$router.push('/dashboard');
                })
                .catch(error => {
                    console.log(error.message);
                });
        },
        googleSignIn: function() {
            let provider = new firebase.auth.GoogleAuthProvider();
            firebase
                .auth()
                .signInWithPopup(provider)
                .then(result => {
                    let token = result.credential.accessToken;
                    let user = result.user;
                    console.log(token); // Token
                    console.log(user); // User that was authenticated
                })
                .catch(err => {
                    console.log(err); // This will give you all the information needed to further debug any errors
                });
        },
    },
};
</script>
