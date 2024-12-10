import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogginController } from './loggin/loggin.controller';
import { UsuariosModule } from './usuarios/usuarios.module';
import { FileService } from './file/file.service';
import { FileController } from './file/file.controller';




@Module({
  imports: [ UsuariosModule],
  controllers: [AppController, LogginController, FileController],
  providers: [AppService, FileService],
})
export class AppModule {}
