'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FilterPage() {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">数据筛选</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>筛选条件</CardTitle>
              <CardDescription>选择您需要的筛选条件</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="time">
                  <AccordionTrigger>时间</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex space-x-4">
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
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="product">
                  <AccordionTrigger>产品</AccordionTrigger>
                  <AccordionContent>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="选择产品类别" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">全部</SelectItem>
                        <SelectItem value="tops">上衣</SelectItem>
                        <SelectItem value="bottoms">裤子</SelectItem>
                        <SelectItem value="dresses">连衣裙</SelectItem>
                        <SelectItem value="accessories">配饰</SelectItem>
                      </SelectContent>
                    </Select>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="region">
                  <AccordionTrigger>地区</AccordionTrigger>
                  <AccordionContent>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="选择地区" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">全国</SelectItem>
                        <SelectItem value="north">华北</SelectItem>
                        <SelectItem value="east">华东</SelectItem>
                        <SelectItem value="south">华南</SelectItem>
                        <SelectItem value="west">西部</SelectItem>
                      </SelectContent>
                    </Select>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="channel">
                  <AccordionTrigger>渠道</AccordionTrigger>
                  <AccordionContent>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="选择销售渠道" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">全部渠道</SelectItem>
                        <SelectItem value="online">线上</SelectItem>
                        <SelectItem value="offline">线下</SelectItem>
                        <SelectItem value="wholesale">批发</SelectItem>
                      </SelectContent>
                    </Select>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="promotion">
                  <AccordionTrigger>促销</AccordionTrigger>
                  <AccordionContent>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="选择促销类型" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">全部</SelectItem>
                        <SelectItem value="discount">折扣</SelectItem>
                        <SelectItem value="bundle">捆绑销售</SelectItem>
                        <SelectItem value="gift">赠品</SelectItem>
                      </SelectContent>
                    </Select>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="mt-4 space-x-4">
                <Button>应用筛选</Button>
                <Button variant="outline">重置</Button>
                <Button variant="secondary">保存筛选</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>筛选结果概览</CardTitle>
              <CardDescription>基于当前筛选条件的数据概览</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>总销售额: ¥1,234,567</p>
                <p>订单数: 5,678</p>
                <p>平均客单价: ¥217</p>
                <p>销售数量: 10,234</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

