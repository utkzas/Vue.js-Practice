<template>
    <nav>
        <v-toolbar flat app>
            <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
                
            <v-toolbar-title>
                <span class="font-weight-light">
                   Todo
                </span>
                <span>
                    List
                </span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn color="grey">
                <span>Sign Out</span>
                <v-icon right>mdi-logout</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" app class="indigo">
            <p>test</p>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data () {
        return {
            drawer:false
        }
    }
}
</script>