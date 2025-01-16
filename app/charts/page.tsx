'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bar, Line, Pie, Scatter } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

const chartTypes = [
  { value: 'bar', label: '柱状图' },
  { value: 'line', label: '折线图' },
  { value: 'pie', label: '饼图' },
  { value: 'scatter', label: '散点图' },
]

export default function ChartsPage() {
  const [chartType, setChartType] = useState('bar')

  const data = {
    labels: ['一月', '二月', '三月', '四月', '五月', '六月'],
    datasets: [
      {
        label: '销售额',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '月度销售数据',
      },
    },
  }

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <Bar data={data} options={options} />
      case 'line':
        return <Line data={data} options={options} />
      case 'pie':
        return <Pie data={data} options={options} />
      case 'scatter':
        return <Scatter data={data} options={options} />
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">动态图表展示</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>图表展示</CardTitle>
              <CardDescription>选择图表类型并配置参数</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Select value={chartType} onValueChange={setChartType}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="选择图表类型" />
                  </SelectTrigger>
                  <SelectContent>
                    {chartTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="mb-4">
                <Input placeholder="图表标题" className="mb-2" />
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="X轴标签" />
                  <Input placeholder="Y轴标签" />
                </div>
              </div>
              <div className="aspect-w-16 aspect-h-9">
                {renderChart()}
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>图表配置</CardTitle>
              <CardDescription>自定义图表样式和数据</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" className="w-full">更改颜色</Button>
                <Button variant="outline" className="w-full">添加数据系列</Button>
                <Button variant="outline" className="w-full">修改图例</Button>
                <Button variant="outline" className="w-full">导出数据</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

