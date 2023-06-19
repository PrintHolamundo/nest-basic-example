import { Float, Query, Resolver } from '@nestjs/graphql';
import { HelloWorldModule } from './hello-world.module';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, { description: 'Hola mundo es lo que retorna', name: 'hello' })
  HelloWorld(): string {
    return 'Hola Mundo';
  }
  @Query(() => Float, { name: 'randomNumber' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }
}
