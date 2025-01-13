import { d as defineEventHandler } from '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'vue';
import 'node:fs';
import 'node:url';

const categoryData = defineEventHandler((event) => {
  return [
    {
      "id": "all",
      "name": "\u6700\u65B0"
    },
    {
      "id": "190",
      "name": "\u751F\u6D3B",
      "description": "",
      "image": "",
      "image_mobile": "",
      "is_free": "0",
      "for_sort": "1",
      "product_count": "160"
    },
    {
      "id": "169",
      "name": "\u7F8E\u98DF",
      "description": "\u7F8E\u98DF\u76F8\u95DC\u7684\u8A66\u7528\u54C1",
      "image": "",
      "image_mobile": "",
      "is_free": "0",
      "for_sort": "2",
      "product_count": "73"
    },
    {
      "id": "172",
      "name": "\u5716\u66F8",
      "description": "",
      "image": "",
      "image_mobile": "",
      "is_free": "0",
      "for_sort": "3",
      "product_count": "35"
    },
    {
      "id": "193",
      "name": "\u5F71\u8996",
      "description": "\u5F71\u8996\u8A66\u7528\u5340",
      "image": "",
      "image_mobile": "",
      "is_free": "0",
      "for_sort": "4",
      "product_count": "28"
    }
  ];
});

export { categoryData as default };
//# sourceMappingURL=categoryData.mjs.map
