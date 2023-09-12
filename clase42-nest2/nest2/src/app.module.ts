import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//_________________________ importaciones nuevas _______________________
import { MongooseModule } from '@nestjs/mongoose'
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config'
import FirstMiddleware from './middleware/firstMiddleware';

// @Module({
//   imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost:27017/a39770')],
//   controllers: [AppController],
//   providers: [AppService],
// })
@Module({
  imports: [UsersModule, ConfigModule.forRoot() ,MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async(config: ConfigService)=>({
      uri: config.get<string>('MONGO_URL')
    })
  }) ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FirstMiddleware).forRoutes({path: '*', method: RequestMethod.ALL})
  }
}
