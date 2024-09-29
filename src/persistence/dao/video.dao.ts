import { randomUUID } from 'crypto';

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContentData } from '@src/core/services/content-management.service';
import { ContentEntity } from '@src/core/entity/content.entity';

@Injectable()
export class VideoDAO {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(content: ContentEntity) {
  }
}
