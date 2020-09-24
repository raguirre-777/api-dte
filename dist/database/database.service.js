"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const config_module_1 = require("../config/config.module");
const config_service_1 = require("../config/config.service");
const dotenv = require("dotenv");
dotenv.config();
exports.databaseProviders = [
    typeorm_1.TypeOrmModule.forRootAsync({
        imports: [config_module_1.ConfigModule],
        inject: [config_service_1.ConfigService],
        async useFactory(config) {
            return {
                type: 'postgres',
                host: process.env.DB_HOST,
                username: process.env.DB_USERNAME,
                port: 5432,
                database: process.env.DB_NAME,
                password: process.env.DB_PASSWORD,
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                migrations: [__dirname + '/migrations/*{.ts,.js}'],
            };
        },
    }),
];
//# sourceMappingURL=database.service.js.map