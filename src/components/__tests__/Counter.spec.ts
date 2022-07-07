import { describe, it, expect } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'

import Counter from '../Counter.vue'

describe('Counter', ()=>{
    it('render properly', ()=>{
        const mounted:any = mount(Counter, {props: {initialValue:1 }})
        const counterDiv = mounted.element.querySelector('#counter');
        expect(counterDiv.textContent).toContain(1);
    })

    it('couter', ()=>{
        
        //Getting wrapper 
        const mounted:any = mount(Counter, {props: {initialValue:1 }})
        
        //vm retuning root node of component we can get data & method from it
        const initialValue = mounted.vm.counter; //1

        mounted.vm.increment(); // called method 1 => 2
       
        const updatedValue = mounted.vm.counter //2

        expect(initialValue).toBeLessThan(updatedValue)
    })
})
