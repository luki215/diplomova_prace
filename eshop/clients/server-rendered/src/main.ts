import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { environment } from './environments/environment';
import { helpers } from './shared/helpers/helpers';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const templateLocals = app.get(HttpAdapterHost).httpAdapter.getInstance()
    .locals;
  templateLocals.helpers = helpers;
  templateLocals.environment = environment;

  app.use(function (req, res, next) {
    res.locals.req = req;
    next();
  });

  app.useStaticAssets(join(__dirname, 'public'));
  app.setBaseViewsDir(join(__dirname, 'views'));
  app.setViewEngine('ejs');
  await app.listen(3000);
}
bootstrap();
