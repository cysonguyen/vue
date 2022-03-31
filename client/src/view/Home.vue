<script setup>

import Navigation from '../components/Navigation.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'

</script>

<template>
  <body>
        <Header/>
        <Navigation/>
        <div>
            <h1></h1>
        </div>
        <Footer/>
    </body>
</template>

<style>
    html{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    body{
        font-family: Georgia, 'Times New Roman', Times, serif;
        margin: 0;
    }
</style>
