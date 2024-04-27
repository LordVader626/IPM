<template>
    <transition name="modal-animation">
        <div v-show="modalActive" class="modal">
            <transition name="modal-animation-inner">
                <div v-show="modalActive" class="modal-inner">
                    <!--Error Content -->
                    <slot />
                    <button class="button" @click="$emit('close')">X</button>
                </div>
            </transition>
        </div>
    </transition>
</template>


<script>
export default {
    props: ['modalActive', 'errorImage'],

};
</script>


<style scoped>
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%; /* Ensure the modal covers the full height of the viewport */
    width: 100%; /* Ensure the modal covers the full width of the viewport */
    position: fixed; /* Position the modal relative to the viewport */
    top: 0; /* Align the modal to the top of the viewport */
    left: 0; /* Align the modal to the left of the viewport */
    background-color: rgba(0, 0, 0, 0.5); /* Optional: Add a semi-transparent background */
}

.modal-inner {
    position: relative;
    max-width: 640px;
    width: 80%;
    background-color: white; /* Ensure the modal content has a solid background */
    padding: 20px;
    border-radius: 10px; /* Optional: Add some rounded corners */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle shadow for depth */
}

.button {
    position: absolute;
    top: 10px; /* Adjust this value to position the button from the top edge of the modal */
    right: 5%; /* Center the button horizontally */
    transform: translateX(50%); /* Offset the button to the left by half its width */
    width: 30px;
    height: 30px;
    border-radius: 23px;
    background-color: var(--color-button-blue);
    color: white;
    font-size: 20px;
    opacity: 1;
    z-index: 10;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>