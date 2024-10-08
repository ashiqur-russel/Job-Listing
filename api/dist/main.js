"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const express = require("express");
const serverless_http_1 = require("serverless-http");
const app_module_1 = require("./app.module");
const expressApp = express();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressApp));
    app.useGlobalPipes(new common_1.ValidationPipe());
    const port = process.env.PORT || 5000;
    if (process.env.NODE_ENV !== 'production') {
        await app.listen(port);
        console.log(`Application is running on: http://localhost:${port}`);
    }
    else {
        await app.init();
    }
}
bootstrap();
exports.handler = (0, serverless_http_1.default)(expressApp);
//# sourceMappingURL=main.js.map