import App from '../App'

const home = r => require.ensure([], () => r(require('../pages/home/home')), 'home')

export default [{
  path: '/',
  component: App,
  children: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
  ]
}]
