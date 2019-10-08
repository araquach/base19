<template>
    <div>
        <!--Pre Click-->
        <section id="blog" v-if="!showInfo" class="blog hero is-fullheight is-dark">
            <div class="hero-body show columns">
                <div class="section column is-5">
                    <h1 class="title">Blog</h1>
                    <h2 class="subtitle">All the latest new from Base</h2>
                    <button @click="showInfo = true" class="button">Blog Posts</button>
                </div>
            </div>
        </section>
        <!--Post Click-->
        <transition name="fade">
            <section id="blog" v-if="showInfo"  class="section blog-info hero is-fullheight is-dark">
                <div class="tile is-ancestor">
                    <div class="tile is-vertical is-8">
                        <div class="tile">
                            <div class="tile is-parent is-vertical">
                                <article class="tile is-child notification is-primary">
                                    <p class="title">Vertical...</p>
                                    <p class="subtitle">Top tile</p>
                                </article>
                                <article class="tile is-child notification is-warning">
                                    <p class="title">...tiles</p>
                                    <p class="subtitle">Bottom tile</p>
                                </article>
                            </div>
                            <div class="tile is-parent">
                                <article class="tile is-child notification is-info">
                                    <p class="title">Middle tile</p>
                                    <p class="subtitle">With an image</p>
                                    <figure class="image is-4by3">
                                        <img src="https://bulma.io/images/placeholders/640x480.png">
                                    </figure>
                                </article>
                            </div>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-danger">
                                <p class="title">Wide tile</p>
                                <p class="subtitle">Aligned with the right tile</p>
                                <div class="content">
                                    <!-- Content -->
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-success">
                            <div class="content">
                                <p class="title">Tall tile</p>
                                <p class="subtitle">With even more content</p>
                                <div class="content">
                                    <!-- Content -->
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <button @click="showInfo = false" class="button">Show Less</button>
                        </div>
                    </div>
                </div>
            </section>
        </transition>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                showInfo: false
            }
        }
    }
</script>