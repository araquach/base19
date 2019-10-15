<template>
    <div>
        <component :is="selectedComponent" @switchComponent="switchComponent"/>
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
                selectedComponent: 'JoinusFrontComponent'
            }
        },

        methods: {
            switchComponent() {
                if (this.selectedComponent == 'JoinusInfoComponent') {
                    this.selectedComponent = 'JoinusFrontComponent'
                } else {
                    this.selectedComponent = 'JoinusInfoComponent'
                }
            }
        }
    }
</script>