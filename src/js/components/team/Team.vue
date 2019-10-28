<template>
    <transition name="fade" mode="out-in">
        <component :is="selectedComponent" @switchComponent="switchComponent" :TeamMembers="TeamMembers"/>
    </transition>
</template>

<script>
    import TeamFrontComponent from './TeamFront'
    import TeamAllComponent from './TeamAll'

    export default {
        components: {
            TeamFrontComponent,
            TeamAllComponent
        },

        data() {
            return {
                selectedComponent: 'TeamFrontComponent',
                TeamMembers: []
            }
        },

        methods: {
            switchComponent() {
                if (this.selectedComponent == 'TeamAllComponent') {
                    this.selectedComponent = 'TeamFrontComponent'
                } else {
                    this.selectedComponent = 'TeamAllComponent'
                }
            }
        },

        created() {
            axios.get('/api/team').then(response => this.TeamMembers = response.data)
                .catch(error => {
                    console.log(error)
                })
        }
    }
</script>