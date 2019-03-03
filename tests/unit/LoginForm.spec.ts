// Import Vue and the component being tested
import { shallowMount } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm.vue'; // @ is an alias to /src

describe('LoginForm.vue', () => {
  test('renders props.msg when passed', () => {
    const wrapper = shallowMount(LoginForm);
    expect(wrapper.contains('v-text-field')).toBe(true);
  });
});
