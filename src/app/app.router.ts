import express from 'express';

const router = express.Router();

import fs from 'fs';

router.get('/', (request, response) => {
  // response.send({ title: '迷鹿相册' });

  /**
   * 暂时设置前端静态页面备案用途
   */
  response.setHeader('Content-type', 'text/html;charset=utf-8');
  fs.readFile('lostelk-static/views/layout.html', "utf-8", function (err, data) {
    if (!err) {
      response.end(data)
    } else {
      console.log(err)
    }
  })
});

router.post('/echo', (request, response) => {
  response.status(201).send(request.body);
});

/**
 * 导出路由
 */
export default router;
