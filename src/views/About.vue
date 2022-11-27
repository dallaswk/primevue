<template>
    <div>
        <form @submit.prevent="register">
            <h2>Registro de usuario</h2>
            <input type="email" placeholder="Email..." v-model="email" />
            <input
                type="password"
                placeholder="Password..."
                v-model="password"
            />
            <button type="submit">Registrar</button>
        </form>
    </div>
</template>
<script>
import firebase from 'firebase';

export default {
    name: 'Register',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        register() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    console.log('Registrado correctamente! Accede porfavor...');
                    this.$router.push('/');
                })
                .catch(error => {
                    console.log(error.message);
                });
        },
    },
};
</script>
