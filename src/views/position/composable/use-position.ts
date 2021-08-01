import { onMounted, reactive, toRefs } from "vue";
import { create, findAll, remove, findOne, update } from "@/services/position-service";
import { Position } from "@/types/position-types";
import { useRoute, useRouter } from "vue-router";
import Swal from "sweetalert2";

export function useIndex() {
  const state = reactive({
    position: [] as Position[],
    errorMessage: "",
    isLoading: false,
  });

  const getData = async (): Promise<void> => {
    try {
      state.isLoading = true;
      const response = await findAll();
      state.position = response.data;
      // console.log(response.data); // [{id:1, title: 'test'}]
    } catch (error: any) {
      // 400, 500, 401
      console.log(JSON.stringify(error));
      state.errorMessage = "เกิดข้อผิดพลาดจาก Server " + error.message;
    } finally {
      state.isLoading = false;
    }
  };

  onMounted(() => {
    getData();
  });

  return { ...toRefs(state) };
}

export function useCreate() {
  const state = reactive({
    position: {} as Position,
  });
  const router = useRouter();

  const onSubmit = async () => {
    const response = await create(state.position);
    if (response.data) {
      // alert('เพิ่มข้อมูลสำเร็จ');
      await router.replace({ name: "PositionIndex" });
      await Swal.fire("เพิ่มข้อมูลสำเร็จ!", "ผลการทำงาน", "success");
    }
  };

  return { ...toRefs(state), onSubmit };
}

export function useRemove() {
  const router = useRouter();

  const onRemove = async (id: number) => {
    const isConfirm = window.confirm("แน่ใจว่าต้องการลบข้อมูลนี้");
    if (isConfirm) {
      const response = await remove(id);
      if (response.data) {
        await Swal.fire(response.data.message, "ผลการทำงาน", "success");
        router.go(0);
      }
    }
  };

  return { onRemove };
}


export function useUpdate() {
  const state = reactive({
    position: {} as Position,
  });
  const router = useRouter();
  const route = useRoute();

  onMounted(() => {
    state.position.id = +route.params.id;
    findById(state.position.id);
  });

  const findById = async (id: number) => {
    const response = await findOne(id);
    state.position = response.data;
  }

  const onSubmit = async () => {
    const response = await update(state.position.id, state.position);
    if (response.data) {
      await router.replace({ name: "PositionIndex" });
      await Swal.fire("แก้ไขข้อมูลสำเร็จ!", "ผลการทำงาน", "success");
    }
  };

  return { ...toRefs(state), onSubmit };
}
