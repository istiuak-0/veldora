import { Provide } from '@veldora/core';
import { reactive, ref, watch } from 'vue';

@Provide()
export class UserService {
  public user = ref('user');

  public data = ref(0);

  updateUser(value: string) {
    this.user.value = value;
  }

  unwatch = watch(this.user, () => {
    console.log(this.user.value);
  });

  datawatch = watch(this.data, () => {
    console.log(this.data.value);
  });
}
