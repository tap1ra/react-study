import Root from './Root';
import Home from './Home';
import About from './About';

const routes = [
  { component: Root,
    routes: [
      { 
        path: '/',
        exact: true,
        component: Home
      },
      { 
        path: '/about',
        exact: true,
        component: About
      }
    ]
  }
];

export default routes;