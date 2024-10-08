import { Module } from '@nestjs/common';

import { ContentManagementService } from './core/services/content-management.service';
import { ContentRepository } from './persistence/typeorm/repository/content.repository';
import { MediaPlayerController } from './http/rest/controller/media-player.controller';
import { MediaPlayerService } from './core/services/media-player.service';
import { PersistenceModule } from './persistence/typeorm/persistence.module';
import { VideoRepository } from './persistence/typeorm/repository/video.repository';
import { VideoUploadController } from './http/rest/controller/video-upload.controller';

@Module({
  imports: [PersistenceModule.forRoot()],
  controllers: [MediaPlayerController, VideoUploadController],
  providers: [
    ContentManagementService,
    MediaPlayerService,
    ContentRepository,
    VideoRepository,
  ],
})
export class AppModule {}
