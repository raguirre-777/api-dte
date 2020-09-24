"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const nestApplicationOptions = {
        cors: {
            origin: true,
            preflightContinue: false,
        },
    };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, nestApplicationOptions);
    app.setGlobalPrefix('api');
    const options = new swagger_1.DocumentBuilder()
        .setTitle('API Boleta Electronica')
        .setDescription('Api Rest de Boleta Electronica')
        .setVersion('1.0')
        .addTag(process.env.NAME)
        .addSecurity('bearer', {
        type: 'http',
        scheme: 'bearer',
    })
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
    await app.listen(app_module_1.AppModule.port);
}
bootstrap();
//# sourceMappingURL=main.js.map