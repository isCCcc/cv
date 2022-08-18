// 基于准备好的dom，初始化echarts实例
let myChart = echarts.init(document.getElementById('skillMap'));

// 指定图表的配置项和数据

const lineStyle = {
    width: 1,
    opacity: 0.5
};
option = {
    backgroundColor: '#161627',
    legend: {
        bottom: 5,
        data: ['能力雷达图'],
        itemGap: 20,
        textStyle: {
            color: '#fff',
            fontSize: 14
        },
        selectedMode: 'single'
    },
    radar: {
        indicator: [
            { name: '静态页面', max: 100 },
            { name: '编程基础', max: 100 },
            { name: 'Vue 全家桶', max: 100 },
            { name: '项目开发能力', max: 100 },
            { name: '沟通能力', max: 100 }
        ],
        shape: 'circle',
        splitNumber: 5,
        axisName: {
            color: 'rgb(238, 197, 102)'
        },
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(238, 197, 102, 0.1)',
                    'rgba(238, 197, 102, 0.2)',
                    'rgba(238, 197, 102, 0.4)',
                    'rgba(238, 197, 102, 0.6)',
                    'rgba(238, 197, 102, 0.8)',
                    'rgba(238, 197, 102, 1)'
                ].reverse()
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
            }
        }
    },
    series: [
        {
            name: '能力雷达图',
            type: 'radar',
            lineStyle: lineStyle,
            data: [{
                value: [80, 80, 80, 80, 80],
                name: '能力雷达图'
            }],
            symbol: 'none',
            itemStyle: {
                color: '#F9713C'
            },
            areaStyle: {
                opacity: 0.1
            }
        },
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
