import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";
import NotFound from "@/pages/NotFound.vue";
import CoachesList from "@/pages/coaches/CoachesList.vue";
import CoachesList from "@/pages/coaches/CoachRegistration.vue";
import CoachesList from "@/pages/coaches/CoachesDetail.vue";
import CoachesList from "@/pages/requests/ContactCoach.vue";
import CoachesList from "@/pages/requests/RequestReceived.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/coaches",
    },
    {
      path: "/coaches",
      component: CoachesList,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/coaches/:id",
      component: CoachDetail,
      meat: {
        title: "Coach Detail",
      },

      children: [
        {
          path: "contact", // /coaches/c1/contact
          component: ContactCoach,
          meta: {
            title: "Contact Coach",
          },
        },
      ],
    },
    {
      path: "/register",
      name: "register",
      component: CoachRegister,
      meta: {
        title: "Register",
      },
    },
    {
      path: "/requests",
      name: "requests",
      component: RequestsReceived,
      meta: {
        title: "Request",
      },
    },
    {
      path: "/:notFound(.*)*",
      name: "not_found",
      component: NotFound,
      meta: {
        title: "Not Found",
      },
    },
  ],
});

router.beforeEach((to) => {
  nextTick(() => {
    document.title = to.meta.title || import.meta.env.VUE_APP_DEFAULT_TITLE;
  });
});

export default router;