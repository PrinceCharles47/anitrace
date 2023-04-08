import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/compat/app'
import HomeView from '../views/HomeView.vue'
import SearchedContent from '../views/SearchedContent.vue'
import AnimeDetails from '../views/AnimeDetails.vue'
import Authentication from '../views/AuthenticationView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/signin',
    name: 'signin',
    component: Authentication,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/upload',
    name: 'upload',
    component: SearchedContent,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/anime-details/:animeID',
    name: 'anime details',
    component: AnimeDetails,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){

    if(!firebase.auth().currentUser){

      next({
        path: '/signin',
        query: {
          redirect: to.fullPath
        }
      })

    }else{
      next()
    }

  }else if(to.matched.some(record => record.meta.requiresGuest)){

    if(firebase.auth().currentUser){

      next({
        path: '/upload',
        query: {
          redirect: to.fullPath
        }
      })

    }else{
      next()
    }

  }else{
    next()
  }
})

export default router
