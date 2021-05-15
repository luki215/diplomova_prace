import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { join } from 'path';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as functions from 'firebase-functions';

const expressServer = express();

async function bootstrap(expressInstance) {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
  app.enableCors();

  (app as any).useStaticAssets(join(__dirname, '..', 'public'));

  app.use(cookieParser());

  const config = new DocumentBuilder()
    .setTitle('Eshop zahradnictví')
    .setDescription('Eshop zahradnictví api')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  return app.init();
}

bootstrap(expressServer);
export const api_ssr = functions.https.onRequest(expressServer);

// we are not running from firebase => start on localhost
if (!process.env.GCLOUD_PROJECT) {
  const port = process.env.PORT || 4000;

  bootstrap(expressServer);

  // Start up the Node server
  expressServer.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
