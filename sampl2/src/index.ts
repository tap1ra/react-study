import express from 'express';
import { renderToNodeStream } from 'react-dom/server';

const app = express();
app.get('/', function(req, res) {
return     renderToNodeStream(
        <Provider store={this.store}>
        <StaticRouter context={{}}>{this.pageComponent}</StaticRouter>
      </Provider
    ).pipe(res);
});
app.listen(3000);