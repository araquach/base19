<template>
    <section class="section blog-info hero is-fullheight is-dark">
        <div class="column is-8">
            <h1 class="title is-3">{{ blogpost.title }}</h1>
            <figure class="image is-square">
                <img :src="blogpost.image">
            </figure>
            <br>
            <div v-html="blogpost.body" class="is-size-5">
                {{blogpost.body}}
            </div>
            <router-link :to="{name: 'blog-info', hash: '#' + blogpost.slug}" class="button">Back to all the blogs</router-link>
            <br><br>
            <p class="is-size-7">Written by {{blogpost.author}}<br>{{blogpost.date}}</p>
        </div>
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