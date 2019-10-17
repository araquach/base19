<template>
    <section id="team" class="section team-info hero is-fullheight is-dark">
        <div class="columns is-multiline">
            <div :id="tm.FirstName" class="section column is-4">
                <div class="card">
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
        <div class="level">
            <div class="level-left">
                <div class="level-item">

                </div>
            </div>
        </div>
        <!-- modal-->
        <div class="modal isShowModal">
            <div class="modal-background"></div>
            <div class="modal-content">
                <figure class="image">
                    <img src="/dist/img/team/abi.jpg" alt="Abi Clarke">
                </figure>
            </div>
            <button class="modal-close is-large" aria-label="close"></button>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['firstName', 'lastName'],

        data() {
            return {

            }
        }
    }
</script>
