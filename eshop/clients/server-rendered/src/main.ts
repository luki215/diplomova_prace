import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import * as express from 'express';
import { join } from 'path';
import { AppModule } from './app.module';
import { environment } from './environments/environment';
import { helpers } from './shared/helpers/helpers';
import * as flash from 'connect-flash';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as functions from 'firebase-functions';

async function bootstrap(expressInstance) {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  const templateLocals = app.get(HttpAdapterHost).httpAdapter.getInstance()
    .locals;
  templateLocals.helpers = helpers;
  templateLocals.environment = environment;

  app.use(function (req, res, next) {
    res.locals.req = req;
    next();
  });

  app.use(cookieParser('tajny_secret'));
  app.use(session({ cookie: { maxAge: 60000 } }));
  app.use(flash());

  app.useStaticAssets(join(__dirname, 'public'));
  app.setBaseViewsDir(join(__dirname, 'views'));
  app.setViewEngine('ejs');
  await app.init();
}

const expressServer = express();
bootstrap(expressServer);
export const sr = functions.https.onRequest(expressServer);

// we are not running from firebase => start on localhost
if (!process.env.GCLOUD_PROJECT) {
  const port = process.env.PORT || 3000;

  bootstrap(expressServer);

  // Start up the Node server
  expressServer.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
