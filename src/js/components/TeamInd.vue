<template>
    <div class="modal" :class="{ 'is-active': isShowModal }">
        <div class="modal-background"></div>
        <div class="modal-content">
            <figure class="image">
                <img src="/dist/img/team/abi.jpg" alt="Abi Clarke">
            </figure>
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isShowModal: true
            }
        }
    }

</script>
