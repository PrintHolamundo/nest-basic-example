import { Query, Resolver } from '@nestjs/graphql';
import { HelloWorldModule } from './hello-world.module';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String)
  HelloWorld(): string {
    return 'Hola Mundo';
  }
}
