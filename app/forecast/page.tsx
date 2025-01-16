'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DatePicker } from "@/components/ui/date-picker"
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function ForecastPage() {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  const data = {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    datasets: [
      {
        label: '实际销售',
        data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: '预测销售',
        data: [70, 62, 85, 83, 58, 57, 42, 68, 62, 83, 84, 59],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '销售趋势预测',
      },
    },
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">销售趋势预测</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>预测结果</CardTitle>
              <CardDescription>基于历史数据的销售趋势预测</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-w-16 aspect-h-9">
                <Line data={data} options={options} />
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>预测参数配置</CardTitle>
              <CardDescription>调整预测模型参数</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    预测时间范围
                  </label>
                  <div className="flex space-x-2">
                    <DatePicker
                      selected={startDate}
                      onSelect={setStartDate}
                      placeholderText="开始日期"
                    />
                    <DatePicker
                      selected={endDate}
                      onSelect={setEndDate}
                      placeholderText="结束日期"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    季节性周期
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="选择季节性周期" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly">每周</SelectItem>
                      <SelectItem value="monthly">每月</SelectItem>
                      <SelectItem value="quarterly">每季度</SelectItem>
                      <SelectItem value="yearly">每年</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    节假日效应
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="选择节假日效应" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">不考虑</SelectItem>
                      <SelectItem value="chinese">中国传统节日</SelectItem>
                      <SelectItem value="western">西方节日</SelectItem>
                      <SelectItem value="all">所有节日</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    趋势变化点
                  </label>
                  <Input type="number" placeholder="输入趋势变化点数量" />
                </div>
                <Button className="w-full">运行预测</Button>
              </div>
            </CardContent>
          </Card>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>模型评估</CardTitle>
              <CardDescription>预测模型的性能指标</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>RMSE: 0.15</p>
                <p>MAE: 0.12</p>
                <p>MAPE: 5.3%</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

