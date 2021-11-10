export default {
    getWeaherIcon(code) {
        //2021年10月14日抓全国腾讯天气数据只有这些，如果出现bug图标则补充code
        // 2021年11月10日查询到城市数据ID和天气数据ID 通用一整套 数据可以到 
        // https://lbsyun.baidu.com/index.php?title=webapi/weather
        // 百度云资源下载中下载对照表
        const codeIcon = [
            {
                "code": 0,
                "name": "晴",
                "icon": "if-a-qingtianbaitian"
            },
            {
                "code": 1,
                "name": "多云",
                "icon": "if-duoyun"
            },
            {
                "code": 2,
                "name": "阴",
                "icon": "if-yintian"
            },
            {
                "code": 3,
                "name": "阵雨",
                "icon": "if-zhenyu"
            },
            {
                "code": 4,
                "name": "雷阵雨",
                "icon": "if-leizhenyu"
            },
            {
                "code": 6,
                "name": "雨夹雪",
                "icon": "if-yujiaxue"
            },
            {
                "code": 7,
                "name": "小雨",
                "icon": "if-xiaoyu"
            },
            {
                "code": 8,
                "name": "中雨",
                "icon": "if-zhongyu"
            },
            {
                "code": 9,
                "name": "大雨",
                "icon": "if-dayu"
            },
            {
                "code": 10,
                "name": "暴雨",
                "icon": "if-baoyu"
            },
            {
                "code": 11,
                "name": "大暴雨",
                "icon": "if-baoyu"
            },
            {
                "code": 13,
                "name": "阵雪",
                "icon": "if-zhenxue"
            },
            {
                "code": 14,
                "name": "小雪",
                "icon": "if-xiaoxue"
            },
            {
                "code": 15,
                "name": "中雪",
                "icon": "if-zhongxue"
            },
            {
                "code": 16,
                "name": "大雪",
                "icon": "if-daxue"
            },
            {
                "code": 17,
                "name": "暴雪",
                "icon": "if-baoxue"
            },
            {
                "code": 18,
                "name": "大暴雪",
                "icon": "if-baoxue"
            },
            {
                "code": 18,
                "name": "雾",
                "icon": "if-wu"
            },
            {
                "code": 21,
                "name": "小到中雨",
                "icon": "cc"
            },
            {
                "code": 22,
                "name": "中到大雨",
                "icon": "if-zhongyu"
            },
            {
                "code": 53,
                "name": "霾",
                "icon": "if-wumai"
            },
            {
                "code": 301,
                "name": "雨",
                "icon": "if-zhongyu"
            }
        ]
        const findIcon = codeIcon.filter(p => p.code == parseInt(code) || p.name == code)
        return findIcon.length > 0 ? findIcon[0].icon : "fa-bug";
    },
}