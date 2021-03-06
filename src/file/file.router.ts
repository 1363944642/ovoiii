import express from 'express';
import * as fileController from './file.controller';
import { authGuard, accessControlFile } from '../auth/auth.middleware';
import { fileInterceptor, fileProcessor, fileDownloadGuard } from './file.middleware';

const router = express.Router();

/**
 * 上传文件
 */
router.post(
  '/files',
  authGuard,
  accessControlFile({ possession: true }),
  fileInterceptor,
  fileProcessor,
  fileController.store,
);

/**
 * 文件服务
 */
router.get('/files/:fileId/serve', fileController.serve);

/**
 * 文件信息
 */
router.get('/files/:fileId/metadata', fileController.metadata);

/**
 * 下载文件
 */
router.get(
  '/files/:fileId/download',
  fileDownloadGuard,
  fileController.download,
)

/**
 * 导出路由
 */
export default router;
