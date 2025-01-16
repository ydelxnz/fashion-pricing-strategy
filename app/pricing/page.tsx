'use client'

import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { usePricingStore } from '@/lib/store'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DatePicker } from "@/components/ui/date-picker"
import { Slider } from "@/components/ui/slider"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function PricingPage() {
  const { discountPercentage, updateDiscountPercentage } = usePricingStore()
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  const data = {
    labels: ['基准', '方案A', '方案B', '方案C'],
    datasets: [
      {
        label: '预计销量',
        data: [1000, 1200, 1100, 1300],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: '预计利润',
        data: [5000, 5500, 5200, 5800],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
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
        text: '促销方案对比',
      },
    },
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">促销定价策略制定</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>促销规则设置</CardTitle>
              <CardDescription>配置促销活动参数</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    促销类型
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="选择促销类型" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="discount">折扣</SelectItem>
                      <SelectItem value="bundle">捆绑销售</SelectItem>
                      <SelectItem value="gift">赠品</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    折扣力度 ({discountPercentage}%)
                  </label>
                  <Slider
                    value={[discountPercentage]}
                    onValueChange={(value) => updateDiscountPercentage(value[0])}
                    max={50}
                    step={1}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    促销时间
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
                    促销对象
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="选择促销对象" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">全部产品</SelectItem>
                      <SelectItem value="category">特定类别</SelectItem>
                      <SelectItem value="product">特定产品</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full">生成促销方案</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>促销方案预览</CardTitle>
              <CardDescription>预期效果对比</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-w-16 aspect-h-9">
                <Bar data={data} options={options} />
              </div>
            </CardContent>
          </Card>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>效果评估</CardTitle>
              <CardDescription>促销活动预期指标</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">预计销量提升</p>
                  <p className="text-2xl font-bold">20%</p>
                </div>
                <div>
                  <p className="text-sm font-medium">预计利润变化</p>
                  <p className="text-2xl font-bold">+15%</p>
                </div>
                <div>
                  <p className="text-sm font-medium">库存周转率</p>
                  <p className="text-2xl font-bold">1.5</p>
                </div>
                <div>
                  <p className="text-sm font-medium">ROI</p>
                  <p className="text-2xl font-bold">2.3</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
