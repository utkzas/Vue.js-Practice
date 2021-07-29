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
        <v-navigation-drawer v-model="drawer" app class="primary" temporary>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    
                        <v-list-item-action>
                            <v-icon class="white--text">{{ link.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content-title class="white--text">
                            {{link.text}}
                        </v-list-item-content-title>
                        <v-spacer></v-spacer>
                    
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data () {
        return {
            drawer:false,
            links: [
                { icon : 'mdi-view-dashboard', text: 'Dashboard', route: '/'},
                { icon : 'mdi-food', text: 'Orders', route: '/orders'},
                { icon : 'mdi-account', text: 'Team', route: '/team'},
                                
            ]
        }
    }
}
</script>