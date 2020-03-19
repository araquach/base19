<template>
    <div id="team-modal" class="columns has-background-black">
        <div class="section column">
            <figure class="image">
                <img :src="selectedTM.image" :alt="selectedTM.first_name">
            </figure>
        </div>
        <div class="section column">
            <div class="has-text-white">
                <h1 class="title has-text-white">{{selectedTM.first_name}} {{selectedTM.last_name}}</h1>
                <h2 class="subtitle has-text-white">{{selectedTM.level}}</h2>
                <p class="is-size-5 has-text-weight-bold">{{selectedTM.para_1}}</p>
                <p>{{selectedTM.para_2}}</p>
                <p>{{selectedTM.para_3}}</p>
                <p class="is-size-5">Average Price: &pound;{{selectedTM.price}}</p>
            </div>
            <ReviewFeed />
        </div>
    </div>
</template>

<script>
    import ReviewFeed from '../reviewFeed/ReviewFeed'
    export default {
        components: { ReviewFeed },

        props: ['selectedTM']
    }
</script>
