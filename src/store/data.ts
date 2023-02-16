import { reactive } from "vue";

export const pageData = reactive({
  data: null as any,
  setData(obj: any): void {
    this.data = obj;
  },
});
