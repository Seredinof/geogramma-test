<template>
    <v-app>
        <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                    <v-toolbar-title>Авторизация</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                    <v-text-field prepend-icon="person" name="login" label="Имя пользователя" type="text" v-model="login"></v-text-field>
                    <v-text-field id="password" prepend-icon="lock" name="password" label="Пароль" type="password" v-model="pass"></v-text-field>
                    </v-form>
                </v-card-text>
                <v-alert :value="error" type="error">
                    {{ this.error }}
                </v-alert>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" :disabled="disabled" @click="handleClick">Вход</v-btn>
                </v-card-actions>
                </v-card>
            </v-flex>
            </v-layout>
        </v-container>
        </v-content>
    </v-app>
</template>

<script>

export default {
    name: 'login',
    data(){
        return {
            login: null,
            pass: null,
            user: this.$store.state.user
        }
    },
    computed: {
        disabled: function() {
            return !(this.login && this.pass)
        },
        error: function() {
            return this.user.errorLogin
        }
    },
    watch: {
        'user.attributes': function (a) {
            if(a.token) {
                localStorage.token = a.token;
                this.$router.push('/');
            }
        }
    },
    methods: {
        handleClick: function() {
            this.$store.dispatch('login', {
                login: this.login,
                pass: this.pass
            });
        }
    },
    mounted() {
        console.log(this.user);
    }
}
</script>

