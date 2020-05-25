<template>
    <section class="section blog-info hero is-fullheight is-dark">
        <h1 class="title is-3">{{ blogpost.title }}</h1>
        <div v-html="blogpost.body" class="column is-7">
            {{blogpost.body}}
        </div>
        <router-link :to="{name: 'blog-info', hash: '#' + blogpost.slug}">Back to all the blogs</router-link>
        <p class="is-size-7">Written by {{blogpost.author}}<br>{{blogpost.date}}</p>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                blogpost: {}
            }
        },

        created() {
            axios.get(`/api/blogpost/${this.$route.params.slug}`).then(response => this.blogpost = response.data)
                .catch(error => {
                    console.log(error)
                })
        }
    }
</script>