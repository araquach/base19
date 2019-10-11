<template>
    <div>
        <joinus-front-component v-if="!showJoinusInfo"></joinus-front-component>
        <joinus-info-component v-if="showJoinusInfo"></joinus-info-component>
    </div>
</template>

<script>
    import JoinusFront from './JoinusFront'
    import JoinusInfo from './JoinusInfo'

    export default {
        components: {
            joinusFrontComponent: JoinusFront,
            joinusInfoComponent: JoinusInfo
        },

        data() {
            return {
                showJoinusInfo: false
            }
        }
    }
</script>