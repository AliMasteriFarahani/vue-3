import { ref } from "@vue/reactivity";

export const useCounter = (count) => {
    const counter = ref(0);
    function increament() {
        counter.value += count.value;
    }
    return { counter, increament };
};

// import { ref } from '@vue/reactivity';
// export default function useCounter(){
//     const counter = ref(0);
//     function increament(){
//         return counter.value +=1;
//       }
//       return{counter,increament}
// }
