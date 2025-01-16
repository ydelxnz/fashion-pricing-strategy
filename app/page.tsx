import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">欢迎使用服装行业季节性促销定价策略平台</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>数据概览</CardTitle>
            <CardDescription>当前数据统计</CardDescription>
          </CardHeader>
          <CardContent>
            <p>总销售额: ¥1,234,567</p>
            <p>总订单数: 5,678</p>
            <p>平均客单价: ¥217</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>最新预测</CardTitle>
            <CardDescription>未来30天销售预测</CardDescription>
          </CardHeader>
          <CardContent>
            <p>预计销售额: ¥2,345,678</p>
            <p>预计增长率: 5.6%</p>
            <p>置信区间: ±2.3%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>当前促销活动</CardTitle>
            <CardDescription>正在进行的促销活动</CardDescription>
          </CardHeader>
          <CardContent>
            <p>活动数量: 3</p>
            <p>参与商品数: 156</p>
            <p>预计ROI: 2.1</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

