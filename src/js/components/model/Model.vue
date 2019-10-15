<template>
    <div>
        <model-front-component v-if="!showModelInfo"></model-front-component>
        <model-info-component v-if="showModelInfo"></model-info-component>
    </div>
</template>

<script>
    import ModelFrontComponent from './ModelFront'
    import ModelInfoComponent from './ModelInfo'

    export default {
        components: {
            ModelFrontComponent,
            ModelInfoComponent
        },

        data() {
            return {
                showModelInfo: false
            }
        }
    }
</script>

