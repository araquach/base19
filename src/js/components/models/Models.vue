<template>
    <transition name="fade" mode="out-in">
        <component :is="selectedComponent" @switchComponent="switchComponent"/>
    </transition>
</template>

<script>
    import ModelsFrontComponent from './ModelsFront'
    import ModelsInfoComponent from './ModelsInfo'

    export default {
        components: {
            ModelsFrontComponent,
            ModelsInfoComponent
        },

        data() {
            return {
                selectedComponent: 'ModelsFrontComponent'
            }
        },

        methods: {
            switchComponent() {
                if (this.selectedComponent == 'ModelsInfoComponent') {
                    this.selectedComponent = 'ModelsFrontComponent'
                } else {
                    this.selectedComponent = 'ModelsInfoComponent'
                }
            }
        }
    }
</script>

