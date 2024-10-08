import { Injectable } from '@nestjs/common';

import { Content } from '@src/persistence/typeorm/entity/content.entity';
import { Movie } from '@src/persistence/typeorm/entity/movie.entity';
import { Thumbnail } from '@src/persistence/typeorm/entity/thumbnail.entity';
import { Video } from '@src/persistence/typeorm/entity/video.entity';
import { ContentRepository } from '@src/persistence/typeorm/repository/content.repository';
import { ContentType } from '../enum/content-type.enum';

export interface CreateMovieData {
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  sizeInKb: number;
}

@Injectable()
export class ContentManagementService {
  constructor(private readonly contentRepository: ContentRepository) {}

  async createMovie(createMovieData: CreateMovieData): Promise<Content> {
    const contentEntity = new Content({
      title: createMovieData.title,
      description: createMovieData.description,
      type: ContentType.MOVIE,
      movie: new Movie({
        video: new Video({
          url: createMovieData.url,
          duration: 10,
          sizeInKb: createMovieData.sizeInKb,
        }),
      }),
    });

    if (createMovieData.thumbnailUrl) {
      contentEntity.movie.thumbnail = new Thumbnail({
        url: createMovieData.thumbnailUrl,
      });
    }
    const content = await this.contentRepository.save(contentEntity);

    return content;
  }
}
