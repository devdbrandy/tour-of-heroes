import { Controller, Get } from '@nestjs/common';

@Controller('heroes')
export class HeroesController {

  @Get()
  getHeroes() {
    return [];
  }
}
