<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Inicio</router-link> |
            <router-link to="/register">Registro</router-link> |
            <router-link to="/dashboard">Dashboard</router-link> |
            <button @click="logout">Salir</button>
        </div>
        <router-view />
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    methods: {
        logout() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    alert('Has cerrado sesion correctamente.');
                    this.$router.push('/');
                })
                .catch(error => {
                    alert(error.message);
                    this.$router.push('/');
                });
        },
    },
};
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
}
#nav a {
    font-weight: bold;
    color: #2c3e50;
}
#nav a.router-link-exact-active {
    color: #42b983;
}
input {
    margin-right: 20px;
}
</style>
