import {ref} from 'vue';
export const useCounter = ()=>{
    let counter = ref(0);
    function count(step){
        counter.value += step;
    }
    return {counter,count}
}