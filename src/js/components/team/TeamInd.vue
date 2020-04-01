<template>
    <div class="columns is-multiline">
        <div v-for="tm in TeamMembers" :key="tm.id" :id="tm.first_name" class="section column is-4">
            <div @click="emitTM(tm)" class="card">
                <div class="card-image">
                    <figure class="image is-4by5">
                        <img :src="tm.image" :alt="tm.first_name">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4 has-text-white">{{tm.first_name}} {{tm.last_name}}</p>
                            <p class="subtitle has-text-white">{{tm.level}}</p>
                        </div>
                    </div>
                    <div class="content is-size-5-mobile has-text-white">
                        <p class="price">Average Cut &amp; Colour price &pound;{{tm.price}}</p>
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
