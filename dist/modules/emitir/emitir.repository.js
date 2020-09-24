"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitirRepository = void 0;
const typeorm_1 = require("typeorm");
const emitir_entity_1 = require("./emitir.entity");
let EmitirRepository = class EmitirRepository extends typeorm_1.Repository {
};
EmitirRepository = __decorate([
    typeorm_1.EntityRepository(emitir_entity_1.Emitir)
], EmitirRepository);
exports.EmitirRepository = EmitirRepository;
//# sourceMappingURL=emitir.repository.js.map