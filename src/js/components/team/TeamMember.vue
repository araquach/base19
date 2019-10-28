<template>
    <div class="modal isShowModal">
        <div class="modal-background"></div>
        <div class="modal-content">
            <figure class="image">
                <img :src="selectedTeamMember.Image" :alt="selectedTeamMember.FirstName">
            </figure>
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
    </div>
</template>

<script>
    export default {
        props: ['selectedTeamMember'],

        methods: {
            emitTeamMember(teamMember) {
                this.$emit('emitTeamMember', teamMember)
            }
        }
    }
</script>