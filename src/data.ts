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

export const positions: Position[] = [
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '字节跳动',
      website: 'https://jobs.bytedance.com/',
      type: CompanyType.私企
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/mee1XP80u1oBs2NbX-reHw',
      date: '2022-02-17'
    }
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '腾讯',
      website: 'https://join.qq.com/',
      type: CompanyType.私企
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/UezGc383DBV9cjMjYbNCzg',
      date: '2022-04-11'
    }
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '阿里巴巴',
      website: 'https://talent.alibaba.com/',
      type: CompanyType.私企
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/ImsLgsFI5o28pjWJObqDFg',
      date: '2022-02-28'
    }
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '网易',
      website: 'https://campus.163.com/app/index',
      type: CompanyType.私企
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/0eIEalTM4h3T9_7iUANfdQ',
      date: '2022-03-01'
    }
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '华为',
      website: 'https://career.huawei.com/reccampportal/portal5/index.html',
      type: CompanyType.私企
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/oT2csvg891vUtVI-1CU2OA',
      date: '2022-03-14'
    }
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '微软',
      website: 'https://careers.microsoft.com/us/en/actioncenter',
      type: CompanyType.外企
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/0kwiVC9tAH5GeaIE60dOqw',
      date: '2022-01-10'
    }
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '亚马逊',
      website: 'https://jobs.bytedance.com/',
      type: CompanyType.外企
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/_E-CdOfzBLPYNOipjOXZ6w',
      date: '2022-02-25'
    }
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '苹果',
      website: 'https://www.apple.com/careers/cn/',
      type: CompanyType.外企
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/y1EdX-Q4gYsq1XZSMZdQTA',
      date: '2022-03-24'
    }
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: 'Hulu',
      website: 'https://jobs.disneycareers.com/search-jobs?orgIds=391-28648&ascf=[{%22key%22:%22custom_fields.IndustryCustomField%22,%22value%22:%22Hulu%22}]',
      type: CompanyType.外企
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/RyvQZPNZJUQto3hFcwLKgQ',
      date: '2022-02-25'
    }
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: 'Paypal',
      website: 'https://www.paypal.com/us/webapps/mpp/jobs/locations/china',
      type: CompanyType.外企
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/qRd_flyPkWD8XS5UB-8X4A',
      date: '2022-03-18'
    }
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '小马智行',
      website: 'https://app.mokahr.com/campus_apply/pony/2735',
      type: CompanyType.私企
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/QMpGia29XtyW4E-5rLTZkw',
      date: '2022-03-09'
    }
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '美团',
      website: 'https://campus.meituan.com/recruit',
      type: CompanyType.私企
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/p9_jPgRcDnz0iOOVedIAQA',
      date: '2022-02-23'
    }
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '京东',
      website: 'https://zhaopin.jd.com/',
      type: CompanyType.私企
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/L3oZpuBwoybBRxpOTbjwkg',
      date: '2022-03-07'
    }
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '百度',
      website: 'https://talent.baidu.com/static/index.html',
      type: CompanyType.私企
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/G_zZHWShta2ioKs16hVmvQ',
      date: '2022-03-07'
    }
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '海康威视',
      website: 'https://campushr.hikvision.com',
      type: CompanyType.私企
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/JRnyR4_5Mox4Y5KlbbVwyQ',
      date: '2022-04-01'
    }
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '小米',
      website: 'https://hr.xiaomi.com/',
      type: CompanyType.私企
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/u-8NOL8K65LAridlAEwJLw',
      date: '2022-04-19'
    }
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '哔哩哔哩',
      website: 'https://jobs.bilibili.com/',
      type: CompanyType.私企
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/sPc70Ye48FFrDtMWZu3pcQ',
      date: '2022-04-18'
    }
  },
  {
    graduationYear: 2023,
    type: PositionType.实习生,
    company: {
      name: '联想',
      website: 'https://talent.lenovo.com.cn/',
      type: CompanyType.私企
    },
    announcement: {
      url: 'https://mp.weixin.qq.com/s/__RQ18y2KeimWAeOUVpHVg',
      date: '2022-04-15'
    }
  }
]
