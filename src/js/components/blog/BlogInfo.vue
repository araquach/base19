<template>
    <section class="section blog-info hero is-fullheight is-dark">
        <h1 class="title is-2">The Base Blog</h1>
        <h1 class="subtitle is-4">All the latest news from the Base Team</h1>
        <br><br>
        <div class="columns">
            <div class="column is-10">
                <div v-for="blog in blogPosts">
                    <router-link :to="{ name: 'blog-post', params: { slug: blog.slug } }">
                        <div :id="blog.slug" class="columns has-text-white">
                            <div class="column is-4">
                                <figure class="image is-square">
                                    <img :src="blog.image">
                                </figure>
                            </div>
                            <div class="column">
                                <h1 class="title is-4">{{blog.title}}</h1>
                                <div v-html="blog.body">
                                    {{blog.body}}
                                </div>
                                <p class="is-size-4">Read More ></p>
                                <p class="is-size-7">By {{blog.author}}</p>
                                <p class="is-size-7">{{blog.date | moment("MMMM Do YYYY") }}</p>
                            </div>
                        </div>
                    </router-link>
                    <hr>
                </div>
            </div>
        </div>
        <div class="level is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <a @click="$router.go(-1)" class="button">back</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                blogPosts: []
            }
        },

        mounted() {
            axios.get("/api/blog-posts").then(response => this.blogPosts = response.data)
                .catch(error => {
                    console.log(error)
                })
        }
    }
</script>