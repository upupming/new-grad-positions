export enum PositionType {
  '实习生' = '实习生',
  '全职（秋季）' = '全职（秋季）',
  '全职补录（春季）' = '全职补录（春季）'
}

export enum CompanyType {
  国企 = '国企',
  私企 = '私企',
  外企 = '外企',
}

export interface Company {
  name: string
  website: string
  type: CompanyType
}

export interface PositionAnnouncement {
  url: string
  date: `${string}-${string}-${string}`
}

export interface PositionAnnouncementRefined extends PositionAnnouncement {
  title: string
}

export interface Position {
  graduationYear: number
  type: PositionType
  company: Company
  announcement: PositionAnnouncement
}

export interface PositionRefined extends Position {
  announcement: PositionAnnouncementRefined
}

export interface ProcessedData {
  positions: PositionRefined[]
  updatedAt: number
}

export const positions: Position[] = [
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '字节跳动',
      website: 'https://jobs.bytedance.com/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/mee1XP80u1oBs2NbX-reHw',
      date: '2022-02-17',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '腾讯',
      website: 'https://join.qq.com/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/UezGc383DBV9cjMjYbNCzg',
      date: '2022-04-11',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '阿里巴巴',
      website: 'https://talent.alibaba.com/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/ImsLgsFI5o28pjWJObqDFg',
      date: '2022-02-28',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '网易',
      website: 'https://campus.163.com/app/index',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/0eIEalTM4h3T9_7iUANfdQ',
      date: '2022-03-01',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '华为',
      website: 'https://career.huawei.com/reccampportal/portal5/index.html',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/oT2csvg891vUtVI-1CU2OA',
      date: '2022-03-14',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '微软',
      website: 'https://careers.microsoft.com/us/en/actioncenter',
      type: CompanyType.外企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/0kwiVC9tAH5GeaIE60dOqw',
      date: '2022-01-10',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '亚马逊',
      website: 'https://jobs.bytedance.com/',
      type: CompanyType.外企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/_E-CdOfzBLPYNOipjOXZ6w',
      date: '2022-02-25',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '苹果',
      website: 'https://www.apple.com/careers/cn/',
      type: CompanyType.外企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/y1EdX-Q4gYsq1XZSMZdQTA',
      date: '2022-03-24',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: 'Hulu',
      website: 'https://jobs.disneycareers.com/search-jobs?orgIds=391-28648&ascf=[{%22key%22:%22custom_fields.IndustryCustomField%22,%22value%22:%22Hulu%22}]',
      type: CompanyType.外企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/RyvQZPNZJUQto3hFcwLKgQ',
      date: '2022-02-25',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: 'Paypal',
      website: 'https://www.paypal.com/us/webapps/mpp/jobs/locations/china',
      type: CompanyType.外企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/qRd_flyPkWD8XS5UB-8X4A',
      date: '2022-03-18',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '小马智行',
      website: 'https://app.mokahr.com/campus_apply/pony/2735',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/QMpGia29XtyW4E-5rLTZkw',
      date: '2022-03-09',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '美团',
      website: 'https://campus.meituan.com/recruit',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/p9_jPgRcDnz0iOOVedIAQA',
      date: '2022-02-23',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '京东',
      website: 'https://zhaopin.jd.com/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/L3oZpuBwoybBRxpOTbjwkg',
      date: '2022-03-07',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '百度',
      website: 'https://talent.baidu.com/static/index.html',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/G_zZHWShta2ioKs16hVmvQ',
      date: '2022-03-07',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '海康威视',
      website: 'https://campushr.hikvision.com',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/JRnyR4_5Mox4Y5KlbbVwyQ',
      date: '2022-04-01',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '小米',
      website: 'https://hr.xiaomi.com/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/u-8NOL8K65LAridlAEwJLw',
      date: '2022-04-19',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '哔哩哔哩',
      website: 'https://jobs.bilibili.com/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/sPc70Ye48FFrDtMWZu3pcQ',
      date: '2022-04-18',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '联想',
      website: 'https://talent.lenovo.com.cn/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/__RQ18y2KeimWAeOUVpHVg',
      date: '2022-04-15',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '美的',
      website: 'http://careers.midea.com/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/WRxlbT05KMgOeLcDVKWHhw',
      date: '2022-03-30',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '腾讯音乐',
      website: 'https://join.tencentmusic.com/campus/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/qlHPELwiYya9LzuZg51ucQ',
      date: '2022-03-22',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '旷视科技',
      website: 'https://app.mokahr.com/campus_apply/megviihr/38642#/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/cTPtXMqEKEVb40uXUprYlw',
      date: '2022-03-16',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '商汤科技',
      website: 'https://hr.sensetime.com/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/Q-c3dYr8N0nVRhBzalyrug',
      date: '2022-03-07',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '图森未来',
      website: 'https://app.mokahr.com/campus_apply/tusenweilai/36102#/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/fjOf8A5SoGu7frDSH7uAUA',
      date: '2022-03-14',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '米哈游',
      website: 'https://join.mihoyo.com/campus-recruitment/mihoyo/43182/#/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/CK_uP09qLGunc9ewnUTh7A',
      date: '2022-02-22',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: 'TP-LINK',
      website: 'https://hr.tp-link.com.cn/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/iWWqaU4dtpeq535dyQqpfw',
      date: '2022-05-27',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: 'Zoom',
      website: 'https://www.zoom.us',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/Iq3bxmcYKWH6qK7iQY5__Q',
      date: '2022-06-10',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '大疆',
      website: 'https://we.dji.com/zh-CN/campus/inspiration',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/gWHyYIJPucWhV46OuVhj3Q',
      date: '2022-05-05',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '百度',
      website: 'https://talent.baidu.com/external/baidu/campus.html#/jobList',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/v8BVCDofVc5rAAdNzaxvSA',
      date: '2022-05-06',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '腾讯',
      website: 'https://join.qq.com/post.html?query=p_8',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/aeE9dWVV8fWcwcN6Pt35rQ',
      date: '2022-06-15',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '华为',
      website: 'https://career.huawei.com/reccampportal/portal5/campus-recruitment.html',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/8r-sELJKyaq-PnVOPUP8GQ',
      date: '2022-06-20',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '英特尔',
      website: 'https://chinacampus.jobs.intel.cn/intel/home/index?page=campus',
      type: CompanyType.外企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/IQoDLc1gvx0LLIfyTmyErw',
      date: '2022-06-28',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '九坤投资',
      website: 'https://app.mokahr.com/campus_apply/ubiquantrecruit',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/eNYYzfsueVxBXKwH_Dk7kg',
      date: '2022-07-01',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '米哈游',
      website: 'https://campus.mihoyo.com/#/campus/position',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/IwhVPuHB_Va2AqZTHaCaMw',
      date: '2022-07-04',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '网易游戏雷火',
      website: 'https://leihuo.163.com/campus/#/full',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/h6PvUeRyuQy0WONDOeSptA',
      date: '2022-07-05',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '中兴通讯',
      website: 'https://job.zte.com.cn/cn/campus-recruitment',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/21pMdR06Xop2aU98YfZtnQ',
      date: '2022-06-24',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: 'OPPO',
      website: 'https://careers.oppo.com/campus',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/9qwR91Zq9kYAuCzalQa_yQ',
      date: '2022-07-01',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '大疆',
      website: 'https://we.dji.com/zh-CN/campus/recruitment',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/j4bgh7DnQJ5V1-_QV3SRgA',
      date: '2022-07-06',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '字节跳动',
      website: 'https://jobs.bytedance.com/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/UIImrY1kmb9eQ2z-xYHRwA',
      date: '2022-07-07',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '华为',
      website: 'https://career.huawei.com/reccampportal/portal5/campus-recruitment.html',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/DsiVv7iNy_02-IBV1Cn4Ew',
      date: '2022-06-17',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '华为',
      website: 'https://career.huawei.com/reccampportal/portal5/campus-recruitment.html',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/PPMHKBu-NSshfT4AGFvFrA',
      date: '2022-06-21',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '华为',
      website: 'https://career.huawei.com/reccampportal/portal5/campus-recruitment.html',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/Xf_FUTTpFs6v75ov-PBtTw',
      date: '2022-06-20',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '华为',
      website: 'https://career.huawei.com/reccampportal/portal5/campus-recruitment.html',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/BvvGqy91sUDrda0Rzbd1Xw',
      date: '2022-06-30',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '华为',
      website: 'https://career.huawei.com/reccampportal/portal5/campus-recruitment.html',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/a-C-P-d1xBVdVy6meoe0cQ',
      date: '2022-05-07',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '华为',
      website: 'https://career.huawei.com/reccampportal/portal5/campus-recruitment.html',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/EhaRtWKqXLfJ975RSAewJg',
      date: '2022-06-16',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '旷视',
      website: 'https://app.mokahr.com/campus_apply/megviihr/38642#/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/46P9j8JbUXoMqwmPwjWejA',
      date: '2022-07-11',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '英伟达',
      website: 'https://app.mokahr.com/campus-recruitment/nvidia/47111#/',
      type: CompanyType.外企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/ItFls1KKSHTmHprybXNN-g',
      date: '2022-07-11',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '科大讯飞',
      website: 'https://campus.iflytek.com/official-pc/jobList',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/JzYmFsh4Yyyu_O0lgo2LNw',
      date: '2022-07-12',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '百度',
      website: 'https://talent.baidu.com/jobs/list',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/jYknxjBSLmRzgS3ralz7hw',
      date: '2022-07-14',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '蔚来',
      website: 'https://nio.jobs.feishu.cn/campus',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/S0ta29gUPSAM0Pb8cSJL5Q',
      date: '2022-06-20',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '哲库',
      website: 'https://app.mokahr.com/campus-recruitment/zeku',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/ZsgT5AhU83c2kGvZe3qDAg',
      date: '2022-07-11',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '联想中国',
      website: 'https://talent.lenovo.com.cn/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/0Wdou6EiUfrD0e0KPEULVg',
      date: '2022-07-15',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '美的',
      website: 'http://www.wjx.top/vm/PqrvaMT.aspx',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/LHB-Ig926nhAkTggoceEGA',
      date: '2022-07-04',
    },
  }
]
