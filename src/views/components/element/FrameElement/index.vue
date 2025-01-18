<template>
    <div class="editable-element-frame"
        :style="{
            left: elementInfo.left + 'px', 
            top: elementInfo.top + 'px', 
            width: elementInfo.width + 'px', 
            height: elementInfo.height + 'px'
        }"
    >
        <div class="rotate-wrapper"
            :style="{ transform: `rotate(${elementInfo.rotate}deg)`  }"
        >
        
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { PPTFrameElement } from '../../../../types/slides'

const props = defineProps({
    elementInfo: {
        type: Object as PropType<PPTFrameElement>,
        required: true
    }
})


</script>

<style lang="scss" scoped>




</style>
