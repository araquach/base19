<template>
    
        <div :id="firstName" class="section column is-4">
            <div class="card">
                <div class="card-image">
                    <figure class="image">
                        <img :src="image" :alt="firstName">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4 has-text-white">{{firstName}} {{lastName}}</p>
                            <p class="subtitle has-text-white">{{level}}</p>
                        </div>
                    </div>
                    <div class="content is-size-5-mobile has-text-white">
                        <p class="price">Average Cut &amp; Colour price &pound;{{price}}</p>
                    </div>
                </div>
            </div>
        </div>
<!--        <div class="level">-->
<!--            <div class="level-left">-->
<!--                <div class="level-item">-->

<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--        &lt;!&ndash; modal&ndash;&gt;-->
<!--        <div class="modal isShowModal">-->
<!--            <div class="modal-background"></div>-->
<!--            <div class="modal-content">-->
<!--                <figure class="image">-->
<!--                    <img :src="image" :alt="name">-->
<!--                </figure>-->
<!--            </div>-->
<!--            <button class="modal-close is-large" aria-label="close"></button>-->
<!--        </div>-->

</template>

<script>
    export default {
        props: [
            'firstName',
            'lastName',
            'image',
            'level',
            'para1',
            'para2',
            'para3',
            'price',
            'product',
            'favStyle'
        ],

        data() {
            return {

            }
        }
    }
</script>
