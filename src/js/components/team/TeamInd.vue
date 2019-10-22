<template>
    <div class="columns is-multiline">
        <div v-for="tm in TeamMembers" :key="tm.id" :id="tm.FirstName" class="section column is-4">
            <div @click="emitTM(tm)" class="card">
                <div class="card-image">
                    <figure class="image">
                        <img :src="tm.Image" :alt="tm.FirstName">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4 has-text-white">{{tm.FirstName}} {{tm.LastName}}</p>
                            <p class="subtitle has-text-white">{{tm.Level}}</p>
                        </div>
                    </div>
                    <div class="content is-size-5-mobile has-text-white">
                        <p class="price">Average Cut &amp; Colour price &pound;{{tm.Price}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['TeamMembers'],

        methods: {
            emitTM(tm) {
                this.$emit('emitTM', tm)
            }
        }
    }
</script>
