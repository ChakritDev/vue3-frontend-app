import { onMounted, reactive,toRefs } from "vue";
import { findAll } from "@/services/position-service";

export function useIndex() {
  const state = reactive({
    position: [
      { id: 1, title: "ผู้จัดการ" },
      { id: 2, title: "ไอที" },
    ],
  });

  const getData = async ():Promise<void> => {
      const response = await findAll();
      console.log(response.data);
      
  }

  onMounted(() =>{
    getData();
  });

  return { ...toRefs(state) };
}
