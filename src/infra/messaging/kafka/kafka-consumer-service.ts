import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {

    constructor() {
        super({
            client: {
                clientId: 'notifications',
                brokers: ['pet-wombat-9749-us1-kafka.upstash.io:9092'],
                sasl: {
                    mechanism: 'scram-sha-256',
                    username: 'cGV0LXdvbWJhdC05NzQ5JEMP9ANA0ocvbHAUScxiaSByyo0BjNmUGpuDoYTnBEo',
                    password: 'nwNpYLy3gQohq9O_EM5yV9pOFyVhQ0KDz3IUe2ciCDryysN6tVC_cwBcQ_oNjTUMm3UeuA==',
                },
                ssl: true,
            },
        });
    }

    async onModuleDestroy() {
        await this.close();
    }
}