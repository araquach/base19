<template>
    <section class="blog hero is-fullheight is-dark">
        <div class="hero-body show columns">
            <div class="section column is-5">
                <h1 class="title">Blog</h1>
                <h2 class="subtitle">All the latest new from Base</h2>
                <router-link :to="{ name: 'blog-info' }" class="button">Read more</router-link>
            </div>
        </div>
    </section>
</template>