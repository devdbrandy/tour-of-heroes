import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { HeroesController } from './heroes/heroes.controller';
import { HeroesModule } from './heroes/heroes.module';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist/browser'),
      bundle: require('../server/main'),
      liveReload: true
    }),
    HeroesModule
  ],
  controllers: []
})
export class ApplicationModule {}
