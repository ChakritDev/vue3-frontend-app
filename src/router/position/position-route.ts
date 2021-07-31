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
        path: "position",
        name: "PositionIndex",
        component: () =>
          import(
            /* webpackChunkName: "PositionIndex" */ "@/views/position/PositionIndex.vue"
          ),
      },
    ],
  },
];

export default positionRoutes;
