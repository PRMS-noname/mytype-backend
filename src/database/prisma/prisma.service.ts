import { Injectable, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(configService: ConfigService) {
    super({
      datasourceUrl: configService.get<string>('DATABASE_URL'),
    })
  }

  async onModuleInit() {
    await this.$connect()
  }
}
