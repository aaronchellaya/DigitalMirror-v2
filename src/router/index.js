import InteractiveViewVue from '@/views/InteractiveView.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StaticPromosView from '../views/StaticPromosView.vue'
import DyanamicPromosView from '../views/DynamicPromosView.vue'
import FeedBackView from '../views/FeedBackView.vue'
import IndustryView from '@/views/IndustryView.vue'
import AirportView from '../views/airportView.vue'
import hotelDashboard from '../views/hotelView.vue'
import videoView from '../views/videoView.vue'
import AppointmentsView from '@/views/AppointmentsView.vue'
import LiveTvView from '@/views/LiveTvView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/interactive',
    name: 'interactive',
    component: InteractiveViewVue,
  },
  {
    path: '/staticPromos',
    name: 'static',
    component: StaticPromosView,
  },
  {
    path: '/dynamicPromos',
    name: 'dynamic',
    component: DyanamicPromosView,
  },
  {
    path: '/feedBack',
    name: 'feedback',
    component: FeedBackView,
  },
  {
    path: '/industry',
    name: 'industry',
    component: IndustryView,
  },
  {
    path: '/appointments',
    name: 'appointment',
    component: AppointmentsView,
  },
  {
    path: '/livetv',
    name: 'livetv',
    component: LiveTvView,
  },
  {
    path: '/industry/airport',
    name: 'industry-airport',
    component: AirportView,
  },
  {
    path: '/industry/hotel',
    name: 'industry-hotel',
    component: hotelDashboard,
  },
  {
    path: '/video',
    name: 'video',
    component: videoView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
