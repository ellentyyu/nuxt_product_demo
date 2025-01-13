import { d as defineEventHandler } from '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'vue';
import 'node:fs';
import 'node:url';

const surveyData = defineEventHandler((event) => {
  return {
    id: "2836",
    name: "\u3010\u7F8E\u98DF\u63A2\u5E97\u9A5A\u559C\u5305\u3011\u591A\u5BB6\u795E\u79D8\u77E5\u540D\u9910\u5EF3\uFF0C\u7B49\u8457\u5404\u8DEF\u5403\u8CA8\u4F86\u5690\u9BAE",
    header: "",
    footer: "",
    after_fill: "",
    is_approved: true,
    is_disabled: false,
    start_at: "2024-10-14 17:00:00",
    end_at: "2025-10-14 00:00:00",
    question: [
      {
        key: "FSA8JN65pZPNlm1FX",
        groupid: "FSA8JN65pZPNlm1FX",
        title: "\u8ACB\u554F\u60A8\u6703\u5617\u8A66\u53BB\u4E0D\u540C\u7684\u5730\u65B9\u5C0B\u627E\u7F8E\u98DF\u55CE\uFF1F",
        number_is_show: "1",
        other_option: "",
        q_required: "checked",
        margin_left: "0",
        margin_top: "0",
        margin_right: "0",
        margin_down: "0",
        type: "1",
        q_show_format: "1",
        "q_option[]": ["\u7D93\u5E38", "\u5076\u723E", "\u5F88\u5C11", "\u937E\u60C5\u65BC\u67D0\u4E00\u5BB6\u5E97"]
      },
      {
        key: "RHMSpB9DSCsGKvstL",
        groupid: "RHMSpB9DSCsGKvstL",
        title: "\u8ACB\u554F\u4E0B\u5217\u7F8E\u98DF\u6599\u7406\uFF0C\u60A8\u6700\u559C\u611B\u54EA\u4E00\u7A2E\uFF1F\uFF08\u53EF\u8907\u9078\uFF09",
        number_is_show: "1",
        other_option: "\u5176\u4ED6\uFF0C\u8ACB\u8AAA\u660E\uFF1A",
        q_required: "checked",
        q_required_num: "1",
        margin_left: "0",
        margin_top: "0",
        margin_right: "0",
        margin_down: "0",
        type: "2",
        q_show_format: "1",
        "q_option[]": [
          "\u5496\u5561\u5EF3\u3001\u4E0B\u5348\u8336",
          "\u65E5\u5F0F\u6599\u7406\u3001\u751F\u9B5A\u7247",
          "\u71D2\u8089\u5E97\u3001\u58FD\u559C\u71D2",
          "\u706B\u934B\u5E97\u3001\u9EBB\u8FA3\u934B",
          "\u5C45\u9152\u5C4B\u3001\u4E32\u71D2",
          "\u7F8E\u5F0F\u9910\u5EF3",
          "\u6CF0\u5F0F\u9910\u5EF3",
          "\u97D3\u5F0F\u9910\u5EF3",
          "\u897F\u9910\u5EF3",
          "\u9910\u9152\u9928",
          "\u71B1\u7092\u3001\u684C\u83DC",
          "\u5C0F\u5403\u985E"
        ]
      },
      {
        key: "OgG7wAtSFaFKKJOEO",
        groupid: "OgG7wAtSFaFKKJOEO",
        title: "\u8ACB\u554F\u60A8\u662F\u5426\u6709\u4E0B\u5217\u98F2\u98DF\u7981\u5FCC\uFF1F\uFF08\u53EF\u8907\u9078\uFF09",
        number_is_show: "1",
        other_option: "\u5176\u4ED6\uFF0C\u8ACB\u8AAA\u660E\uFF1A",
        q_required: "checked",
        q_required_num: "1",
        margin_left: "0",
        margin_top: "0",
        margin_right: "0",
        margin_down: "0",
        type: "2",
        q_show_format: "1",
        "q_option[]": ["\u7121", "\u8FA3", "\u8C6C", "\u96DE", "\u7F8A", "\u725B", "\u8477\u98DF"]
      },
      {
        key: "dtUFtUqvHcCet3HdE",
        groupid: "dtUFtUqvHcCet3HdE",
        title: "\u8ACB\u554F\u60A8\u5728\u793E\u7FA4\u767C\u5E03\u7F8E\u98DF\u76F8\u95DC\u4E3B\u984C\u7684\u983B\u7387\u70BA\uFF1F",
        number_is_show: "1",
        other_option: "\u5176\u4ED6\uFF0C\u8ACB\u8AAA\u660E\uFF1A",
        q_required: "checked",
        margin_left: "0",
        margin_top: "0",
        margin_right: "0",
        margin_down: "0",
        type: "1",
        q_show_format: "1",
        "q_option[]": [
          "\u65E5\u66F4",
          "\u6BCF\u9031\u5169\u6B21",
          "\u6BCF\u9031\u4E09\u6B21",
          "\u6BCF\u9031\u4E09\u6B21\u4EE5\u4E0A",
          "\u6BCF\u6708\u4E00\u6B21"
        ]
      }
    ],
    answer_count: {
      FSA8JN65pZPNlm1FX: {
        \u7D93\u5E38: 257,
        \u5076\u723E: 64,
        \u5F88\u5C11: 3,
        \u937E\u60C5\u65BC\u67D0\u4E00\u5BB6\u5E97: 0
      },
      RHMSpB9DSCsGKvstL: {
        "\u5496\u5561\u5EF3\u3001\u4E0B\u5348\u8336": 248,
        "\u65E5\u5F0F\u6599\u7406\u3001\u751F\u9B5A\u7247": 228,
        "\u71D2\u8089\u5E97\u3001\u58FD\u559C\u71D2": 256,
        "\u706B\u934B\u5E97\u3001\u9EBB\u8FA3\u934B": 267,
        "\u5C45\u9152\u5C4B\u3001\u4E32\u71D2": 187,
        \u7F8E\u5F0F\u9910\u5EF3: 190,
        \u6CF0\u5F0F\u9910\u5EF3: 211,
        \u97D3\u5F0F\u9910\u5EF3: 223,
        \u897F\u9910\u5EF3: 212,
        \u9910\u9152\u9928: 185,
        "\u71B1\u7092\u3001\u684C\u83DC": 165,
        \u5C0F\u5403\u985E: 173
      },
      OgG7wAtSFaFKKJOEO: {
        \u7121: 231,
        \u8FA3: 48,
        \u8C6C: 4,
        \u96DE: 2,
        \u7F8A: 27,
        \u725B: 32,
        \u8477\u98DF: 6
      },
      dtUFtUqvHcCet3HdE: {
        \u65E5\u66F4: 11,
        \u6BCF\u9031\u5169\u6B21: 82,
        \u6BCF\u9031\u4E09\u6B21: 27,
        \u6BCF\u9031\u4E09\u6B21\u4EE5\u4E0A: 29,
        \u6BCF\u6708\u4E00\u6B21: 95
      },
      oanWsBhrjqbh6RR54: {
        "1\u4EBA": 24,
        "2\u4EBA\uFF08\u542B\u7DB2\u7D05\u672C\u4EBA\uFF09": 233,
        "4\u4EBA\uFF08\u542B\u7DB2\u7D05\u672C\u4EBA\uFF09": 67
      },
      KwyznXz9NJoboRuqA: {
        \u662F: 289,
        \u5426: 35
      },
      "9JmAamObzuQjnqFfR": {
        "1,000~3,000": 284,
        "3,000~6,000": 40,
        "6,000~10,000": 0,
        "10,000\u4EE5\u4E0A": 0
      },
      CqVgunALgjxl4cAvB: {
        \u7537: 54,
        \u5973: 270
      },
      QMXBzIAoMnBiE59hS: {
        "19\u6B72\u4EE5\u4E0B": 1,
        "20-24\u6B72": 14,
        "25-29\u6B72": 46,
        "30~34\u6B72": 85,
        "35~40\u6B72": 82,
        "41\u6B72\u4EE5\u4E0A": 96
      },
      EWrNHB12Q2VSKD6vu: {
        \u6211\u540C\u610F: 324
      },
      M79UhrC1Ojzca5Bym: {
        \u6211\u540C\u610F: 324
      },
      u68FKCOhDyKOp8tqj: {
        "\u6211\u9858\u610F\uFF0C\u8ACB\u5BC4\u7D66\u6211": 294
      },
      cache_key: "questionnaire:answer:count:2836",
      cache: true
    }
  };
});

export { surveyData as default };
//# sourceMappingURL=surveyData.mjs.map
