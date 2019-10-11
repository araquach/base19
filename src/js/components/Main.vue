<template>
    <div>
        <home-component></home-component>

        <about-component></about-component>

        <blog-component></blog-component>

        <team-component v-if="!showTeamInfo"></team-component>
        <team-info-component v-if="showTeamInfo"></team-info-component>

        <joinus-component v-if="!showJoinusInfo"></joinus-component>
        <joinus-info-component v-if="showJoinusInfo"></joinus-info-component>

        <blog-component v-if="!showBlogInfo"></blog-component>
        <blog-info-component v-if="showBlogInfo"></blog-info-component>

        <model-component v-if="!showModelInfo"></model-component>
        <model-info-component v-if="showModelInfo"></model-info-component>

        <contact-component></contact-component>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showTeamInfo: false,
                showJoinusInfo: false,
                showBlogInfo: false,
                showModelInfo: false
            }
        }
    }
</script>
