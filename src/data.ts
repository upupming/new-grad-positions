export enum PositionType {
  '实习生' = '实习生',
  '全职（秋季）' = '全职（秋季）',
  '全职补录（春季）' = '全职补录（春季）',
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
      name: '飞腾',
      website: 'https://www.phytium.com.cn/',
      type: CompanyType.国企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/Uc-y7ssMcdSs_G-g5MJVfg',
      date: '2022-09-02',
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
      name: '腾讯-技术大咖专项',
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
      name: '腾讯',
      website: 'https://join.qq.com/post.html?query=p_1',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/2prApBfwKBBE4BxIcOg4qw',
      date: '2022-09-15',
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
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: 'Shopee',
      website: 'https://app.mokahr.com/campus_apply/shopee/2962#/',
      type: CompanyType.外企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/7Tcqfs31VWna1-Bx7FREaQ',
      date: '2022-07-18',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '海尔',
      website: 'http://vta.maker.haier.net/client/campusmobile/activity/id/18.html',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s?__biz=MzA3MzIzODc5MQ==&mid=2454382623&idx=1&sn=475b256e8ad7a938a55dff45cc69c48b&chksm=88ac5877bfdbd1618f6e52aee10a3b8dc34974e0292606cd9f11a4d6350c9a620cc6bd6dae5d&mpshare=1&scene=23&srcid=0717Ox3q4ushytTiIBASKTe0&sharer_sharetime=1658048425410&sharer_shareid=fcdd77543f29b035f162d5e36e4960d9%23rd',
      date: '2022-06-06',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '小红书',
      website: 'https://job.xiaohongshu.com/m/campus',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/EKzJkrnZ9INSIqLJ7Z70QQ',
      date: '2022-07-19',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: 'Zoom',
      website: 'https://www.nowcoder.com/careers/zoom/102351',
      type: CompanyType.外企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/tlYuYBAUyJuUpF8c5YYCvQ',
      date: '2022-07-20',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '深信服科技',
      website: 'https://hr.sangfor.com/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/cma6-0jtb2uXFRV00aAf4g',
      date: '2022-07-25',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '网易游戏互娱',
      website: 'https://game.campus.163.com/position/12/?sc=1',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/6ATQsmddGiJ3wRRlfxncuw',
      date: '2022-07-26',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '快手',
      website: 'https://campus.kuaishou.cn/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/TIFg_GD-XYob0y9MBxugxA',
      date: '2022-07-28',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '荣耀',
      website: 'https://career.hihonor.com/SU60eea919bef57c1023f6fe78/pb/school.html',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/G_Z_vVqvSux3xN264mEu-A',
      date: '2022-07-26',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '特斯拉',
      website: 'https://app.mokahr.com/campus_apply/tesla/41460?sourceToken=927ae25b0bf38126a21b1c83955c7ba0#/',
      type: CompanyType.外企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/YeY1MVQc9bwIP7QhdDgaow',
      date: '2022-07-27',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '海康威视',
      website: 'https://campushr.hikvision.com/school.html',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/FnzIRYdOxsQKgWq1eKAZFw',
      date: '2022-07-27',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '地平线',
      website: 'https://horizon.hotjob.cn/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/jPDFWeTp6iajfoSmivBqIA',
      date: '2022-07-28',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: 'Momenta',
      website: 'https://momenta.jobs.feishu.cn/campus',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/p4_Uo90ulqh53nPvrhXvuw',
      date: '2022-07-29',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '美团',
      website: 'https://campus.meituan.com/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/d-t1zIJFmOvCuwcN374j7g',
      date: '2022-08-01',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '微软',
      website: 'https://careers.microsoft.com/',
      type: CompanyType.外企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/xVcUSUdsKprCVf6xHor-Rg',
      date: '2022-08-01',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '京东',
      website: 'https://campus.jd.com/api/wx/position/index?type=present',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/MS_iH_osZOxmcuniIFd2ig',
      date: '2022-08-01',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '吉利',
      website: 'https://campus.geely.com',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/-6LYDJ_3QxBu0BP_aLaWmQ',
      date: '2022-08-01',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '广汽丰田',
      website: 'https://gac-toyota.m.zhiye.com/JobAd/Info?adid=620661636',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/PvxbmUfcCAcpwt9uwZdkfA',
      date: '2022-08-01',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '蔚来',
      website: 'https://campus.nio.com/#/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/RBfwJuyO6rQaeO4MRt1Oaw',
      date: '2022-08-01',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '鹰角',
      website: 'https://jobs.hypergryph.com/campus_apply/hypergryph/26326#/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/aTusLZxjI-mOleiMj1o5xg',
      date: '2022-08-02',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '传音控股',
      website: 'https://transsion.m.zhiye.com/xzzw.html',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/68OJpWSBQaHFJQ6RkzUB4Q',
      date: '2022-07-29',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '寒武纪',
      website: 'https://app.mokahr.com/campus_apply/cambricon/1112#/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/JToWHkUG7BjHebh7i_xaqA',
      date: '2022-07-29',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '网易互联网',
      website: 'https://campus.163.com/app/net/position',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/FvhPCULRXmw-04gF4bpnaQ',
      date: '2022-08-02',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '搜狐',
      website: 'https://hr.sohu.com/social-recruitment/sohu/43256#/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/DSuXGHY5FA2X5eqtBU3QrQ',
      date: '2022-08-03',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '360',
      website: 'http://360campus.zhiye.com/jobs',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/5HjD1Xh18Kb7Alez9hf--g',
      date: '2022-08-01',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '招银网络科技',
      website: 'https://cmbnt.cmbchina.com/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/p0d4UAeaHZKOlA80qkhs_w',
      date: '2022-08-04',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '依图科技',
      website: 'https://app.mokahr.com/campus_apply/yitu-inc/3700#/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/-XqpFp6Qu_a8E3Iuck1Wng',
      date: '2022-08-05',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '完美世界',
      website: 'https://jobs.games.wanmei.com/school.html',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/4YNUK5Wa0pVCPZOqr8tNFQ',
      date: '2022-08-02',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '去哪儿旅行',
      website: 'https://campus.qunar.com',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/srsxEdf-RPlKFTaHKq_dWQ',
      date: '2022-08-05',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '中国电信天翼云',
      website: 'https://ctyun.hotjob.cn',
      type: CompanyType.国企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/-vTinwze72nK42XtnmAmKQ',
      date: '2022-08-09',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '海康威视',
      website: 'https://campushr.hikvision.com/home',
      type: CompanyType.国企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/fkLtyFYWbwz1NeKk7mRLbA',
      date: '2022-08-02',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '4399',
      website: 'http://web.4399.com/campus/yjsgw/cehualei/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/K8OT7G_MFp3YNV79-f0imw',
      date: '2022-08-02',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '交通银行',
      website: 'https://job.bankcomm.com/',
      type: CompanyType.国企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/G-lmDqlsW1yblApEyHlcsw',
      date: '2022-08-08',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '小马智行',
      website: 'https://app.mokahr.com/campus-recruitment/pony/42966/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/_vGUVFolSYJCDKihJevu7A',
      date: '2022-08-05',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '亚马逊',
      website: 'https://www.amazon.jobs/zh/',
      type: CompanyType.外企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/kyHn_tUs-iXOlfWD_JnUeg',
      date: '2022-08-08',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '字节跳动',
      website: 'https://job.toutiao.com/campus/?spread=ZHMP9K6',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/2xgtgjcDXD4CLl0oEsUFWg',
      date: '2022-08-10',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '哔哩哔哩',
      website: 'https://jobs.bilibili.com/campus/positions?channel=bilibiliaccounts',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/jqwevXb8MJb7tYSZN_lEKQ',
      date: '2022-08-10',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '阿里巴巴',
      website: 'https://mp.weixinbridge.com/mp/wapredirect?url=https%3A%2F%2Ftalent.alibaba.com%2Fcampus%2Fhome',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/icpSIIt0Z_oxJqNc8w3AEw',
      date: '2022-08-18',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '小米',
      website: 'https://hr.xiaomi.com/campus',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/HRdoNhsIs6HcFPDgd_dwBQ',
      date: '2022-08-18',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '小红书',
      website: 'https://job.xiaohongshu.com/m/campus',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/6IM9XkgfLCEU9BAPGbjz4g',
      date: '2022-08-22',
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
      url: 'https://mp.weixin.qq.com/s/Ft9yhpIXsI0Uxi6R8yR79A',
      date: '2022-08-19',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: 'Akuna Capital',
      website: 'https://akunacapital.com/careers#careers',
      type: CompanyType.外企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/WIOlc2eBGrfmMUstKAHZ4A',
      date: '2022-08-19',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '腾讯音乐',
      website: 'https://join.tencentmusic.com/campus/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/dE28r8lUsWoP4OfNzSCMOg',
      date: '2022-08-22',
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
      url: 'https://mp.weixin.qq.com/s/vt76qeBy9YEQ-Yoj7acmYg',
      date: '2022-08-24',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '佳期投资',
      website: 'https://www.jqinvestments.com/careers',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/vJfNh3PdKM_XtrKtYWf9og',
      date: '2022-08-24',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: 'Hulu',
      website: 'https://chinajobs.disneycareers.cn/%e6%b1%82%e8%81%8c/hulu/3333/1?glat=40.73569869995117&glon=-74.17240142822266',
      type: CompanyType.外企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/wHOlSyjl63B7mybQn0DUyQ',
      date: '2022-08-26',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '中国中铁广州局',
      website: 'http://www.crecg.com/web/10089120/index.html',
      type: CompanyType.国企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/F5VAJYplPZY2_hCREAbJUw',
      date: '2022-08-31',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '高通',
      website: 'https://nowpick.nowcoder.com/w/company-project?dockSourceProjectId=106936',
      type: CompanyType.外企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/9nLxqfUHnrkKDkf6hoT3mw',
      date: '2022-08-31',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: 'PayPal',
      website: 'https://paypal.eightfold.ai/careers?query=Recent%20Graduate&location=Shanghai%2C%20Shanghai%2C%20China&pid=274889961056&domain=paypal.com&triggerGoButton=true',
      type: CompanyType.外企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/yvIcZfXbTaJmv5tXaO4MHw',
      date: '2022-07-01',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '龙湖集团',
      website: 'https://app.mokahr.com/campus-recruitment/longfor/74084#/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/2hbzUsyYZC57WAm-GiVm_Q',
      date: '2022-08-09',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '中国人寿',
      website: 'https://chinalife.hotjob.cn/',
      type: CompanyType.国企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/iqj6TjEKQDiVikFl77JQXw',
      date: '2022-08-24',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '中国农业银行研发中心',
      website: 'https://career.abchina.com/build/index.html#/99',
      type: CompanyType.国企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/W1bEP5a-DZjktQeF3UpInA',
      date: '2022-09-04',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: 'eBay',
      website: 'https://jobs.ebayinc.com/search-jobs/2023%20RCG/403/1',
      type: CompanyType.外企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/h_rQsW6VP9x16-BQKwD9CA',
      date: '2022-09-01',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: 'Unity',
      website: 'https://unity.cn/campus',
      type: CompanyType.外企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/QT7Ja_aqMm1yhyx2RNnHHg',
      date: '2022-08-31',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '蚂蚁集团',
      website: 'https://talent.antgroup.com/home?chInfo=ch_official',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/x8Ttp0GYWdGNm6UARGjDrw',
      date: '2022-09-09',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '中国银行',
      website: 'https://campus.chinahr.com/pages/2023-boc/#/',
      type: CompanyType.国企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/K3-zb_MIBE7awqSyWWw1pA',
      date: '2022-09-08',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '中国邮政储蓄银行',
      website: 'http://psbc2023.zhaopin.com/',
      type: CompanyType.国企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/vyF06oErkFiMG6r0WuJoBQ',
      date: '2022-08-29',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '苹果',
      website: 'https://jobs.apple.com/zh-cn/search?location=china-CHNC&team=internships-STDNT-INTRN+corporate-STDNT-CORP+apple-store-STDNT-ASTR&cid=social_all_china_wechat_china_students_opportunities&board_id=JB089',
      type: CompanyType.外企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/D80tvKArO9CecDVsccISCQ',
      date: '2022-09-05',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '收钱吧',
      website: 'https://jobs.shouqianba.com/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/uARBS79kTH2zi-dbS62jKA',
      date: '2022-09-09',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: 'Hotstar',
      website: 'https://jobs.lever.co/hotstar?location=Beijing',
      type: CompanyType.外企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/ZLAGxQESK0_0_LuXEyr1dw',
      date: '2022-09-09',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: 'FunPlus',
      website: 'https://app.mokahr.com/su/qumjtz',
      type: CompanyType.外企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/FGYHAHXBhddNc16PV6Kl-w',
      date: '2022-09-05',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: 'IBM',
      website: 'http://ibm2023.kongxuan.com/',
      type: CompanyType.外企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/mZytr26ptFhE9bFanK_pvQ',
      date: '2022-09-20',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '新浪',
      website: 'https://career.sina.com.cn/campus-recruitment/sina/43536#/',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/SfzXi7dUZk7Xnfz-zEYY_A',
      date: '2022-08-22',
    },
  },
  {
    graduationYear: 2023,
    type: PositionType['全职（秋季）'],
    company: {
      name: '金山云',
      website: 'https://campus.ksyun.com/campus_apply/kingsoft/39364/#',
      type: CompanyType.私企,
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/rmVrdMIYFPho30v-npF-WA',
      date: '2022-10-19',
    },
  }
]
