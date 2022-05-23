import { Options, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TransformInterceptor } from './interceptors/transform.interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api/v1');
  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalInterceptors(new TransformInterceptor)

  process.env.TZ = 'America/Sao_Paulo';
  
  const config = new DocumentBuilder()
    .setTitle('API Pendencias Monitoramento')
    .setDescription('The pendencias-monitoramento API')
    .setVersion('1.0')
    .addTag('users')
    .addTag('pendencias')
    .addTag('tipo_pendencias')
    .addTag('andamentos')
    .build();
  
    const customOptions: SwaggerCustomOptions = {
      swaggerOptions: {
        persistAuthorization: true,
      },
      customSiteTitle: 'API Pendencias Monitoramento',
    };

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document, customOptions);
  
  await app.listen(3001);
}
bootstrap();
