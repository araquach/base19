<template>
    <section class="section blog-info hero is-fullheight is-dark">
        <h1 class="title is-3">The Base Blog</h1>
        <p>All the latest news from Base</p>
        <div class="columns">
            <div class="column is-8-desktop">
                <div v-for="blog in blogPosts">
                    <router-link :to="{ name: 'blog-post', params: { slug: blog.slug } }">
                        <div :id="blog.slug">
                            <h1 class="title is-4">{{blog.title}}</h1>
                            <div v-html="blog.body">
                                {{blog.body}}
                            </div>
                            <p class="is-size-7">{{blog.author}}</p>
                            <p class="is-size-7">{{blog.date}}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="level is-mobile">
            <div class="level-left">
                <div class="level-item">
                    <router-link :to="{ name: 'blog' }" class="button">Back</router-link>
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
            axios.get("/api/blogposts").then(response => this.blogPosts = response.data)
                .catch(error => {
                    console.log(error)
                })
        }
    }
</script>