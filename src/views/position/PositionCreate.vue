<template>
    <div class="mx-4 col-md-6 mt-4">
        
        <h1> เพิ่มข้อมูล </h1>
        <form>
            <div class="mb-3">
                <label for="exampleInputtitle" class="form-label">ชื่อตำแหน่ง</label>
                <input type="text" class="form-control" id="title" v-model="position.title">
                {{position.title}}
                <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            </div>
            <!-- <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="text" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div> -->
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCreate } from './composable/use-position';

export default defineComponent({
    name:"PositionCreate",
    setup () {
        const {position , onSubmit} = useCreate();

        return {position,onSubmit};
    }
})
</script>

<style scoped>

</style>