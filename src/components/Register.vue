<template>
    <div>
        <h3>Create an account</h3>
        <form @submit.prevent="submitForm">
            <p>
                <label for="email">Email: </label>
                <input id="email"  type = "Email" placeholder = "Email" v-model="email" />
            </p>
            <p>
                <label for="pass1">Password: </label>
                <input id="pass1"  type = "password" placeholder = "Password" v-model="pass1" />
            </p>
            <p>
                <label for="pass2">Confirm Password:</label>
                <input id="pass2"  type = "password" placeholder = "Confirm Password" v-model="pass2" />
            </p>
            <button>Create Account</button>          
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            pass1: "",
            pass2: "",

        };
    },
    methods: {
        submitForm() {
            console.log(
                this.email + 
                " " + 
                this.pass1 + 
                " " + 
                this.pass2
            );
            if (this.pass1 === this.pass2) {
                // alert("OK");
                fetch(
                    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC4whwWCkWujIMySOwoWBkoZ2qtKa7aq28",
                    {
                        method: "POST",
                        body: JSON.stringify(
                            {
                                displayName: this.studentId,
                                email: this.email,
                                password: this.pass1,
                                returnSecureToken: true,
                            }
                        ),
                    }
                )
                 .then((response) => response.json())
                 .then((data) => {
                     if (data.error != null) {
                         console.log("ERROR: signUp");
                         console.log(data.error);
                         alert(data.error.message)
                     }
                     else {
                         alert("Proceed to login page");
                         this.$router.replace("/login");  // cannot come back to /register
                     }
                 })
                 .catch((error) => console.log(error));
            }
            else {
                alert("The passwords do not match.");
            }
        },
    },
};
</script>

<style scoped>
div {
    background: rgb(255, 247, 129);
    padding: 10px;
    margin: 5px;
}
</style>
