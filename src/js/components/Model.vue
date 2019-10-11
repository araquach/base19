<template>
    <div>
        <model-front-component v-if="!showModelInfo"></model-front-component>
        <model-info-component v-if="showModelInfo"></model-info-component>
    </div>
</template>

<script>
    import ModelFront from './ModelFront'
    import ModelInfo from './ModelInfo'

    export default {
        components: {
            modelFrontComponent: ModelFront,
            modelInfoComponent: ModelInfo
        },

        data() {
            return {
                showModelInfo: false
            }
        }
    }
</script>

