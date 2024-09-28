import { Module } from '@nestjs/common';
import { ContentController } from './http/rest/controller/content.controller';
import { ContentManagementService } from './core/services/content-management.service';
import { MediaPlayerService } from './core/services/media-player.service';
import { PrismaService } from './persistence/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ContentController],
  providers: [ContentManagementService, MediaPlayerService, PrismaService],
})
export class AppModule {}
