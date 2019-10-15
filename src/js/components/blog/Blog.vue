<template>
    <div>
        <component :is="selectedComponent" @switchComponent="switchComponent"/>
    </div>
</template>

<script>
    import BlogFrontComponent from './BlogFront'
    import BlogInfoComponent from './BlogInfo'

    export default {
        components: {
            BlogFrontComponent,
            BlogInfoComponent
        },

        data() {
            return {
                selectedComponent: 'BlogFrontComponent'
            }
        },

        methods: {
            switchComponent() {
                if (this.selectedComponent == 'BlogInfoComponent') {
                    this.selectedComponent = 'BlogFrontComponent'
                } else {
                    this.selectedComponent = 'BlogInfoComponent'
                }
            }
        }
    }
</script>