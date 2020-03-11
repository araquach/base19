<template>
    <div class="columns is-mobile is-centered">
        <div class="column is-9">
            <div class="card">
                <div class="card-content columns">
                    <div class="column">
                        <figure class="image">
                            <img :src="selectedTM.image" :alt="selectedTM.first_name">
                        </figure>
                    </div>
                    <div class="column">
                        <div class="media">
                            <div class="media-content has-text-white">
                                <h1 class="title has-text-white">{{selectedTM.first_name}} {{selectedTM.last_name}}</h1>
                                <h2 class="subtitle has-text-white">{{selectedTM.Level}}</h2>
                                <p class="is-size-5 has-text-weight-bold">{{selectedTM.para1}}</p>
                                <p>{{selectedTM.para2}}</p>
                                <p>{{selectedTM.para3}}</p>
                                <p class="is-size-5">Average Price: &pound;{{selectedTM.price}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['selectedTM']
    }
</script>
