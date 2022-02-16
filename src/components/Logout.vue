<template>
    <div>
        <form @submit.prevent="submitForm">
            <h3>Logout?</h3>
            <button>Confirm</button>          
        </form>
    </div>
</template>

<script>
import { app } from "../main.js";

export default {
    methods: {
        submitForm() {
            app.config.globalProperties.$displayName = "";
            app.config.globalProperties.$idToken = "";
            app.config.globalProperties.$expiresIn = "";
            app.config.globalProperties.$authenticated = false;
            this.$router.replace("/login");               
        },
    },
};
</script>

<style scoped>
div {
    background: rgb(193, 193, 193);
    padding: 10px;
    margin: 5px;
}
</style>