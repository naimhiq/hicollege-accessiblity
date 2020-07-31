
import { mount } from '@vue/test-utils'
import Hello from '../HelloWorld.vue'

describe('Hello vue', () => {
  it('Should render ', () => {
    const wrapper = mount(Hello)
    expect(wrapper.vm.msg).toEqualÅ('Welcome to Your Vue.js PWA')
  })
})
