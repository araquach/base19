<template>
    <section id="team" class="section team-info is-fullheight is-dark">
        <div class="columns is-multiline">
            <TeamIndComponent
                    v-for="(tm, index) in teamMembers"
                    :firstName=tm.FirstName
                    :lastName=tm.LastName
                    :image=tm.Image
                    :level=tm.Level
                    :para1=tm.Para1
                    :para2=tm.Para2
                    :para3=tm.Para3
                    :price=tm.Price
                    :product=tm.Product
                    :style=tm.favStyle
                    :key="index"
            />
        </div>
    </section>
</template>

<script>
    import TeamIndComponent from './TeamInd'

    export default {
        components: {
            TeamIndComponent: TeamIndComponent
        },

        data() {
            return {
                    teamMembers: [],
                }
        },

        mounted() {
            axios.get('/api/team').then(response => this.teamMembers = response.data)
                .catch(error => {
                    console.log(error)
                })
        }
    }
</script>