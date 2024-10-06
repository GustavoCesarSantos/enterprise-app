import { Module } from '@nestjs/common';
import { ContentController } from './http/rest/controller/content.controller';
import { ContentManagementService } from './core/services/content-management.service';
import { MediaPlayerService } from './core/services/media-player.service';
import { PrismaService } from './persistence/prisma/prisma.service';
import { ContentRepository } from './persistence/prisma/repository/content.repository';
import { VideoRepository } from './persistence/prisma/repository/video.repository';
import { ConfigModule } from './infra/module/config/config.module';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ContentController],
  providers: [
    ContentManagementService,
    MediaPlayerService,
    PrismaService,
    ContentRepository,
    VideoRepository,
  ],
})
export class AppModule {}
