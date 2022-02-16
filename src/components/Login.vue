<template>
    <div>
         <h3>Login</h3>
        <form @submit.prevent="submitForm">
            <p>
                <label for="email">Email: </label>
                <input id="email" type = "email" placeholder= "Email" v-model="email" />
            </p>
            <p>
                <label for="password">Password: </label>
                <input id="password" type = "password" placeholder = "Password" v-model="password" />
            </p>
            <button>Login</button>          
        </form>
        <p>No account?</p>
        <button @click= "register">Register Here</button>
    </div>
</template>

<script>
import { app } from "../main.js";

export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        register() {
            this.$router.replace("/register");
        },
        submitForm() {
            console.log(this.email + " " + this.password);
            const URL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC4whwWCkWujIMySOwoWBkoZ2qtKa7aq28";
            fetch(URL, {
                method: "POST",
                body: JSON.stringify({
                    email: this.email,
                    password: this.password,
                    returnSecureToken: true,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                console.log(data);
                if (data.error != null) {
                    console.log("ERROR");
                    console.log(data.error);
                    alert(data.error.message);
                }
                else {
                    app.config.globalProperties.$displayName = data.displayName;
                    app.config.globalProperties.$idToken = data.idToken;
                    app.config.globalProperties.$expiresIn = data.expiresIn;
                    app.config.globalProperties.$authenticated = true;
                    this.$router.replace("/chiangmai");
                }
                })
                .catch((error) => console.log(error));
        },
    },
};
</script>

<style scoped>
div {
    background: rgb(136, 243, 170);
    padding: 10px;
    margin: 5px;
}
</style>
