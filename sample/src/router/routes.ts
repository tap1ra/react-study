import Html from '../component/Html';
import App from '../component/App';
import About from '../component/About';

const Routes = [
    {
        component: Html,
        routes: [
            {
                path: '/',
                exact: true,
                component: App,
            },
            {
                path: '/about',
                exact: true,
                component: About,
            },
        ],
    },
];

export default Routes;