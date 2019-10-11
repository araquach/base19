<template>
    <div>
        <blog-front-component v-if="!showBlogInfo"></blog-front-component>
        <blog-info-component v-if="showBlogInfo"></blog-info-component>
    </div>
</template>

<script>
    import BlogFront from './BlogFront'
    import BlogInfo from './BlogInfo'

    export default {
        components: {
            blogFrontComponent: BlogFront,
            blogInfoComponent: BlogInfo
        },

        data() {
            return {
                showBlogInfo: false
            }
        }
    }
</script>