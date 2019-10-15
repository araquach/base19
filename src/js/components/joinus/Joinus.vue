<template>
    <div>
        <joinus-front-component v-if="!showJoinusInfo"></joinus-front-component>
        <joinus-info-component v-if="showJoinusInfo"></joinus-info-component>
    </div>
</template>

<script>
    import JoinusFrontComponent from './JoinusFront'
    import JoinusInfoComponent from './JoinusInfo'

    export default {
        components: {
            JoinusFrontComponent,
            JoinusInfoComponent
        },

        data() {
            return {
                showJoinusInfo: false
            }
        }
    }
</script>