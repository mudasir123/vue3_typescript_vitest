
<script setup lang="ts">

/*
Import modules
*/
import {ref} from 'vue'

/*
Getting props
*/
const props = defineProps(
                {
                    initialValue:{
                        type: Number,
                        required: true
                    }
                    
                }
              )

/*Maked counter is recative variable*/
let counter:any = ref(props.initialValue);

/*counter the increments*/
function increment():void{
    counter.value++;
}

</script>

<template>
<div>
  <button id="counter" @click="increment">{{counter}}</button>
</div>

</template>