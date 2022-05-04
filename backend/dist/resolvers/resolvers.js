"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var resolvers = {
    Query: {
        articles: function () { return __awaiter(void 0, void 0, void 0, function () {
            var articles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, prisma.article.findMany({
                            include: { comments: true },
                        })];
                    case 1:
                        articles = _a.sent();
                        return [2, articles];
                }
            });
        }); },
        article: function (_, args) { return __awaiter(void 0, void 0, void 0, function () {
            var id, article;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = args.id;
                        return [4, prisma.article.findUnique({
                                where: { id: Number(id) },
                                include: {
                                    comments: true,
                                },
                            })];
                    case 1:
                        article = _a.sent();
                        return [2, article];
                }
            });
        }); },
        comments: function (_, args) { return __awaiter(void 0, void 0, void 0, function () {
            var id, comments;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = args.id;
                        return [4, prisma.comment.findMany({
                                where: { articleId: Number(id) },
                            })];
                    case 1:
                        comments = _a.sent();
                        return [2, comments];
                }
            });
        }); }
    },
    Mutation: {
        createArticle: function (_, args) { return __awaiter(void 0, void 0, void 0, function () {
            var article, textHeading, textBody, authorName, createdArticle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        article = args.article;
                        textHeading = article.textHeading, textBody = article.textBody, authorName = article.authorName;
                        return [4, prisma.article.create({
                                data: {
                                    textHeading: textHeading,
                                    textBody: textBody,
                                    authorName: authorName,
                                },
                            })];
                    case 1:
                        createdArticle = _a.sent();
                        return [2, createdArticle];
                }
            });
        }); },
        createComment: function (_, args) { return __awaiter(void 0, void 0, void 0, function () {
            var comment, text, articleId, authorName, createdComment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        comment = args.comment;
                        text = comment.text, articleId = comment.articleId, authorName = comment.authorName;
                        return [4, prisma.comment.create({
                                data: {
                                    text: text,
                                    articleId: Number(articleId),
                                    authorName: authorName,
                                },
                            })];
                    case 1:
                        createdComment = _a.sent();
                        return [2, createdComment];
                }
            });
        }); },
    },
};
exports.default = resolvers;
