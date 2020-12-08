import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
import { join } from 'path';
import { AppModule } from './app.module';
import hbs from 'hbs';
import express from 'express';
import * as functions from 'firebase-functions';
import { ExpressAdapter } from '@nestjs/platform-express/adapters/express-adapter';

const server = express();

async function createNestApp(expressInstance) {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  app.useStaticAssets(join(__dirname, 'public'), { prefix: '/public/' });
  app.setBaseViewsDir(join(__dirname, 'views'));
  app.setViewEngine('hbs');
  hbs.registerPartials(join(__dirname, 'views', 'partials'));

  return app.init();
}

async function run(): Promise<void> {
  const port = process.env.PORT || 3000;

  await createNestApp(server);

  // Start up the Node server
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

createNestApp(server);
export const server_render = functions.https.onRequest(server);

// run();
