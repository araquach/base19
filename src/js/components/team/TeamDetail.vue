<template>
    <div id="team-modal" class="columns has-background-black">
        <div class="section column">
            <figure class="image is-4by5">
                <img :src="staffMontage" :alt="tm.first_name">
            </figure>
        </div>
        <div class="section column">
            <div class="has-text-white">
                <h1 class="title has-text-white">{{tm.first_name}} {{tm.last_name}}</h1>
                <h2 class="subtitle has-text-white">{{tm.level}}</h2>
                <p class="is-size-5 has-text-weight-bold">{{tm.para_1}}</p>
                <p>{{tm.para_2}}</p>
                <p>{{tm.para_3}}</p>
                <p class="is-size-5">Average Price: &pound;{{tm.price}}</p>
            </div>
            <ReviewFeed :staffMember="staffMember"/>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ReviewFeed from '../reviewFeed/ReviewFeed'
    export default {
        components: { ReviewFeed },

        mounted() {
            this.$store.dispatch('loadTeamMembers')
        },

        data() {
            return {
                staffMember: this.selectedTM.first_name + ' ' + this.selectedTM.last_name
            }
        },

        computed: {
            computed: {
                ...mapGetters([
                    'teamMember'
                ]),

                tm() {
                    return this.teamMember(this.$route.params.slug)
                },

                staffMontage() {
                    return `/dist/img/team/${this.tm.first_name.toLowerCase()}_montage.jpg`
                }
            }
        }
    }
</script>
