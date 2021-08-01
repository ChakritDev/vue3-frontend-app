import { h, resolveComponent } from "vue";
import { RouteRecordRaw } from "vue-router";

const positionRoutes: Array<RouteRecordRaw> = [
  {
    path: "position",
    name: "Position",
    component: {
      render: () => h(resolveComponent("router-view")),
    },
    children: [
      {
        path: "",
        name: "PositionIndex",
        component: () =>
          import(
            /* webpackChunkName: "PositionIndex" */ "@/views/position/PositionIndex.vue"
          ),
      },
      {
        path: "create",
        name: "PositionCreate",
        component: () =>
          import(
            /* webpackChunkName: "PositionCreate" */ "@/views/position/PositionCreate.vue"
          ),
      },
      {
        path: ":id/update",
        name: "PositionUpdate",
        component: () =>
          import(
            /* webpackChunkName: "PositionUpdate" */ "@/views/position/PositionUpdate.vue"
          ),
      },
    ],
  },
];

export default positionRoutes;
