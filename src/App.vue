<template>
 <v-app>
    <v-app-bar app color="green darken-2">
       <v-spacer></v-spacer>
        <h2 class="text-justify text-uppercase font-weight-thin" style="color:#C62828;">Pizza Delivery</h2>
          <subtitle-2 style="color:#fff;" class="mt-2">...today's special: your pizza extra round!</subtitle-2>
       <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
    <router-view/>
    </v-main>
 </v-app>
</template>
